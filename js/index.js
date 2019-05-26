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

function buttonsShow() {
    //将之前的小圆点的样式清除
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].className == "on") {
            buttons[i].className = "";
        }
    }
    //数组从0开始，故index需要-1
    buttons[index - 1].className = "on";
}

function animate1() {
    list.style.left = (-1525) + 'px';
    index = 2;
    buttonsShow();
}

function animate2() {
    list.style.left = (-3038) + 'px';
    index = 3;
    buttonsShow();
}


function animate0() {
    list.style.left = 0 + 'px';
    index = 1;
    buttonsShow();
}


spot1.addEventListener("click", animate0)
spot2.addEventListener("click", animate1)
spot3.addEventListener("click", animate2)

function play() {
    //重复执行的定时器
    timer = setInterval(function () {
        if (index == 1) {
            animate1()
        } else if (index == 2) {
            animate2()
        } else {
            animate0()
        }
    }, 5000)
}

function stop() {
    clearInterval(timer);
}

play();


// 第二个轮播图
var box2 = document.getElementById("box2");
var next =  document.getElementById("next");
var prev =  document.getElementById("prev");
// alert(box2.offsetLeft);
if (box2.offsetLeft == 132){
    prev.style.display = "none";
}

// if (box2.offsetLeft == (-1353)){
//     next.style.display = "none";
// }

function move(offset){
    // alert("sec");
    var oldLeft = box2.offsetLeft;
    var newLeft;

    
    if (offset>0){
        newLeft = oldLeft+offset + "px";
        newLeftInt = oldLeft+offset;
        
        if ((newLeftInt)>0){
            prev.style.display = "none";
            next.style.display = "block";
            box2.style.left = -1 + "px";
        }else{
            box2.style.left = newLeft;
            next.style.display = "block";
        }
        
    }else{
        if (oldLeft <= (-640)){
            newLeft = -1160+"px"
            box2.style.left = newLeft;
            next.style.display = "none";
            prev.style.display = "block";
        }else{
            prev.style.display = "block";
            newLeft = oldLeft + offset +"px"
            box2.style.left = newLeft;
        }
    }
    
}

function ne(){
    // alert("")
    move(-325)
}
function pr(){
    move(60)
}

next.addEventListener("click", ne)
prev.addEventListener("click", pr)


