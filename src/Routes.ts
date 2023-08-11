import { Express } from "express";
import { Account_Handler } from "./Controllers/account.controller";
import Email_Handler from "./Controllers/email.controller";
import Spam_Prevent from "./MiddleWare/spamPrevent";

const Routes = (app: Express) => {
  app.get("/api", Spam_Prevent);
};

export default Routes;
