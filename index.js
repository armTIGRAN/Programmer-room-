// const express=require('express')
// const app= express()

// const PORT = process.env.PORT || 80

// app.get('/', (req, res) =>{
//     res.end(`index.html`)
// })

// app.listen(PORT, () => {
//     console.log('Server has been started');
// })

var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', process.env.PORT || 80);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});