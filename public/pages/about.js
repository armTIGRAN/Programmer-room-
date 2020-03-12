

function About(){
    localStorage.setItem("page", "about");
    
    id("title").style.display="none"
    content.innerHTML ="<img id='mainImg' src='../images/me.jpg'/><div id='aboutContent'></div>";
    
    css("mainImg", {
        "width": "30%",
        "height": "550px",
        "minWidth": "300px",
        "marginLeft": "8px",
        "float":"left"
    });

    css("aboutContent", {
        "marginLeft": "350px"
    })

    id("aboutContent").innerHTML="<h1> test <h1>"
}
    
