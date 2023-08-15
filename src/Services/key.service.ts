import crypto from "crypto";
import Key_Model from "../Models/keys.model";

const Api_Keys_Service = {
  Create: async () => {
    try {
      const key = `Key-${crypto.randomInt(100000, 999999).toString()}`;
      const Hashed_Key = Buffer.from(key, "ascii").toString("base64");
      await Key_Model.create({ key: Hashed_Key, requests: 0 });
      return key;
    } catch (e: any) {
      return e;
    }
  },
  Check: async () => {},
  Delete: async () => {},
};

export default Api_Keys_Service;
