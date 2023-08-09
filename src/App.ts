import express from "express";
import routes from "./Routes";
import Db_Connect from "./Providers/DB_Provider";

const app = express();

app.use(express.json());

app.listen(3000, async () => {
  console.log(await Db_Connect());
  console.log("Running");
  routes(app);
});
