var content = document.getElementById("PageContent");
var books = [];

books[0] = "Путь программиста"
books[1] = "Стив Круг"
books[2] = "Совершенный код"

var posts =[];

function Books() {
    content.innerHTML = "";
    for (i = 0; i < books.length; i++) {
        content.innerHTML += "<article>" + books[i] + "</article>"
    }
}

function addPost() {
    const post = {
        author: 1,
        title: 'here we go again!',
        content: 'help please'
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
}


function deletePost() {
    fetch(`/posts/${document.getElementById('int').value}`, {
        method: "DELETE"
    });
}



