// Coded by Tobias Årud

var table = document.getElementById("myTable");

function gameBoard(){
    for(var i = 0; i < 5; i++){
        var tr = table.insertRow(i);
        for(var j = 0; j < 5; j++){
            var td = tr.insertCell(j).classList.add("lights-on");
        }
    }
    
    var arr = document.querySelectorAll("td");
    for(var i = 0; i < arr.length; i++){
        arr[i].addEventListener("click", game);
    }
}

gameBoard();

function game(){
    var el = this;
    var i = this.cellIndex;
    
    if(el.classList.contains("lights-on")){
        el.classList.remove("lights-on");
        el.classList.add("lights-off");  
    } else{
        el.classList.remove("lights-off");
        el.classList.add("lights-on");  
    }
    if(el.previousElementSibling != null && el.previousElementSibling.classList.contains("lights-on")){
        if(el.previousElementSibling != null){
            el.previousElementSibling.classList.remove("lights-on");
            el.previousElementSibling.classList.add("lights-off");
        }
    } else{
        if(el.previousElementSibling != null){
            el.previousElementSibling.classList.remove("lights-off");
            el.previousElementSibling.classList.add("lights-on");
        }
    }
    if(el.nextElementSibling != null && el.nextElementSibling.classList.contains("lights-on")){
        if(el.nextElementSibling != null){
            el.nextElementSibling.classList.remove("lights-on");
            el.nextElementSibling.classList.add("lights-off");
        }
    } else{
        if(el.nextElementSibling != null){
            el.nextElementSibling.classList.remove("lights-off");
            el.nextElementSibling.classList.add("lights-on");
        }
    }
    
    if(el.parentNode.previousElementSibling != null && el.parentNode.previousElementSibling.children[i].classList.contains("lights-on")){
        if(el.parentNode.previousElementSibling != null){
            el.parentNode.previousElementSibling.children[i].classList.remove("lights-on");
            el.parentNode.previousElementSibling.children[i].classList.add("lights-off");
        }
    } else{
        if(el.parentNode.previousElementSibling != null){
            el.parentNode.previousElementSibling.children[i].classList.remove("lights-off");
            el.parentNode.previousElementSibling.children[i].classList.add("lights-on");
        }
    }
    
    if(el.parentNode.nextElementSibling != null && el.parentNode.nextElementSibling.children[i].classList.contains("lights-on")){
        if(el.parentNode.nextElementSibling != null){
            el.parentNode.nextElementSibling.children[i].classList.remove("lights-on");
            el.parentNode.nextElementSibling.children[i].classList.add("lights-off");
        }
    } else{
        if(el.parentNode.nextElementSibling != null){
            el.parentNode.nextElementSibling.children[i].classList.remove("lights-off");
            el.parentNode.nextElementSibling.children[i].classList.add("lights-on");
        }
    }
}