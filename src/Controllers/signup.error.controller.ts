import { Request, Response } from "express";
import SignUp_Check_Service from "../Services/signup.error.service";

const Signup_Check_Handler = async (req: Request, res: Response) => {
  try {
    return req.query.email
      ? res.send(
          await SignUp_Check_Service.Check_Email(req.query.email as string)
        )
      : req.query.username
      ? res.send(
          await SignUp_Check_Service.Check_Username(
            req.query.username as string
          )
        )
      : req.query.phone
      ? res.send(
          await SignUp_Check_Service.Check_Phone(req.query.phone as string)
        )
      : res.status(404).send("Check Failed");
  } catch (e: any) {
    return res.status(409).send(e);
  }
};

export default Signup_Check_Handler;
