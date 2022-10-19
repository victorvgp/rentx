import { DataSource } from "typeorm";

const myDataSource = new DataSource({
   type: "mongodb",
   host: "localhost",
   port: 27017,
   database: "rentx",
});
