import { Request, Response } from "express";
import Email_Services from "../Services/email.service";

const Email_Handler = {
  Send_Verification: async (req: Request, res: Response) => {
    try {
      return res.send(
        await Email_Services.Send_Verification_Service({
          name: "User",
          email: "arrowpointmarketing@gmail.com",
        })
      );
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
};

export default Email_Handler;
