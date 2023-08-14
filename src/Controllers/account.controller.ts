import { Request, Response } from "express";
import Account_Service from "../Services/account.service";
import Email_Services from "../Services/email.service";
import { Account_Info_Document } from "../Models/account.model";

export const Account_Handler = {
  Create_Account: async (req: Request, res: Response) => {
    try {
      Object.assign(
        req.body,
        { code: "" },
        { password: Buffer.from(req.body.password, "ascii").toString("base64") }
      );
      return res.send(
        await Account_Service.Create_Account(req.body).then(
          async (response) => {
            await Email_Services.Send_Verification(req.body);
          }
        )
      );
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
  Confirm_Code: async (req: Request, res: Response) => {
    try {
      const requesting: Account_Info_Document = req.body;
      const code_Check = await Account_Service.Verify_Code(
        requesting.email,
        requesting.code as string
      );
      return res.send(code_Check === true ? true : "Invalid code");
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },

  Delete_Account: async (req: Request, res: Response) => {
    try {
      return res.send(await Account_Service.Delete_Account(req.body.email));
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
};
