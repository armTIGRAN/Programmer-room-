var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
const mongojs = require('mongojs');

// Define the port to run on
app.set('port', process.env.PORT || 80);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

///////////////////////////////////////////

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// const connectionString = `mongodb+srv://$mongo "mongodb+srv://cluster0-gt3si.gcp.mongodb.net/test" --username b_tiko
// {dbUser}:${dbPassword}@cluster0-gt3si.gcp.mongodb.net/programmer-room?retryWrites=true&w=majority`;

const connectionString = `mongodb+srv://b_tiko:${dbPassword}@cluster0-gt3si.gcp.mongodb.net/programmer-room?retryWrites=true&w=majority`
const db = mongojs(connectionString);

// Insert post 
app.post('/posts', (req, res) => {
    db.posts.insert(req.body, (result, error) => {
        if (error) res.status(500).send(error);
        else res.send(result);
    });
});

// Get all posts
app.get('/posts', (req, res) => {
    db.posts.find((error, result) => {
        if (error) res.status(500).send(error);
        else res.send(result);
    });
});

app.delete('/posts/:id', (req, res) => {
    db.posts.remove({ _id: mongojs.ObjectId(req.params.id) }, (error, result) => {
        if (error) res.status(500).send(error);
        else res.send(result);
    });
});

// Get accounts
app.post('/login', (req, res) => {
    db.accounts.findOne({ username: req.body.username }, (error, result) => {
        if (error) res.status(500).send(error);
        else if (!result) res.status(401).send({ errorMessage: 'wrongUsername' });
        else if (req.body.password != result.password) res.status(401).send({ errorMessage: 'wrongPassword' });
        else {
            delete result.password;
            res.send(result);
        }
    });
});

app.post('/accounts', (req, res) => {
    console.log(req.body);
    let sql = 'INSERT INTO posts SET ?';
    let query = connection.query(sql, req.body, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Account 1 added...');
    });
});