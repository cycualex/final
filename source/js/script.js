//nav
function openNav() {
    if(screen.width > 576){
        document.getElementById("MySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("MySidenav").style.backgroundColor = "rgba(204, 178, 76, 0.6)";
        document.getElementById("MySidenav").classList.remove("text-center");

    }else {
        document.getElementById("MySidenav").style.width = "100%";
        document.getElementById("MySidenav").classList.add("text-center");
        document.getElementById("MySidenav").style.backgroundColor = "black";
    }
    
}

function closeNav() {
    document.getElementById("MySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

//alert
function closeMs(){
    document.getElementById("ms").style.display = "none";
    document.getElementById("ms").classList.remove("show");
}

