
    const sql = require("./db.js");
    const mysql = require("mysql2");
    const express = require("express");
    const bodyParser = require("body-parser");
    const app = express();

    // parse requests of contenttype: application/json
    app.use(bodyParser.json());
    // parse requests of contenttype: application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true
    }));

    // simple route
    app.get("/", (req, res) => {
    res.json({ message: "Hello World !" });
    });
    // set port, listen for requests
    app.listen(8080, () => {
    console.log("Server is running on port 3000."
    );
    });


    // Create a route for getting all customers
app.get("/table", function(req, res){
    sql.query("SELECT * FROM myFirstTable", (err, mySQLrespons) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all records: " + err});
    return;
    }
    console.log("got all records...");
    res.send(mySQLrespons);
    return;
    });
    });