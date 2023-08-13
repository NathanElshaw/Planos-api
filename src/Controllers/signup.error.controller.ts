import { NextFunction, Request, Response } from "express";
import SignUp_Check_Service from "../Services/signup.error.service";

const Signup_Check_Handler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Email_Check = await SignUp_Check_Service.Check_Email(req.body.email);
    const Username_Check = await SignUp_Check_Service.Check_Username(
      req.body.username
    );
    return Email_Check === false
      ? Username_Check === false
        ? next()
        : res.send("Username Exists")
      : res.send("Email Exists");
  } catch (e: any) {
    return res.status(409).send(e);
  }
};

export default Signup_Check_Handler;
