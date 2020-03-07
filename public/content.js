//TOP MENU
localStorage["language"]=="eng" ? document.getElementById("Home").innerHTML="Home" : document.getElementById("Home").innerHTML="Главная";
localStorage["language"]=="eng" ? document.getElementById("Comments").innerHTML="Comments" : document.getElementById("Comments").innerHTML="Комментария";
localStorage["language"]=="eng" ? document.getElementById("Updates").innerHTML="Updates" : document.getElementById("Updates").innerHTML="Обновления";
localStorage["language"]=="eng" ? document.getElementById("Account").innerHTML="Account" : document.getElementById("Account").innerHTML="Аккаунт";
if(localStorage["account"]!="undefined") document.getElementById("Account").innerHTML+= " ( " + localStorage["account"] +" )"

// localStorage["language"]=="eng" ? document.getElementById("Contacts").innerHTML="Contacts" : document.getElementById("Contacts").innerHTML="Контакты";


//LEFT MENU
localStorage["language"]=="eng" ? document.getElementById("Books").innerHTML="Books" : document.getElementById("Books").innerHTML="Книги";
localStorage["language"]=="eng" ? document.getElementById("Courses").innerHTML="Courses" : document.getElementById("Courses").innerHTML="Курсы";
localStorage["language"]=="eng" ? document.getElementById("Sources").innerHTML="Sources" : document.getElementById("Sources").innerHTML="Источники";


                                                    //RIGHT MENU//
//Blog
localStorage["language"]=="eng" ? document.getElementById("All").innerHTML="All" : document.getElementById("All").innerHTML="Все";
localStorage["language"]=="eng" ? document.getElementById("Projects").innerHTML="My Projects" : document.getElementById("Projects").innerHTML="Мои проекты";

//Javascript
localStorage["language"]=="eng" ? document.getElementById("Useful").innerHTML="Useful" : document.getElementById("Useful").innerHTML="Полезное";
localStorage["language"]=="eng" ? document.getElementById("Algorithms").innerHTML="Algorithms" : document.getElementById("Algorithms").innerHTML="Алгоритмы";
localStorage["language"]=="eng" ? document.getElementById("JSProjects").innerHTML="My projects" : document.getElementById("JSProjects").innerHTML="Мои проекты";

//Scratch
localStorage["language"]=="eng" ? document.getElementById("ScrProjects").innerHTML="My projects" : document.getElementById("ScrProjects").innerHTML="Мои проекты";



