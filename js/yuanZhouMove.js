var oX = 650;
var oY = 300;
var r = 250;
var O = 0;
var element_ID ="message";
var element_ID2="message2";
var s = "stop";
//主函数
function Move(ID) {
    cycle();
    var elem = document.getElementById(ID);
    //如果只改变xpos或ypos, 会有惊喜哦！
    xpos = parseInt(elem.style.left);
    ypos = parseInt(elem.style.top);
    algorithm();
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    if(s=="start")
    setTimeout("Move(element_ID)", 20);
}

//判断一个周期
function cycle() {
    O += 0.1;
    if (O >= 3.14) {
        O == 0;
    }
}
//核心算法
function algorithm() {
    xpos = oX + r * Math.sin(O);
    ypos = oY + r * Math.cos(O);
}
//开关
function switc(input){
    var source = input.getAttribute("value");
    if(source=="start"){
        s="start";
        input.setAttribute("value"," stop");
        Move(element_ID);
    }else{
        s="stop";
        input.setAttribute("value","start");
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {//typeof()  把window.onload转换成对应得 类型 字符串
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func;
        }
    }
}

addLoadEvent(function(){
    Move(element_ID);
});


