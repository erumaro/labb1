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
    if(el.classList.contains("empty") && el.previousElementSibling.classList.contains("empty") && el.nextElementSibling.classList.contains("empty")){
        if(el.previousElementSibling != null){
            el.previousElementSibling.classList.remove("empty");
            el.previousElementSibling.classList.add("filled");
        }
        el.classList.remove("empty");
        el.classList.add("filled");
        if(el.nextElementSibling != null){
            el.nextElementSibling.classList.remove("empty");
            el.nextElementSibling.classList.add("filled");
        }
    } else if(el.classList.contains("filled") && el.previousElementSibling.classList.contains("filled") && el.nextElementSibling.classList.contains("filled")){
        if(el.previousElementSibling != null){
            el.previousElementSibling.classList.remove("filled");
            el.previousElementSibling.classList.add("empty");
        }
        el.classList.remove("filled");
        el.classList.add("empty");
        if(el.nextElementSibling != null){
            el.nextElementSibling.classList.remove("filled");
            el.nextElementSibling.classList.add("empty");
        } 
    } else if(el.classList.contains("empty") && el.previousElementSibling.classList.contains("filled") && el.nextElementSibling.classList.contains("filled")){
        if(el.previousElementSibling != null){
            el.previousElementSibling.classList.remove("filled");
            el.previousElementSibling.classList.add("empty");
        }
        el.classList.remove("empty");
        el.classList.add("filled"); 
        if(el.nextElementSibling != null){
            el.nextElementSibling.classList.remove("filled");
            el.nextElementSibling.classList.add("empty");
        }
    } else{
        if(el.previousElementSibling != null){
            el.previousElementSibling.classList.remove("empty");
            el.previousElementSibling.classList.add("filled");
        }
        el.classList.remove("filled");
        el.classList.add("empty"); 
        if(el.nextElementSibling != null){
            el.nextElementSibling.classList.remove("empty");
            el.nextElementSibling.classList.add("filled");
        }
    }
}

/*
    for(var i = 0; i < 5; i++){
        var x = table.rows[i].cells;
        for(var j = 0; j < 5; j++){
        x[j].classList.remove("empty");
        x[j].classList.add("filled");      
        }     
    }



function changeContent(id, row, cell, content) {
    var x = document.getElementById(id).rows[row].cells;
    x[cell].innerHTML = content;
}
*/

    /* Good code for changing one cell
    var td = document.getElementsByTagName("td");
    if(this.classList.contains("empty")){
        this.classList.remove("empty");
        this.classList.add("filled");
        this.previousSibling.innerHTML = "left";
        this.nextSibling.innerHTML = "right";
    } else{
        this.classList.remove("filled");
        this.classList.add("empty");    
    }
    */
    //this.setAttribute("style", "background:#ebebeb;");