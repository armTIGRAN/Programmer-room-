var content = document.getElementById("PageContent");
var books=[];

books[0]="Путь программиста"
books[1]="Стив Круг"
books[2]="Совершенный код"

function Books(){
    content.innerHTML="";
    for(i=0; i<books.length; i++){
        content.innerHTML+="<article>" + books[i] + "</article>"
    }
}