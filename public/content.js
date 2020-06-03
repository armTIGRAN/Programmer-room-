navigation("siteNameH2", "Programmer room", "Programmer room", HomePage);

//TOP MENU
navigation("Home", "Home", "Главная", HomePage);
navigation("Friends", "Friends", "Друзья", Friends);
navigation("Blog", "Blog", "Блог", Blog);
navigation("Updates", "Updates", "Обновления");
// if (localStorage['role'] == 'owner') navigation("Register", "Sign up", "Регистрация", Register);
navigation("Account", localStorage["account"], localStorage["account"], login)

//LEFT MENU
navigation("Books", "Books", "Книги");
navigation("Courses", "Courses", "Курсы");
navigation("Sources", "Sources", "Источники");

// #RIGHT MENU#

//Blog
navigation("All", "All posts", "Все посты");
navigation("Projects", "All projects", "Все проекты");

//Javascript
navigation("JSbegin", "For begginers", "Для новичков");
navigation("JSuseful", "Useful", "Полезное");
navigation("JSalgorithms", "Alghoritms", "Алгоритмы");
navigation("JSProjects", "Projects", "Проекты");
// navigation("JSreact", "React", "React");

//Python
navigation("PythonBegin", "For begginers", "Для новичков");
navigation("PythonUseful", "Useful", "Полезное");
navigation("PythonAlgorithms", "Alghoritms", "Алгоритмы");
navigation("PythonProjects", "Projects", "Проекты");
//Info


if (homePage) HomePage();
else {
    if (localStorage["page"] == "HomePage") HomePage();
    if (localStorage["page"] == "login") login();
    if (localStorage["page"] == "About") About();
    if (localStorage["page"] == "Blog") Blog();
}