import { Request, Response } from "express";

const Spam_Prevent = async (req: Request, res: Response) => {
  try {
    //console.log(req.ips);
    //return res.send();
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e);
  }
};

export default Spam_Prevent;
