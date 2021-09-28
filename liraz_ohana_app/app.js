
    const sql = require("./DB/db.js");
    const mysql = require("mysql");
    const express = require("express");
    const bodyParser = require("body-parser");
    const app = express();
    const path = require('path')

    // set port, listen for requests
    app.listen(8080, () => {
      console.log("Server is running on port 8080."
      );
      });

      // use static files located in 'public' dir
      app.use(express.static('public'));
      app.use('/static', express.static(path.join(__dirname, 'public')))


    // parse requests of contenttype: application/json
    app.use(bodyParser.json());
    // parse requests of contenttype: application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true
    }));

    // simple route
    app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './views/myFirstHtml.html'));
    });
    

    // simple route
    app.get("/CV", (req, res) => {
      res.sendFile(path.join(__dirname, './views/CV.html'));
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