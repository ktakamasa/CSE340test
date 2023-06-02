/* ****************************************
 * This is the application server
 * ***************************************/
const express = require("express"); //import the express package
const app = express(); // create the 'application', app is an object with all functionality of Express

/* ****************************************
 * Default GET route
 * ***************************************/
app.get("/", (req, res) => {
  res.send("Welcome home!");
});

/* ****************************************
 * Server name and port
 * ***************************************/
const HOST = "localhost";
const PORT = 3000;

/* ****************************************
 * Log statement to confirm server operation
 * ***************************************/
app.listen(PORT, () => {
  console.log(`trial app listening on ${HOST}: ${PORT}`);
});
