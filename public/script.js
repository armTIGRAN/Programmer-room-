let homePage = false;
let posts = [];

window.addEventListener('load', setPageSettings, false);

const content = id("PageContent");
const title = id("title");

function id(id) {
    return document.getElementById(id);
}

function css(Id, css) {
    for (var i = 0; i <= Object.keys(css).length; i++) {
        id(Id).style[Object.keys(css)[i]] = css[Object.keys(css)[i]]
    }
}

function setPageSettings() {

    if (!localStorage.getItem("page")) {
        homePage = true;
        localStorage.setItem("page", "home");
    }

    if (!localStorage.getItem("role")) {
        localStorage.setItem("role", "guest");
    }

    if (!localStorage.getItem("language")) localStorage.setItem("language", "ru");

    css(localStorage["language"], {
        "color": "white",
        "backgroundColor": "rgb(51, 204, 204)",
        "backgroundSize": "100% 100%"
    });

    id("eng").addEventListener("click", function() { changeLanguage("eng") });
    id("ru").addEventListener("click", function() { changeLanguage("ru") });

    function changeLanguage(lng) {
        localStorage["language"] = lng;
        location.reload();
    }

    //get posts[]
    fetch("/posts", {
        method: "GET"
    }).then(res => {
        res.json().then(value => {
            posts = value;
        })
    });
}

const siteVisibility = setInterval(check, 600);

function check() {
    function displayNone(Id, width) {
        id("body").offsetWidth < width ? id(Id).style.display = "none" : id(Id).style.display = "block"
    }
    displayNone("rightMenu", 1000);
    displayNone("leftMenu", 500);
    displayNone("siteNameH3", 350);
}

for (var i = 0; i < document.querySelectorAll('#leftMenuCategories li').length; i++) {
    document.querySelectorAll('#leftMenuCategories li')[i].addEventListener('mouseover', function() { this.firstChild.style.color = 'white' }, false);
    document.querySelectorAll('#leftMenuCategories li')[i].addEventListener('mouseout', function() { this.firstChild.style.color = "rgb(51, 204, 204)" }, false);
}