function navigation(Id, eng, rus, functionName){
    localStorage["language"]=="eng" ? id(Id).innerHTML=eng : id(Id).innerHTML=rus;
    id(Id).addEventListener("click", functionName);
}

navigation("siteNameH2", "Programmer room", "Programmer room", HomePage);

//TOP MENU
navigation("Home", "Home", "Главная", HomePage);

navigation("Blog", "Blog", "Блог");
navigation("About", "About", "Информация", About);
navigation("Updates", "Updates", "Обновления");
navigation("Account", localStorage["account"], localStorage["account"], login)

//LEFT MENU
navigation("Books", "Books", "Книги");
navigation("Courses", "Courses", "Курсы");
navigation("Sources", "Sources", "Источники");

// #RIGHT MENU#

//Blog
navigation("All", "All", "Всё");
navigation("Projects", "Projects", "Проекты");

//Javascript
navigation("JSProjects", "Projects", "Проекты");

//Scratch

if(homePage) HomePage();
else{
    if(localStorage["page"]=="login") login()
    if(localStorage["page"]=="About") About()
}
