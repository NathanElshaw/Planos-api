import { Request, Response } from "express";
import SignUp_Check_Service from "../Services/signup.error.service";

const Signup_Check_Handler = async (req: Request, res: Response) => {
  try {
    return req.body.email
      ? res.send(await SignUp_Check_Service.Check_Email(req.body.email))
      : req.body.username
      ? res.send(await SignUp_Check_Service.Check_Username(req.body.username))
      : res.status(404).send("Check Failed");
  } catch (e: any) {
    return res.status(409).send(e);
  }
};

export default Signup_Check_Handler;
