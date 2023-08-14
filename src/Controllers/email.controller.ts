import { Request, Response } from "express";
import Email_Services from "../Services/email.service";

const Email_Handler = {
  Send_Verification: async (req: Request, res: Response) => {
    try {
      return res.send(await Email_Services.Send_Verification(req.body));
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
  Resend_Verification: async (req: Request, res: Response) => {
    try {
      return res.send(await Email_Services.Resend_Verification(req.body));
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
  Send_Thank_You: async (req: Request, res: Response) => {
    try {
      return res.send(await Email_Services.Send_SignUp_Thank_You(req.body));
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
};

export default Email_Handler;
