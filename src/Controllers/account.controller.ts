import { Request, Response } from "express";
import Account_Service from "../Services/account.service";

export const Account_Handler = {
  Create_Account: async (req: Request, res: Response) => {
    try {
      return res.send(await Account_Service.Create_Account(req.body));
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
};
