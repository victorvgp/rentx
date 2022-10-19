import { DataSource } from "typeorm";

const myDataSource = new DataSource({
   type: "mongodb",
   host: "localhost",
   username: "root",
   password: "root",
   port: 27017,
   database: "rentx",
});
