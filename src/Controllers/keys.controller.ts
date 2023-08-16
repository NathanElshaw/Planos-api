import { NextFunction, Request, Response } from "express";
import Api_Keys_Service from "../Services/key.service";

const Api_Keys_Handler = {
  Create_Key: async (req: Request, res: Response) => {
    try {
      const key = await Api_Keys_Service.Create();
      return res.cookie("Api_Key", key, { httpOnly: true }).send();
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
  Check_Key: async (req: Request, res: Response, next: NextFunction) => {
    try {
      return !req.cookies?.Api_Key ? Api_Keys_Handler.Create_Key : next();
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
  Delete_Key: async (req: Request, res: Response) => {
    try {
      return res.send(req.body._id);
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
};

export default Api_Keys_Handler;
