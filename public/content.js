//TOP MENU
localStorage["language"]=="eng" ? document.getElementById("Home").innerHTML="Home" : document.getElementById("Home").innerHTML="Главная";
localStorage["language"]=="eng" ? document.getElementById("SiteDesign").innerHTML="Site Design" : document.getElementById("SiteDesign").innerHTML="Дизайн сайта";
localStorage["language"]=="eng" ? document.getElementById("Comments").innerHTML="Comments" : document.getElementById("Comments").innerHTML="Комментария";
localStorage["language"]=="eng" ? document.getElementById("Updates").innerHTML="Updates" : document.getElementById("Updates").innerHTML="Обновления";
localStorage["language"]=="eng" ? document.getElementById("Account").innerHTML="Account" : document.getElementById("Account").innerHTML="Аккаунт";
if(localStorage["account"]!="undefined") document.getElementById("Account").innerHTML+= " ( " + localStorage["account"] +" )"

// localStorage["language"]=="eng" ? document.getElementById("Contacts").innerHTML="Contacts" : document.getElementById("Contacts").innerHTML="Контакты";


//LEFT MENU
localStorage["language"]=="eng" ? document.getElementById("About").innerHTML="About me" : document.getElementById("About").innerHTML="Про меня";
localStorage["language"]=="eng" ? document.getElementById("Blog").innerHTML="My Blog" : document.getElementById("Blog").innerHTML="Мой блог";
localStorage["language"]=="eng" ? document.getElementById("Skills").innerHTML="My skills" : document.getElementById("Skills").innerHTML="Мои навыки";
localStorage["language"]=="eng" ? document.getElementById("Projects").innerHTML="My projects" : document.getElementById("Projects").innerHTML="Мои проекты";
localStorage["language"]=="eng" ? document.getElementById("Books").innerHTML="Best books" : document.getElementById("Books").innerHTML="Лучшие книги";
localStorage["language"]=="eng" ? document.getElementById("Courses").innerHTML="Best courses" : document.getElementById("Courses").innerHTML="Лучшие курсы";
localStorage["language"]=="eng" ? document.getElementById("Sources").innerHTML="Best sources" : document.getElementById("Sources").innerHTML="Лучшие источники";


//RIGHT MENU

//Javascript
localStorage["language"]=="eng" ? document.getElementById("Useful").innerHTML="Useful" : document.getElementById("Useful").innerHTML="Полезное";
localStorage["language"]=="eng" ? document.getElementById("Algorithms").innerHTML="Algorithms" : document.getElementById("Algorithms").innerHTML="Алгоритмы";
localStorage["language"]=="eng" ? document.getElementById("JSProjects").innerHTML="My projects" : document.getElementById("JSProjects").innerHTML="Мои проекты";

//Scratch
localStorage["language"]=="eng" ? document.getElementById("ScrProjects").innerHTML="My projects" : document.getElementById("ScrProjects").innerHTML="Мои проекты";



