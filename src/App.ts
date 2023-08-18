import express from "express";
import routes from "./Routes";
import Db_Connect from "./Providers/DB_Provider";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json(), cookieParser());

app.use(
  cors({
    origin: "*",
  })
);

app.listen(3001, async () => {
  console.log(await Db_Connect());
  console.log("Running");
  routes(app);
});
