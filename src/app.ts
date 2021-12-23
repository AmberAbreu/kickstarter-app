import express from "express";
import { sequelize } from "./database";

const app = express();

app.listen(8080, () => {
  console.log("App running at http://localhost:8080");
  sequelize
    .authenticate()
    .then(() => {
      console.log("database connected");
    })
    .catch((e: any) => {
      console.log(e.message);
    });
});
