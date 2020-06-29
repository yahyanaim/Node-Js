const express = require('express');
const app = express();
var bodyParser=require('body-parser');
const port = 8082;
var opn= require('opn');
var routeReservation = require('./Routes/Reservation');
var routevalidation = require('./Routes/validation');


// Setting up the public directory
app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));
app.use(bodyParser.json());

app.use(express.static('public'))



// API'S
app.use(routeReservation);
app.use(routevalidation);



app.listen(port, () => {console.log(`listening on port ${port}!`);

});