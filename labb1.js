// Coded by Tobias Årud

var table = document.getElementById("myTable");

function makeRowsAndColumns(){
    for(var i = 0; i < 5; i++){
        var tr = table.insertRow(i);
        for(var j = 0; j < 5; j++){
            var td = tr.insertCell(j).classList.add("empty");
        }
    }
    
    var arr = document.querySelectorAll("td");
    for(var i = 0; i < arr.length; i++){
        arr[i].addEventListener("click", colorChange);
    }
}

makeRowsAndColumns();

function colorChange(){
    if(this.classList.contains("empty")){
        this.classList.remove("empty");
        this.classList.add("filled");
    } else{
        this.classList.remove("filled");
        this.classList.add("empty");    
    }
    //this.setAttribute("style", "background:#ebebeb;");
}