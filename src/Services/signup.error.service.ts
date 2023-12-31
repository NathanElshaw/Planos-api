import Account_Model from "../Models/account.model";

const SignUp_Check_Service = {
  Check_Email: async (target_Email: string) => {
    try {
      const email = await Account_Model.findOne({
        email: { $regex: target_Email, $options: "i" },
      });
      return !email ? false : { error: "Email already exists" };
    } catch (e: any) {
      return e;
    }
  },
  Check_Username: async (target_Username: string) => {
    try {
      const username = await Account_Model.findOne({
        username: { $regex: target_Username, $options: "i" },
      });
      return !username ? false : { error: "Username already exists!" };
    } catch (e: any) {
      return e;
    }
  },
  Check_Phone: async (target_Phone: string) => {
    try {
      const phone = await Account_Model.findOne({
        phone: target_Phone,
      });
      return !phone ? false : { error: "Phone number already exists!" };
    } catch (e: any) {
      return e;
    }
  },
};

export default SignUp_Check_Service;
