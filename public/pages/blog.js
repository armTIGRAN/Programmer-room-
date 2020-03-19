function deletePost(postId) {
    fetch(`/posts/${postId}`, {
        method: "DELETE"
    });

    const deletedPostIndex = posts.findIndex(element => element._id == postId);
    posts.splice(deletedPostIndex, 1);
    Posts();
}

function Blog(){
    localStorage.setItem("page", "Blog");
    title.innerHTML = "My blog"
    content.innerHTML=""
    if(localStorage["role"]=="owner")  AddingNewBlog()
    Posts()
}

function Posts(){
    content.innerHTML+="<div id='posts'></div>"
    id("posts").innerHTML=""
    for(var i=0; i<posts.length; i++){
        id("posts").innerHTML+="<h3>" + posts[i]["title"]+ "</h3><br>" 
        localStorage['language']=="ru" ? id("posts").innerHTML+= posts[i]["content"]["ru"] : id("posts").innerHTML+= posts[i]["content"]["eng"]
        id("posts").innerHTML+="<br><br><input type='button' value='delete' id=" + posts[i]['_id'] + " onClick='deletePost(this.id)'></input><hr> "
    }
}
    
function AddingNewBlog(){

    let NewPostForm={
        "theme": "theme <br> <select id='theme'>",
        "title": "title <br> <input id='postTitle' style='width:176px' type='text'> </input>",
        "PostRu": "Post in russian <br> <textarea id='postRu' style='width:90%; height:100px'></textarea>",
        "PostEng": "Post in english <br> <textarea  id='postEng' style='width:90%; height:100px'></textarea>",
        "Submit": "<input type='button' id='add'value='add' onclick='addPost()'></input>"
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
    
    content.innerHTML+=form;
}   


function addPost(){
    if(id("postRu").value || id("postEng").value){
        const post = {
            author: localStorage["account"],
            title: id("postTitle").value,
            content: {"ru": id('postRu').value, "eng": id('postEng').value},
            page: id("theme").value
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