var express = require('express');
var todocontroller = require('./controllers/todocontroller.js');

var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

// Fire controllers
todocontroller(app);

// Listen to port
app.listen(4000);
console.log("Your Listening to the port 4000")
