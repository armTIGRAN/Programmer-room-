var express = require('express');
var path = require('path');
var app = express();


// Define the port to run on
app.set('port', process.env.PORT || 8000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

///////////////////////////////////////////

var mysql = require('mysql');

var mysqlUser = 'G1xMeJNq45';
var mysqlPassword = '7fFEISxz4p';

var connection = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: mysqlUser,
    password: mysqlPassword,
    database: 'G1xMeJNq45'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("mysql connect");
});

//create database
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE programmerroom';
//     connection.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...');
//     });
// });

// Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE accounts(id int primary key AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), position VARCHAR(255))';
    connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert post 1
app.post('/addpost1', (req, res) => {
    let post = {username:mysqlUser, password: mysqlPassword};
    let sql = 'INSERT INTO accounts SET ?';
    let query = connection.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

// Insert post 2
app.post('/addpost2', (req, res) => {
    let post = {username:mysqlUser, password: mysqlPassword};
    let sql = 'INSERT INTO accounts SET ?';
    let query = connection.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

// Select posts

app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM accounts';
    let query = connection.query(sql, (err, results) => {
        if(err) throw err;
        // res.send('Posts fetched...');
        res.send(results);
    });
});
