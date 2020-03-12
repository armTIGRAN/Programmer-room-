function HomePage(){
    localStorage.setItem("page", "home");

    // content.innerHTML = "<article><h1>Programmer room<h1></article>";
    content.innerHTML ="<img id='mainImg' src='../images/programmer-room.jpg'/>";
    // id("mainImg").style.width=id("body").offsetWidth/1.5 + "px";
    id("mainImg").style.width="95%";
    id("mainImg").style.height="400px";
    id("mainImg").style.marginLeft="8px";
}
