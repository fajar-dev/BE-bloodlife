const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const connection_master = require("./database/mysqlDB");

const app = express();

// database init
function mysqlConnect() {
  global.connection = mysql.createConnection(connection_master);

  global.connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db");
      setTimeout(mysqlConnect, 2000);
    }
    console.log("connected to database");
  });
  global.connection.on("error", function (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      mysqlConnect();
    } else {
      throw err;
    }
  });
}

mysqlConnect();

// Routes
const apiRoutes = require("./routes/apiRoutes");

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", apiRoutes);

// PORT
const port = process.env.PORT || 3000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
