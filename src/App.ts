import express from "express";
import routes from "./Routes";

const app = express();

app.use(express.json());

app.listen(3000, async () => {
  console.log("Running");
  routes(app);
});
