import { Express } from "express";
import { Account_Handler } from "./Controllers/account.controller";
import Signup_Check_Handler from "./Controllers/signup.error.controller";
import Api_Keys_Handler from "./Controllers/keys.controller";

const Routes = (app: Express) => {
  app.post("/api", Account_Handler.Create_Account);
  app.get("/api/check", Signup_Check_Handler);
  app.get("/api/verify_code", Account_Handler.Confirm_Code);
  app.delete("/api", Account_Handler.Delete_Account);
  app.get("/api/createKey", Api_Keys_Handler.Create_Key);
};

export default Routes;
