import { Express } from "express";
import { Account_Handler } from "./Controllers/account.controller";
import Email_Handler from "./Controllers/email.controller";
import Spam_Prevent from "./MiddleWare/spamPrevent";
import Signup_Check_Handler from "./Controllers/signup.error.controller";

const Routes = (app: Express) => {
  app.get("/api", Account_Handler.Create_Account);
  app.get("/api/check", Signup_Check_Handler);
  app.get("/api/verify_code", Account_Handler.Confirm_Code);
  app.delete("/api", Account_Handler.Delete_Account);
};

export default Routes;
