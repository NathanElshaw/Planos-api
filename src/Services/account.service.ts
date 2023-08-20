import crypto from "crypto";
import Account_Model, { Account_Info_Document } from "../Models/account.model";

const Account_Service = {
  Create_Account: async (account_Info: Account_Info_Document) => {
    try {
      await Account_Model.create(account_Info);
      return "Account Made";
    } catch (e: any) {
      return e;
    }
  },

  Create_Verification_Code: async (target_Email: string) => {
    try {
      (await Account_Model.findOne({ email: target_Email })) ? "Error" : "";
      let code: string = crypto.randomInt(100000, 999999).toString();
      code = code.slice(0, 3) + "-" + code.slice(3, 6);
      await Account_Model.updateOne(
        { email: { $regex: target_Email, $options: "i" } },
        { code: Buffer.from(code, "ascii").toString("base64") }
      );
      return code;
    } catch (e: any) {
      return e;
    }
  },

  Check_For_Code: async (target_id: string) => {
    try {
      const user: Account_Info_Document | null = await Account_Model.findById(
        target_id
      );
      if (!user || user.code === "") return false;
      return user.code;
    } catch (e: any) {
      return e;
    }
  },

  Verify_Code: async (target_Email: string, target_Code: string) => {
    try {
      let encoded_Code: string = Buffer.from(target_Code, "ascii").toString(
        "base64"
      );
      const account: Account_Info_Document | null = await Account_Model.findOne(
        { email: { $regex: target_Email, $options: "i" } }
      ).lean();

      if (!account) return "Account is invalid";

      if (account.code === encoded_Code) {
        await Account_Model.updateOne(
          {
            email: { $regex: target_Email, $options: "i" },
          },
          { isVerified: true, code: "" }
        );
        return true;
      } else return false;
    } catch (e: any) {
      return e;
    }
  },

  Delete_Account: async (target_email: string) => {
    try {
      return await Account_Model.deleteOne({ email: target_email });
    } catch (e: any) {
      return e;
    }
  },
};

export default Account_Service;
