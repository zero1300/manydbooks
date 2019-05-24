// discover下拉菜单
var mainMenu = document.getElementById("main-menu");
var discover = document.getElementsByClassName("DISCOVER");
var arrowBottom = document.getElementById("arrow-bottom");
var buttons = document.getElementById('buttons').getElementsByTagName('span');
var show = 0;

function showMenu() {
    if (show === 0) {
        mainMenu.style.display = "inline";
        show = 1;
    } else {
        mainMenu.style.display = "none";
        show = 0;
    }
}
discover[0].addEventListener("click", showMenu);
arrowBottom.addEventListener("click", showMenu);

// 轮播图
var container = document.getElementById('container');
var list = document.getElementById('list');
var buttons = document.getElementById('buttons').getElementsByTagName('span');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var spot1 = document.getElementById("spot1");
var spot2 = document.getElementById("spot2");
var spot3 = document.getElementById("spot3");
var index = 1;
var timer;


function animate(offset) {
    var newLeft = parseInt(list.offsetLeft) + offset;
    list.style.left = newLeft + 'px';
}


function animate1(){
    list.style.left = (-1549) + 'px';
}

function animate2(){
    list.style.left = (-3070) + 'px';
}


function animate0(){
    list.style.left = 0 + 'px';
}


spot1.addEventListener("click", animate0)
spot2.addEventListener("click", animate1)
spot3.addEventListener("click", animate2)

