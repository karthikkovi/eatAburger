import { createConnection } from "mysql";
require("dotenv").config();


const connection = createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQLPASS,
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

export default connection;