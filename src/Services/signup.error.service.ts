import Account_Model from "../Models/account.model";

const SignUp_Check_Service = {
  Check_Email: async (target_Email: string) => {
    try {
      const email = await Account_Model.findOne({
        email: target_Email,
      });
      return !email ? false : true;
    } catch (e: any) {
      return e;
    }
  },
  Check_Username: async (target_Username: string) => {
    try {
      const username = await Account_Model.findOne({
        username: target_Username,
      });
      return !username ? false : true;
    } catch (e: any) {
      return e;
    }
  },
};

export default SignUp_Check_Service;
