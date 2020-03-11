if(!localStorage.getItem("account") || localStorage["account"]=="login" || localStorage["account"]=="вход"){
    localStorage["language"]=="eng" ? localStorage.setItem("account", "login") : localStorage.setItem("account", "вход")
}

function login(){

    content.innerHTML ='<div id="LoginDiv"> <h1 id="login">Login</h1> <br> <span id="loginUsername"></span> <input id="username" style="margin-left:5px; width: 150px"> <br><br> <span id="loginPassword"></span> <input id="password" type="password" style=" margin-left:9px; width: 150px"><br><br> <button type="button" style="margin-left:-6px; width:145px" onclick=ForgetPassword()><spam id="ForgetPassword"></spam></button><button type="button" style="width:87px; margin-left:5px" onclick=LoginUser()><spam id="LogButton"></spam></button> </div>'; 
    id("LoginDiv").style.marginLeft="35px"

    if(localStorage["language"]=="eng"){
        id("loginUsername").innerHTML="Username: ";
        id("loginPassword").innerHTML="Password: ";
    }else{
        id("loginUsername").style.paddingRight="44px";
        id("loginPassword").style.paddingRight="13px";
        id("loginUsername").innerHTML="Ник: ";
        id("loginPassword").innerHTML="Пароль: ";
    }
    
    localStorage["language"]=="eng" ? id("login").innerHTML="Login" : id("login").innerHTML="Вход";
    localStorage["language"]=="eng" ? id("ForgetPassword").innerHTML="Forget password?" : id("ForgetPassword").innerHTML="Забыли пароль?";
    localStorage["language"]=="eng" ? id("LogButton").innerHTML="Login" : id("LogButton").innerHTML="Вход";
} 

function LoginUser(){
    fetch("/login", {
        method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
            username: id("username").value,
            password: id("password").value
        }),
    }).then(res => {
		if (res.status == 401) {
            res.json().then(err => {
                if (err.errorMessage == 'wrongPassword') {
                    alert("wrong password");
                } else {
                    alert("wrong username");
                }
            });
        }
        else {
            res.json().then(value => {
                alert("yeah");
                localStorage["account"] = value.username;
                location.reload();
            });
        }
    });

}