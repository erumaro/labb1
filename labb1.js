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
    table.rows.classList.remove("empty");
    table.rows.classList.add("filled");
}

/*
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