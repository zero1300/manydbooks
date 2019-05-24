var oUL = document.getElementById("list");


// discover下拉菜单
var mainMenu = document.getElementById("main-menu"); 
var discover = document.getElementsByClassName("DISCOVER");
var arrowBottom = document.getElementById("arrow-bottom");
var show = 0;

function showMenu(){
    if (show === 0){
        mainMenu.style.display = "inline";
        show = 1;
    }else{
        mainMenu.style.display = "none";
        show = 0;
    }
}
discover[0].addEventListener("click", showMenu);
arrowBottom.addEventListener("click", showMenu);