import { nanoid } from "nanoid";

const Account_Service = {
  Create_Verification_Code: async (target_Account: string) => {
    try {
      return nanoid(8);
    } catch (e: any) {
      return e;
    }
  },
};

export default Account_Service;
