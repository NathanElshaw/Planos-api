import express from "express";
import routes from "./Routes";
import Db_Connect from "./Providers/DB_Provider";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json(), cookieParser());

app.listen(3000, async () => {
  console.log(await Db_Connect());
  console.log("Running");
  routes(app);
});
