import { Request, Response } from "express";
import Api_Keys_Service from "../Services/key.service";

const Api_Keys_Handler = {
  Create_Key: async (req: Request, res: Response) => {
    try {
      const key = await Api_Keys_Service.Create();
      return res.cookie("Api-Key", key, { httpOnly: true }).send();
    } catch (e: any) {
      return res.status(409).send(e);
    }
  },
  Check_Key: async () => {},
  Delete_Key: async () => {},
};

export default Api_Keys_Handler;
