

function About(){
    localStorage.setItem("page", "About");
    
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

    id("aboutContent").innerHTML = "<h1> <b style>Tigran Badalyan </b>  </h1> <br>"
    id("aboutContent").innerHTML 
    
    id("aboutContent").innerHTML +="<h4> <b>Gmail:</b> btigran02@gmail.com </h4>"
    id("aboutContent").innerHTML +="<h4> <b>Github: </b> <a href='https://github.com/armTIGRAN' target='_blank'>  https://github.com/armTIGRAN <a/> </h4>"
    id("aboutContent").innerHTML +="<h4> <b>Vk: </b> <a href='https://vk.com/armtigran' target='_blank'> https://vk.com/armtigran <a/> </h4>"
    id("aboutContent").innerHTML +="<h4> <b>Instagram: </b> <a href='https://www.instagram.com/b_tiko_a/?hl=ru ' target='_blank'> https://www.instagram.com/b_tiko_a/?hl=ru </a> </h4> <br>"

    id("aboutContent").innerHTML +="<h6>Hi. Its my blog. </h6>"

}
    
