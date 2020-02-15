var express = require('express');
var path = require('path');
var app = express();


// Define the port to run on
app.set('port', process.env.PORT || 80);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

///////////////////////////////////////////

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'armTIGRAN',
    password: '5cf5c7ca60',
    database: 'programmerroom'
});


connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("mysql connect")
});

// console.log(connection);
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE programmerroom';
    connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});


//Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE accounts(id int AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), possition VARCHAR(255))';
    connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert post 1
app.get('/addpost1', (req, res) => {
    let post = {username:'b_tiko_a', password:'5cf5c7ca60p'};
    let sql = 'INSERT INTO accounts SET ?';
    let query = connection.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

//Select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM accounts';
    let query = connection.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched...');
    });
});


app.listen('3000', () => {                              //
    console.log('Server started on port 3000');         // Это вообще нужно?
});                                                     //

// console.log(connection.query('SELECT * FROM accounts')); 