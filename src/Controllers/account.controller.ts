import { Request, Response } from "express";
import Account_Service from "../Services/account.service";
import Email_Services from "../Services/email.service";

export const Account_Handler = {
  Create_Account: async (req: Request, res: Response) => {
    try {
      Object.assign(req.body, {
        code: null,
      });
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
  Delete_Account: async (req: Request, res: Response) => {
    try {
      return res.send(await Account_Service.Delete_Account(req.body.email));
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
};
