function HomePage() {

    localStorage.setItem("page", "HomePage");
    id('title').innerHTML = 'Home';
    id('pageTitle').innerHTML = '';
    content.innerHTML = "<img id='mainImg' src='../images/programmer-room.jpg'/>";

    css("mainImg", {
        "width": "100%",
        "height": "400px",
        "marginLeft": "8px"
    })

    content.innerHTML += " <br> <hr style='margin-left:8px'> <div><img id='meImg' src='../images/me.jpg'/></div><div id='aboutContent'></div>";

    css("meImg", {
        "width": "90px",
        "height": "550px",
        "minWidth": "300px",
        "marginLeft": "8px",
        "float": "left"
    });

    let name = `<h1> <b>${translate('Тигран Бадалян', 'Tigran Badalyan')} </b>  </h1> `;
    let gmail = " <a href='https://mail.google.com/mail/u/0/#sent?compose=CllgCJvkZCVKPzgccKkqWVvtGwmQLrjVNlhgDgGXMrwrWRQKLJQNGmCfBqRBxkCCqRrrbGtXbQq' target='_blank'>  <span> btigran02@gmail.com  </span> </a>"
    let vk = "<a href='https://vk.com/armtigran' target='_blank'> <span style='margin-left:20px'> Vk </span> <a/>"
    let instagram = "<a href='https://www.instagram.com/biktiko/?hl=ru' target='_blank'> <span style='margin-left:20px'> Instagram </span>  </a> "
    let github = "<a href='https://github.com/armTIGRAN' target='_blank'> <span style='margin-left:20px'>Github</span> <a/> "

    aboutPage = translate(
        "<li> • Обучение на простом языке </li> <li> • Обзоры на свои проекты </li> <li>• Рекомендации лучших книг, источников и курсов</li> <li>• Советы для новичков </li> <li> • Отвечу каждому, помогу чем смогу </li>",
        "<li> • Teaching in an acceptable language </li> <li> • Revieus on my projects </li> <li>• Recommendations for best books, sources and cources </li> <li>• Tips for begginers </li> <li> •I will answer anyone and help to the best of my ability </li>"
    )

    siteInfo = translate(
        'Я пишу это в начале Июня 2020 года. <br> Занимаюсь разработкай сайта, когда есть время и настроение, не спеша, и просто наслаждаюсь этим. <br> Всё началось с книги Сонмеза Джона "Путь программиста"-а, а точнее, с главы "Создаём успешный блог". Я когда нибудь расскажу об этой книге, но суть в том, что я понял, что мне нужен собственный блог. Да, я мог за пару минут создать его в wordpress-е например, но '
    )

    id("aboutContent").innerHTML += `<ul id='aboutProject'>  ${name}  ${gmail} ${vk} ${instagram} ${github} <hr> ${aboutPage} </ul>`;
    // id("pageContent").innerHTML += '<h3 style="text-align:center"> <b> Info </b> </h3>'
    // id("pageContent").innerHTML += `<br> <h5> ${siteInfo} </h5>`

    css("aboutContent", {
        "marginLeft": "350px"
    });

    css("aboutProject", {
        "text-align": "center",
        "letter-spacing": "0.8px",
        "padding-left": "8px",
        "font-size": "21px",
        "color": "rgb(25, 198, 198);"
    });

    css("PageContent", {
        'padding-left': '0px'
    })
}