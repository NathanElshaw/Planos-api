import { Express } from "express";
import { Account_Handler } from "./Controllers/account.controller";

const Routes = (app: Express) => {
  app.get("/api", Account_Handler.Create_Account);
};

export default Routes;
