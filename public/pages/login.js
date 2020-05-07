if(!localStorage.getItem("account") || localStorage["account"]=="login" || localStorage["account"]=="вход"){
    localStorage["language"]=="eng" ? localStorage.setItem("account", "login") : localStorage.setItem("account", "вход")
}

function login(){
    
    if(localStorage["account"]=="вход" || localStorage["account"]=="login"){
        if(id("username")==null && id("password")==null){
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
            });
     
            if(localStorage["language"]=="eng"){
                id("loginUsername").innerHTML="Username";
                id("loginPassword").innerHTML="Password";
            }else{
                id("loginUsername").style.paddingRight="44px";
                id("loginPassword").style.paddingRight="13px";
                id("loginUsername").innerHTML="Ник";
                id("loginPassword").innerHTML="Пароль";
            }
    
            id("username").onkeypress = function (event) {
                if(event.key=="Enter") id("password").focus();
            }
            id("password").onkeypress = function (event) {
                if(event.key=="Enter") LoginUser();
            }
        }else LoginUser();
    }else{
        if(confirm(translate('Выйти из аккаунта?', 'Sign out?'))){
            localStorage["account"]=translate('вход', 'login')
            localStorage["role"]="guest"
            location.reload();
        }
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
		if(res.status == 401) {
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
                alert(translate('Вход в аккаунт ' + id('username').value + ' успешно выполнен!', 'Login to ' + id('username').value + ' successfuly completed!'));
                localStorage["account"] = value.username;
                localStorage["role"] = value.role;
                location.reload();
            });
        }
    });
}