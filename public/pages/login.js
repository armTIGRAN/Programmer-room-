if(!localStorage.getItem("account") || localStorage["account"]=="login" || localStorage["account"]=="вход"){
    localStorage["language"]=="eng" ? localStorage.setItem("account", "login") : localStorage.setItem("account", "вход")
}

function login(){

    let username = '<span id="loginUsername" style="color:white"></span> <input id="username" ></input>'
    let password = '<span id="loginPassword" style="color:white"></span> <input id="password" type="password"></input>'


    id("loginForm").innerHTML=username + "<br>" + password;


    css("username",{
        "margin-left": "10px", 
        "width":"150px",
        "height":"24px",
        "margin-top":"7px"
    });

    css("password", {
        "margin-left": "13.5px",
        "width": "150px",
        "height": "24px",
        "margin-top":"10px"
    });

    css("loginPassword", {
        "margin-left": "-4px",
        "width":"30px"
    })

    id("username").onkeypress = function (event) {
        if(event.key=="Enter") id("password").focus();
    }
    id("password").onkeypress = function (event) {
        if(event.key=="Enter") LoginUser();
    }

    if(localStorage["language"]=="eng"){
        id("loginUsername").innerHTML="Username";
        id("loginPassword").innerHTML="Password";
    }else{
        id("loginUsername").style.paddingRight="44px";
        id("loginPassword").style.paddingRight="13px";
        id("loginUsername").innerHTML="Ник";
        id("loginPassword").innerHTML="Пароль";
    }
} 

function LoginUser(){
    fetch("/login", {
        method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
            username: id("username").value,
            password: id("password").value
        }),
    }).then(res => {
		if (res.status == 401) {
            res.json().then(err => {
                if (err.errorMessage == 'wrongPassword') alert("wrong password");
                else {
                    alert("wrong username");
                    id("username").focus();
                }
            });
        }
        else{
            res.json().then(value => {
                alert("yeah");
                localStorage["account"] = value.username;
                localStorage["role"] = value.role;
                location.reload();
            });
        }
    });
}