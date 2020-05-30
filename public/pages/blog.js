String.prototype.replaceAll = function(search, replace) {
    return this.split(search).join(replace);
}

function deletePost(postId) {
    fetch(`/posts/${postId}`, {
        method: "DELETE"
    });

    const deletedPostIndex = posts.findIndex(element => element._id == postId);
    posts.splice(deletedPostIndex, 1);
    Posts();
}

function Blog() {
    localStorage.setItem("page", "Blog");
    title.innerHTML = "Blog";
    content.innerHTML = "";
    if (localStorage["role"] == "owner") AddingNewBlog();
    content.innerHTML += '<input id="searchBar" > <button> Search </button> <br> <br>'

    css('searchBar', {
        'margin-left': '-10px',
        'margin-top': '15px'
    })

    Posts();
}

function AddingNewBlog() {

    let NewPostForm = {
        "theme": "theme <br> <select id='theme'>",
        "title": "title <br> <input id='postTitle' style='width:176px' type='text'> </input>",
        "PostRu": "Post in russian <br> <textarea id='postRu' style='width:90%; height:100px'></textarea>",
        "PostEng": "Post in english <br> <textarea  id='postEng' style='width:90%; height:100px'></textarea>",
        "Submit": "<input type='button' id='add'value='add' onclick='addPost()'></input>"
    }

    themes = [
        { 'eng': 'Javascript: For begginers', 'ru': 'Javascript: для новичков' },
        { 'eng': 'Javascript: Useful', 'ru': 'Javascript: Полезное' },
        { 'eng': 'Javascript: Alghoritms', 'ru': 'Javascript: Алгоритмы' },
        { 'eng': 'Javascript: Projects', 'ru': 'Javascript: Проекты' },
        { 'eng': 'Python: For begginers', 'ru': 'Python: для новичков' },
        { 'eng': 'Python: Useful', 'ru': 'Python: Полезное' },
        { 'eng': 'Python: Alghoritms', 'ru': 'Python: Алгоритмы' },
        { 'eng': 'Python: Projects', 'ru': 'Python: Проекты' },
    ]

    if (localStorage["language"] == "eng")
        for (var i = 0; i < themes.length; i++) NewPostForm["theme"] = NewPostForm["theme"].concat("<option>" + themes[i]['eng'] + "</option>")
    else
        for (var i = 0; i < themes.length; i++) NewPostForm["theme"] = NewPostForm["theme"].concat("<option>" + themes[i]['ru'] + "</option>")

    NewPostForm["theme"] = NewPostForm["theme"].concat("</select>")

    let form = "<form id='addNewPost'>";
    for (var i = 0; i < Object.keys(NewPostForm).length; i++) form = form.concat(NewPostForm[Object.keys(NewPostForm)[i]] + "<br><br>")
    form = form.concat("</form>");

    content.innerHTML += form;
}

function addPost() {

    if (id("postRu").value || id("postEng").value) {
        const post = {
                author: localStorage["account"],
                title: id("postTitle").value,
                content: { "ru": id('postRu').value, "eng": id('postEng').value },
                page: id("theme").value,
                likes: 0,
                comments: [],
                saves: 0,
                time: new Date().getTime()
            }
            // console.log(posts)
        const postIndex = posts.findIndex(element => element['page'] == id("theme").value);
        console.log(postIndex)
        new Promise(() => {
            fetch("/posts", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post)
            })
        }).then(() => {
            Posts()
        });
    } else {
        alert("Нечего добавлять :)")
    }
}

function Posts() {

    new Promise((resolve, reject) => {
        fetch("/posts", {
            method: "GET"
        }).then(res => {
            res.json().then(value => {
                resolve(value)
                reject('error')
            })
        });
    }).then(function(value) {
        posts = value;
        content.innerHTML += "<div id='posts'></div>"
        id("posts").innerHTML = "";
        for (var i = 0; i < posts.length; i++) {

            localStorage['language'] == "ru" ? post = posts[i]["content"]["ru"] : post = posts[i]["content"]["eng"]
            code = post.match(/<code>(.|\s)*<\/code>/)

            if (code) {
                tagOpen = code[0].match(/</)
                newCode = code[0].replaceAll(tagOpen, '&lt')
                tagClose = code[0].match(/>/)
                newCode = newCode.replaceAll(tagClose, '&gt')
                newCodeLines = newCode.split('\n')
                newCode = newCodeLines.join('<br>')
                newCode = newCode.replaceAll(' ', '&nbsp')
                post = post.replace(code[0], newCode)
            }

            id('posts').innerHTML += '<div id=' + i + '></div> <br>'

            id(i).innerHTML += "<h1>" + posts[i]["title"] + "</h1>"
            id(i).innerHTML += "<h6>" + posts[i]["page"] + "</h6><br>"
            id(i).innerHTML += post;

            id(i).innerHTML = id(i).innerHTML.replace('&lt;code&gt;', '')
            id(i).innerHTML = id(i).innerHTML.replace('&lt;/code&gt;', '')

            timeDifference = Math.floor((new Date().getTime() - posts[i]['time']) / 1000)
            let time = ' sec'

            if (timeDifference >= 60) {
                if (timeDifference < 3600) {
                    timeDifference = Math.floor(timeDifference / 60);
                    time = ' min'
                } else if (timeDifference < 86400) {
                    timeDifference = Math.floor(timeDifference / 3600)
                    time = ' hour'
                } else if (timeDifference < 2592000) {
                    timeDifference = Math.floor(timeDifference / 86400)
                    time = ' day'
                } else if (timeDifference < 31104000) {
                    timeDifference = Math.floor(timeDifference / 2592000)
                    time = ' month'
                } else {
                    timeDifference = Math.floor(timeDifference / 31104000)
                    time = ' year'
                }
            }

            if (timeDifference > 1) time += 's'
            timeDifference += time

            id(i).innerHTML += '  <br><br> <p style="color:grey"> Published: ' + timeDifference + ' ago </p>'

            if (localStorage["role"] == "owner") {
                id(i).innerHTML += "<input type='button' value='code' id=" + posts[i]['_id'] + " onClick='postCode(this.id)'></input>"
                id(i).innerHTML += "<input type='button' value='edit' id=" + posts[i]['_id'] + " onClick='editPost(this.id)'></input>"
                id(i).innerHTML += "<input type='button' value='delete' id=" + posts[i]['_id'] + " onClick='deletePost(this.id)'></input>"
            }

            id(i).innerHTML += '<hr style="border-top: 1px dotted black"> <br>';
        }

        css("PageContent", {
            'padding-left': '15px'
        })
    })
}

function postCode(postId) {
    const postIndex = posts.findIndex(element => element._id == postId);
    localStorage['language'] == 'ru' ? alert(posts[postIndex]['content']['ru']) : alert(posts[postIndex]['content']['eng'])
}

function editPost(postId) {
    const postIndex = posts.findIndex(element => element._id == postId);

    id("postTitle").value = posts[postIndex]['title']
    id("postRu").value = posts[postIndex]['content']['ru']
    id("postEng").value = posts[postIndex]['content']['eng']
    id("theme").value = posts[postIndex]['page']
}