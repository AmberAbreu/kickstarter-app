import * as express from "express";
import { sequelize } from "./database";

const app = express();

app.use(express.json());

// app.use(morgan('dev'))

app.use("/campaigns", require("./campaigns"));

app.listen(8080, () => {
  console.log("App running at http://localhost:8080");
  sequelize
    .authenticate()
    .then(async () => {
      console.log("database connected");
      try {
        await sequelize.sync({ force: true });
      } catch (error) {
        console.log(error);
      }
    })
    .catch((e: any) => {
      console.log(e.message);
    });
});
