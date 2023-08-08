import { Express } from "express";
import { Account_Handler } from "./Controllers/account.controller";
import Email_Handler from "./Controllers/email.controller";

const Routes = (app: Express) => {
  app.get("/api", Email_Handler.Send_Verification);
};

export default Routes;
