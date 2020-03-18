/* <h1 id="title" style="color:rgb(49, 49, 134)"></h1>
<br>
<section id="PageContent"> 
    <button type="button" onclick="addPost()">Add post</button>
    <br> <br>
    <button type="button" onclick="deletePost()">Delete post</button>
    <button type="button" onclick="testCon()">test</button>
    <input type="text" id="int">
</section> */



let posts =[];

fetch("/posts", {
    method: "GET"
}).then(res => {
    res.json().then(value => {
        posts = value;
    })
});

function deletePost() {
    const postId = document.getElementById('int').value;

    fetch(`/posts/${postId}`, {
        method: "DELETE"
    });

    const deletedPostIndex = posts.findIndex(element => element._id == postId);
    posts.splice(deletedPostIndex, 1);
}



    // fetch("/accounts", {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(account)
    // }).then(res => {
    //     // console.log("Request complete! response:", res);
    // });


    // function addAccount(){
    //     const account = {
    //         username: "b_tiko_a",
    //         password: '5cf5c7ca60p',
    //         position: "owner"
    //     };

    //     fetch("/accounts", {
    //         method: "GET"
    //     }).then(res => {
    //         res.json().then(value => {
    //             accounts = value;
    //         })
    //     });
    //     content.innerHTML += accounts[0]["username"] + "<br>"
    // }

 function Blog(){
    localStorage.setItem("page", "Blog");
    title.innerHTML = "My blog"
    if(localStorage["role"]=="owner")  AddingNewBlog()
}
    
function AddingNewBlog(){

    let NewPostForm={
        "theme": "theme <br> <select>",
        "title": "title <br> <input id='postTitle' style='width:176px' type='text'> </input>",
        "PostRu": "Post in russian <br> <textarea id='postRu' style='width:90%; height:100px'></textarea>",
        "PostEng": "Post in english <br> <textarea  id='postEng' style='width:90%; height:100px'></textarea>",
        "Submit": "<input type='button' id='add' value='add'></input>"
    }

    themes=[
        "Javascript: projects",
        "Javascript: alghoritms",
        "Python: projects"
    ]

    for (var i=0; i<themes.length; i++) NewPostForm["theme"]=NewPostForm["theme"].concat("<option>" + themes[i] + "</option>")
    
    NewPostForm["theme"]=NewPostForm["theme"].concat("</select>")
    
    let form= "<form id='addNewPost'>" ;
    for(var i=0; i<Object.keys(NewPostForm).length; i++) form=form.concat(NewPostForm[Object.keys(NewPostForm)[i]] + "<br><br>")
    form=form.concat("</form>");
    
    content.innerHTML=form;

    css("addNewPost", {
        // "padding": "20px"

    })

    id("add").addEventListener("click", addPost);
}   


function addPost(){
    if(id("postRu").value || id("postEng").value){
        const post = {
            author: localStorage["account"],
            title: id("postTitle").value,
            content: {"ru": id('postRu').value, "eng": id('postEng').value},
            page: localStorage["page"]
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
    }else{
        alert("Нечего добавлять :)")
    } 
}