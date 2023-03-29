import { Sequelize } from "sequelize";

const db = new Sequelize("fr_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
