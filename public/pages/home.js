function HomePage(){
    localStorage.setItem("page", "HomePage");
    content.innerHTML ="<img id='mainImg' src='../images/programmer-room.jpg'/>";
    css("mainImg", {
        "width": "95%",
        "height": "400px",
        "marginLeft": "8px"
    })
}
