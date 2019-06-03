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


var read_more = document.getElementById("read-more")
var read_more2 = document.getElementById("read-more2")
var last = document.getElementById("last");
var context = document.getElementsByClassName("context")
var expand = false;
var expand2 = false;


function click_read_more(){
    if (expand){
        context[0].style.overflow = "hidden";
        context[0].style.height = "55px";
        expand = 0;
        read_more.innerHTML = "read more";
    }else{
        context[0].style.overflow = "visible";
        context[0].style.height = "100px";
        expand = 1;
        read_more.innerHTML = "close";
    }
}

function click_read_more2(){
    if (expand2){
        context[1].style.overflow = "hidden";
        context[1].style.height = "55px";
        expand2 = 0;
        read_more2.innerHTML = "read more";
        read_more2.style.marginTop = "0px";
    }else{
        context[1].style.overflow = "visible";
        context[1].style.height = "100px";
        expand2 = 1;
        read_more2.innerHTML = "close";
        read_more2.style.marginTop = "50px";
        last.style.marginTop = "50px";
    }
}

read_more2.addEventListener("click", click_read_more2);
read_more.addEventListener("click", click_read_more);





