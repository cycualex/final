function total(){
    var rows = document.getElementsByClassName('pr-row');
    var smalltotal = document.getElementsByClassName('smalltotal');
    var tprice = 0 ;
    for (var i = 0; i < rows.length; i++) {             
        tprice += parseInt(smalltotal[i].innerHTML);
    }
    document.getElementById("total").innerHTML = tprice;
}
total();
function closeMs(){
    document.getElementById("ms").style.display = "none";
    document.getElementById("ms").classList.remove("show");
}