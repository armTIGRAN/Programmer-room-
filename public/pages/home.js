function HomePage(){

    localStorage.setItem("page", "HomePage");
    content.innerHTML ="<img id='mainImg' src='../images/programmer-room.jpg'/>";
    
    css("mainImg", {
        "width": "100%",
        "height": "400px",
        "marginLeft": "8px"
    })
    
    content.innerHTML +=" <br> <hr style='margin-left:8px'> <div><img id='meImg' src='../images/me.jpg'/></div><div id='aboutContent'></div>";

    css("meImg", {
        "width": "90px",
        "height": "550px",
        "minWidth": "300px",
        "marginLeft": "8px",
        "float":"left"
    });


    var name ="<h1> <b style>Tigran Badalyan </b>  </h1> <br>";
    var github="<h4><b>Github: </b> <a href='https://github.com/armTIGRAN' target='_blank'>  https://github.com/armTIGRAN <a/> </h4>"
    var gmail="<h4> <b>Gmail:</b> btigran02@gmail.com </h4>"
    var vk ="<h4> <b>Vk: </b> <a href='https://vk.com/armtigran' target='_blank'> https://vk.com/armtigran <a/> </h4>"
    var instagram = "<h4> <b>Instagram: </b> <a href='https://www.instagram.com/b_tiko_a/?hl=ru ' target='_blank'> https://www.instagram.com/b_tiko_a/?hl=ru </a> </h4> "
    
    id("aboutContent").innerHTML = "<div>" + name + github + gmail + vk + instagram + "</div>"

    aboutMe=translate( 
        // "Да, это влог. Тут, я буду > <br> 1)На простом языке объяснять всё, что знаю <br> 2)Делиться своими проектами, и делать них обзоры <br> 3)Давать советы <br> 4)Рекомендовать лучшие книги и источники информации <br> 5)Рассказывать про себя и свой карьерный путь"  
        "<li>• Простое обучение всего того, чего знаю </li><li>• Обзоры на свои проекты </li> <li>• Рекомендации лучших книг, источников и курсов</li> <li>• Советы для новичков</li> <li>• Ответы на вопросы</li>"
        
        )

    // id("aboutContent").innerHTML +="<hr> <h6 id='aboutProject'>" + aboutMe +  "</h6>"
    id("aboutContent").innerHTML +="<hr> <ul id='aboutProject'>" + aboutMe +  "</ul>"
        
    css("aboutContent", {
        "marginLeft": "350px"
    })

    css("aboutProject", {
        "letter-spacing": "0.8px",
        "padding-left":"8px",
        "font-size": "21px",
        "color":"rgb(51, 204, 204)"
    })
}
