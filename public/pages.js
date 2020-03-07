var books = [];

books[0] = "Путь программиста"
books[1] = "Стив Круг"
books[2] = "Совершенный код"

var posts =[];
var accounts=[];
var test;

function Books() {
    content.innerHTML = "";
    for (i = 0; i < books.length; i++) {
        content.innerHTML += "<article>" + books[i] + "</article>"
    }
}

fetch("/posts", {
    method: "GET"
}).then(res => {
    res.json().then(value => {
        posts = value;
    })
});



function addAccount(){
    const account = {
        username: "b_tiko_a",
        password: '5cf5c7ca60p',
        position: "owner"
    };

    fetch("/accounts", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(account)
    }).then(res => {
        // console.log("Request complete! response:", res);
    });

    fetch("/accounts", {
        method: "GET"
    }).then(res => {
        res.json().then(value => {
            accounts = value;
        })
    });
    content.innerHTML += accounts[0]["username"] + "<br>"
}

function addPost(){
    
    const post = {
        author: 1,
        title: 'here we go again!',
        content: 'help please',
        page: 'books'
    };

    fetch("/posts", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    }).then(res => {
        // console.log("Request complete! response:", res);
    });

    fetch("/posts", {
        method: "GET"
    }).then(res => {
        res.json().then(value => {
            posts = value;
        })
    });
    content.innerHTML += posts[4]["title"] + "<br>"
}


function deletePost() {
    fetch(`/posts/${document.getElementById('int').value}`, {
        method: "DELETE"
    });
    
}
// content.innerHTML += posts[7]["title"] + "<br>"
function testCon(){
    content.innerHTML += posts[2]["title"] + "<br>"
}


