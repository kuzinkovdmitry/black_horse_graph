window.onload=function () { 
    addToList();
    makeGraph("graph", "labels") ;
};

function addToList(){
    var mas = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];
    var list = document.getElementById("list");
    function inLi(mas){
        for(var i = 0; i < mas.length; i++){
            var newLi = document.createElement('li');
            var item_elem = i + 1;
            var value_elem = mas[i];
            newLi.innerHTML = value_elem + ":" + item_elem;
            list.appendChild(newLi);
            if (mas[i] <= 5){
                newLi.style.backgroundColor = "#00ff00";
            };
            if (mas[i] > 5 && mas[i] <= 10){
                newLi.style.backgroundColor = "yellow";
            };
            if (mas[i] > 10){
                newLi.style.backgroundColor = "red";
            };
        }
    }
    inLi(mas);
}

function makeGraph(container, labels) {
    container = document.getElementById(container);
    labels = document.getElementById(labels);
    var allLi = container.getElementsByTagName("li");
    for(var i = 0; i < allLi.length; i++)
    {
        var item = allLi.item(i);
        var value = item.innerHTML;
        var content = value.split(":");
        value = content[0];
        item.style.bottom = (-1) + "px";
        item.style.left = (i * 50 + 20) + "px";
        item.style.height = (value * 12) + "px";
        item.innerHTML = value;
        item.style.visibility = "visible";	
        labels.innerHTML = labels.innerHTML + "<div>" + content[1] + "</div>";
    }	
}


