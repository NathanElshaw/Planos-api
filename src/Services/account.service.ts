import crypto from "crypto";
import Account_Model, { Account_Info_Document } from "../Models/account.model";
import { response } from "express";
import Email_Services from "./email.service";

const Account_Service = {
  Create_Account: async (account_Info: Account_Info_Document) => {
    try {
      await Account_Model.create(account_Info).then((response) => {
        Email_Services.Send_Verification_Service(response);
      });
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
      return code;
    } catch (e: any) {
      return e;
    }
  },
};

export default Account_Service;
