import { Request, Response } from "express";

export const Account_Handler = {
  Create_Account: async (req: Request, res: Response) => {
    try {
      return res.send("Cookie");
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
};
