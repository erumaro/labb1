// Coded by Tobias Årud

var table = document.getElementById("myTable");

function makeRowsAndColumns(){
    for(var i = 0; i < 5; i++){
        var tr = table.insertRow(i);
        for(var j = 0; j < 5; j++){
            var td = tr.insertCell(j).classList.add("empty");
        }
    }
    
    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 5; j++){
            table.rows[i].cells[j].id = "y" + i + "x" + j;
        }
    }
    
    var arr = document.querySelectorAll("td");
    for(var i = 0; i < arr.length; i++){
        arr[i].addEventListener("click", colorChange);
    }
}

makeRowsAndColumns();

function colorChange(){
    var el = this;
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
    
    /*if(){
        
    }
    
    if(){
        
    }*/
}