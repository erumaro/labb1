// Coded by Tobias Årud

var table = document.getElementById("myTable");

function gameBoard(){
    for(var i = 0; i < 5; i++){
        var tr = table.insertRow(i);
        for(var j = 0; j < 5; j++){
            var td = tr.insertCell(j).classList.add("empty");
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
    
    if(el.classList.contains("empty")){
        el.classList.remove("empty");
        el.classList.add("filled");  
    } else{
        el.classList.remove("filled");
        el.classList.add("empty");  
    }
    if(el.previousElementSibling != null && el.previousElementSibling.classList.contains("empty")){
        if(el.previousElementSibling != null){
            el.previousElementSibling.classList.remove("empty");
            el.previousElementSibling.classList.add("filled");
        }
    } else{
        if(el.previousElementSibling != null){
            el.previousElementSibling.classList.remove("filled");
            el.previousElementSibling.classList.add("empty");
        }
    }
    if(el.nextElementSibling != null && el.nextElementSibling.classList.contains("empty")){
        if(el.nextElementSibling != null){
            el.nextElementSibling.classList.remove("empty");
            el.nextElementSibling.classList.add("filled");
        }
    } else{
        if(el.nextElementSibling != null){
            el.nextElementSibling.classList.remove("filled");
            el.nextElementSibling.classList.add("empty");
        }
    }
    
    if(el.parentNode.previousElementSibling != null && el.parentNode.previousElementSibling.children[i].classList.contains("empty")){
        if(el.parentNode.previousElementSibling != null){
            el.parentNode.previousElementSibling.children[i].classList.remove("empty");
            el.parentNode.previousElementSibling.children[i].classList.add("filled");
        }
    } else{
        if(el.parentNode.previousElementSibling != null){
            el.parentNode.previousElementSibling.children[i].classList.remove("filled");
            el.parentNode.previousElementSibling.children[i].classList.add("empty");
        }
    }
    
    if(el.parentNode.nextElementSibling != null && el.parentNode.nextElementSibling.children[i].classList.contains("empty")){
        if(el.parentNode.nextElementSibling != null){
            el.parentNode.nextElementSibling.children[i].classList.remove("empty");
            el.parentNode.nextElementSibling.children[i].classList.add("filled");
        }
    } else{
        if(el.parentNode.nextElementSibling != null){
            el.parentNode.nextElementSibling.children[i].classList.remove("filled");
            el.parentNode.nextElementSibling.children[i].classList.add("empty");
        }
    }
}