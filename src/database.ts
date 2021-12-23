import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize(
  "kickstarter_app",
  "amberabreu",
  "amberabreu",
  {
    host: "localhost",
    dialect: "postgres",
    models: [__dirname + "/models"],
  }
);
