if(!localStorage.getItem("language")){
	localStorage.setItem("language", "ru");
}

language=document.getElementById(localStorage["language"]);
language.style.color="white";
language.style.backgroundColor="rgb(51, 204, 204)";
language.style.backgroundSize="100% 100%";

document.getElementById("eng").addEventListener("click", function(){changeLanguage("eng")});
document.getElementById("ru").addEventListener("click", function(){changeLanguage("ru")});

function changeLanguage(lng){
    localStorage["language"] = lng;
    location.reload();
}


localStorage["language"]=="eng" ? document.getElementById("blog").innerHTML="Blog" : document.getElementById("blog").innerHTML="Блог";
localStorage["language"]=="eng" ? document.getElementById("books").innerHTML="Books" : document.getElementById("books").innerHTML="Книги";
localStorage["language"]=="eng" ? document.getElementById("forum").innerHTML="Forum" : document.getElementById("forum").innerHTML="Форум";
