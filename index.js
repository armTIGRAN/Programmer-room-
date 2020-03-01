var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// Define the port to run on
app.set('port', process.env.PORT || 80);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

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

const accountsQuery = `CREATE TABLE IF NOT EXISTS accounts(id int primary key AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), position VARCHAR(255));`
const postsQuery = `CREATE TABLE IF NOT EXISTS posts(id int primary key AUTO_INCREMENT, title VARCHAR(255), content TEXT, author int, date VARCHAR(255), page VARCHAR(255));`;

connection.query(accountsQuery, (err, result) => {
    if (err) throw err;
    console.log("initialized accounts table");
});

connection.query(postsQuery, (err, result) => {
    if (err) throw err;
    console.log("initialized posts table");
});

// Insert post 1
app.post('/posts', (req, res) => {
    console.log(req.body);

    // let post = { username: mysqlUser, password: mysqlPassword };
    let sql = 'INSERT INTO posts SET ?';
    let query = connection.query(sql, req.body, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

// Select posts
app.get('/posts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = connection.query(sql, (err, results) => {
        if (err) throw err;
        // res.send('Posts fetched...');
        res.send(results);
    });
});

// Select accounts
app.get('/accounts', (req, res) => {
    let sql = 'SELECT * FROM accounts';
    let query = connection.query(sql, (err, results) => {
        if (err) throw err;
        // res.send('Posts fetched...');
        res.send(results);
    });
});

app.delete('/posts/:id', (req, res) => {
    let sql = `DELETE from posts WHERE id=${req.params.id}`;
    let query = connection.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

