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
            'Я пишу это в начале Июня 2020 года. <br>  <br> Всё началось с книги Сонмеза Джона "Путь программиста"-а, а точнее, с главы "Создаём успешный блог". Надеюсь, когда нибудь расскажу об этой книге, но тогда я понял, что мне нужен собственный блог. Да, мог бы за пару минут создать его в wordpress-е, но подумал, что это будет не интересно. <br> <br> - Почему бы не создать такой сайт с нуля? - подумал я - это будет хороший опыт, и во время разработки я многому научусь. <br> <br> С одной стороны я был прав, оказалось, я в многом не разбираюсь, и этот проект помог мне понять в чём именно, а с другой, это оказалось сложнее, чем я думал, и с остальными моими делами, с курсами и с учёбой, я не успел вовремя закончить проект, и наконец начать ввести его, хоть и так хотел. <br><br> Я планировал делать подробные обзоры на все книги, которые прочёл, пройтись по всем языкам, которые знаю, и написать как можно больше о них, делиться с лучшими курсами и источниками информации, или в лучшем случае сам стать таким. Но мне сейчас 18 лет, и через месяц мне в армию на 2 года. Что я успею сделать за месяц? Даже сам сайт ещё полностью не готов. В общем, это был реально хороший опыт <br> <br> И всё же, я начну ввести свой блог, но уже после армии, и уже на более профессиональным сайте <br> <br> По всем вопросам можете обращаться, может ещё чем-то помогу, или как-то буду полезен <br> <br> И ещё я благодарен своему другу <a href="https://www.instagram.com/sergey.h.s/?hl=ru" target="blank"> &nbsp Сергею </a> за лого и за картинку. '
        )
        // благодарен своему другу <a href="https://www.instagram.com/sergey.h.s/?hl=ru" target="blank"> &nbsp Сергею </a> за лого и за картинку. 

    // id("aboutContent").innerHTML += `<ul id='aboutProject'>  ${name}  ${gmail} ${vk} ${instagram} ${github} <hr> ${aboutPage} </ul>`;
    id("aboutContent").innerHTML += `<ul id='aboutProject'>  ${name}  ${gmail} ${vk} ${instagram} ${github} <hr>  </ul>`;

    // id("aboutContent").innerHTML += '<h3 style="text-align:center"> <b> Info </b> </h3>'
    id("aboutContent").innerHTML += `<br> <h5> ${siteInfo} </h5>`

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