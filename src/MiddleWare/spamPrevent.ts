import { Request, Response } from "express";

const Spam_Prevent = async (req: Request, res: Response) => {
  try {
    return res.send(req);
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e);
  }
};

export default Spam_Prevent;
