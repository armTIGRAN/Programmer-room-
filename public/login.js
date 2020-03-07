// let accounts;

if(!localStorage.getItem("account")){
	localStorage.setItem("account", "undefined");
}

function login(){

    fetch("/accounts", {
        method: "GET"
    }).then(res => {
        res.json().then(value => {
            accounts = value;
        })
    });
    
    content.innerHTML ='<div id="LoginDiv"> <h1 id="login">Login</h1> <br> <span id="loginUsername"></span> <input id="username" style="margin-left:5px; width: 150px"> <br><br> <span id="loginPassword"></span> <input id="password" type="password" style=" margin-left:9px; width: 150px"><br><br> <button type="button" style="margin-left:-6px; width:145px" onclick=ForgetPassword()><spam id="ForgetPassword"></spam></button><button type="button" style="width:87px; margin-left:5px" onclick=LoginUser()><spam id="LogButton"></spam></button> </div>'; 
    document.getElementById("LoginDiv").style.marginLeft="35px"

    if(localStorage["language"]=="eng"){
        document.getElementById("loginUsername").innerHTML="Username: ";
        document.getElementById("loginPassword").innerHTML="Password: ";
    }else{
        document.getElementById("loginUsername").style.paddingRight="44px";
        document.getElementById("loginPassword").style.paddingRight="13px";
        document.getElementById("loginUsername").innerHTML="Ник: ";
        document.getElementById("loginPassword").innerHTML="Пароль: ";
    }
    
    localStorage["language"]=="eng" ? document.getElementById("login").innerHTML="Login" : document.getElementById("login").innerHTML="Вход";
    localStorage["language"]=="eng" ? document.getElementById("ForgetPassword").innerHTML="Forget password?" : document.getElementById("ForgetPassword").innerHTML="Забыли пароль?";
    localStorage["language"]=="eng" ? document.getElementById("LogButton").innerHTML="Login" : document.getElementById("LogButton").innerHTML="Вход";
} 

function LoginUser(){
    
    fetch("/accounts", {
        method: "GET"
    }).then(res => {
        res.json().then(value => {
            accounts = value;
        })
    });

    for(var i=0; i<accounts.length; i++){
        if(document.getElementById("username").value==accounts[i]["username"]){
            if(document.getElementById("password").value==accounts[i]["password"]){
                alert("yeah");
                localStorage["account"]=accounts[i]["username"];
                location.reload();
            }else alert("wrong password");
        }else alert("User with nickname " + document.getElementById("username").value + " does not exist")
    }
}