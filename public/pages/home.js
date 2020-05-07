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


    var name ="<h1> <b>Tigran Badalyan </b>  </h1> <br>";
    var gmail="<h5> <b>Gmail:</b> btigran02@gmail.com </h5>"
    var github="<h5> <b>Github: </b> <a href='https://github.com/armTIGRAN' target='_blank'>  https://github.com/armTIGRAN <a/> </h5>"
    var vk ="<h5> <b>Vk: </b> <a href='https://vk.com/armtigran' target='_blank'> https://vk.com/armtigran <a/> </h5>"
    var instagram = "<h5> <b>Instagram: </b> <a href='https://www.instagram.com/b_tiko_a/?hl=ru ' target='_blank'> https://www.instagram.com/biktiko/?hl=ru </a> </h5> "
    
    id("aboutContent").innerHTML = "<div style='text-align:center'>" + name + gmail + github + vk + instagram + "</div>"

    aboutMe=translate( 
        "<li> • Обучение на простом языке </li> <li> • Обзоры на свои проекты </li> <li>• Рекомендации лучших книг, источников и курсов</li> <li>• Советы для новичков </li> <li> • Отвечу каждому, помогу чем смогу </li>",
        "<li> • Teaching in an acceptable language </li> <li> • Revieus on my projects </li> <li>• Recommendations for best books, sources and cources </li> <li>• Tips for begginers </li> <li> •I will answer anyone and help to the best of my ability </li>"
    )

    id("aboutContent").innerHTML +="<hr> <ul id='aboutProject'>" + aboutMe +  "</ul>";
        
    css("aboutContent", {
        "marginLeft": "350px"
    });

    css("aboutProject", {
        "text-align": "center",
        "letter-spacing": "0.8px",
        "padding-left":"8px",
        "font-size": "21px",
        "color":"rgb(25, 198, 198);"
    });

    css("PageContent", {
        'padding-left': '0px'
    })
}
