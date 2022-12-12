import { Sequelize } from "sequelize";

const db = new Sequelize("tomohonloka_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
