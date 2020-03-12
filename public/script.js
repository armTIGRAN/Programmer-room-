PageSettings();

const content = id("PageContent");
const title = id("title");

function id(id){
    return document.getElementById(id);
}

function css(Id, css){
    for(var i =0; i<=Object.keys(css).length; i++){
        id(Id).style[Object.keys(css)[i]]=css[Object.keys(css)[i]]
    }
}

function PageSettings(){

    if(!localStorage.getItem("page")) localStorage.setItem("page", "home");
    
    if(!localStorage.getItem("language")) localStorage.setItem("language", "ru");
    css(localStorage["language"], {
        "color": "white",
        "backgroundColor": "rgb(51, 204, 204)",
        "backgroundSize": "100% 100%"
    });
    
    id("eng").addEventListener("click", function(){changeLanguage("eng")});
    id("ru").addEventListener("click", function(){changeLanguage("ru")});

    function changeLanguage(lng){
        localStorage["language"] = lng;
        location.reload();
    }
}

const siteVisibility=setInterval(check, 800);
function check(){
    id("body").offsetWidth<1000 ? id("rightMenu").style.display="none" : id("rightMenu").style.display="block"
    id("body").offsetWidth<500 ? id("leftMenu").style.display="none" : id("leftMenu").style.display="block"
    id("body").offsetWidth<300 ? id("siteNameH3").style.display="none" : id("siteNameH3").style.display="block"
}