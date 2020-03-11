function id(id){
    return document.getElementById(id);
}

const content = id("PageContent");
const title = id("title");

if(!localStorage.getItem("language")){
	localStorage.setItem("language", "ru");
}

language=id(localStorage["language"]);
language.style.color="white";
language.style.backgroundColor="rgb(51, 204, 204)";
language.style.backgroundSize="100% 100%";

id("eng").addEventListener("click", function(){changeLanguage("eng")});
id("ru").addEventListener("click", function(){changeLanguage("ru")});

function changeLanguage(lng){
    localStorage["language"] = lng;
    location.reload();
}


