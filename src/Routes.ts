import { Express } from "express";
import { Account_Handler } from "./Controllers/account.controller";
import Email_Handler from "./Controllers/email.controller";
import Spam_Prevent from "./MiddleWare/spamPrevent";
import Signup_Check_Handler from "./Controllers/signup.error.controller";

const Routes = (app: Express) => {
  app.get("/api", Signup_Check_Handler, Account_Handler.Create_Account);
  app.delete("/api", Account_Handler.Delete_Account);
};

export default Routes;
