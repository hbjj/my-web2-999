//顶部悬浮
var mid = document.getElementsByClassName('mid')[0];
window.onscroll = function(){
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    if(st > 180){
        mid.style.position = 'fixed';
        mid.style.paddingBottom = '18px';
    }else{
        mid.style.position = 'static';
        mid.style.paddingBottom = '0';
    }
}
// 轮播图
var centercenter = document.getElementsByClassName('centercenter')[0];
var rotation = document.getElementsByClassName('rotation')[0];
var zuo = document.getElementsByClassName('zuo')[0];
var you = document.getElementsByClassName('you')[0];
var nav = document.getElementById('nav').children;
function get(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } 
    else {
        return getComputedStyle(obj, null)[attr];
    }
}
function animate(obj, json, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var x = true;
        for (var attr in json) {
            (function (attr) {
                if (attr == "opacity") {
                    var now = parseInt(get(obj, attr) * 100);
                    var then = json[attr] * 100;
                } 
                else {
                    var now = parseInt(get(obj, attr));
                    var then = json[attr];
                }
                var speed = (then - now) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (now != then) {
                    x = false;
                    if (attr == "opacity") {
                        obj.style[attr] = (now + speed) / 100;
                    } 
                    else {
                        obj.style[attr] = now + speed + "px";
                    }
                }
            })(attr);
        }
        if (x) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);
}
var ppp = 1;
var timer;
var state = false;
centercenter.onmouseover = function () {
    animate(zuo, {
        opacity: 0.4
    })
    animate(you, {
        opacity: 0.4
    })
    clearInterval(timer);
}
centercenter.onmouseout = function () {
    timer = setInterval(next, 2000);
}
you.onclick = next;
zuo.onclick = want;
function next() {
    if (state) {
        return;
    }
    state = true;ppp++;
    navmove();
    animate(rotation, {
        left: -800 * ppp
    }, function () {
        if (ppp == 7) {
            rotation.style.left = '-800px';
            ppp = 1;
        }
        state = false;
    });
}
function want() {
    if (state) {
        return;
    }
    state = true;ppp--;
    navmove();
    animate(rotation, {
        left: -800 * ppp
    }, function () {
        if (ppp == 0) {
            rotation.style.left = '-4800px';
            ppp = 6;
        }
        state = false;
    });
}
for (var i = 0; i < nav.length; i++) {
    nav[i].ppp = i;
    nav[i].onclick = function () {
        ppp = this.ppp + 1;
        navmove();
        animate(rotation, {
            left: -800 * ppp
        });
    }
}
function navmove() {
    for (var i = 0; i < nav.length; i++) {
        nav[i].className = "";
    }
    if (ppp > 6) {
        nav[0].className = "active";
    } else if (ppp <= 0) {
        nav[5].className = "active";
    } else {
        nav[ppp - 1].className = "active";
    }
}
timer = setInterval(next, 2000);
//充值金额
var moneyselect = document.getElementsByClassName('moneyselect')[0];
var money = document.getElementsByClassName('money')[0];
moneyselect.onchange = function(){
    money.innerHTML = '￥' + moneyselect.value;
}
//公告滚动
var roll = document.getElementsByClassName('roll')[0];
roll.style.top = '0px';
function huadong(){
	roll.style.top = parseInt(roll.style.top) -1 + 'px';
	if(parseInt(roll.style.top) < -351){
		roll.style.top = '0px';
	}
}
var time = setInterval(huadong,30);
roll.onmouseout = function(){
	time = setInterval(huadong,30);
}
roll.onmouseover = function(){
	clearInterval(time);
}
//右侧划出
var slider1 = document.getElementsByClassName('slider1')[0];
slider1.onmouseover = function(){
    slider1.style.right = '0px';
}
slider1.onmouseout = function(){
    slider1.style.right = '-93px';
}
var slider2 = document.getElementsByClassName('slider2')[0];
slider2.onmouseover = function(){
    slider2.style.right = '0px';
}
slider2.onmouseout = function(){
    slider2.style.right = '-89px';
}
var slider3 = document.getElementsByClassName('slider3')[0];
slider3.onmouseover = function(){
    slider3.style.right = '0px';
}
slider3.onmouseout = function(){
    slider3.style.right = '-89px';
}
var slider4 = document.getElementsByClassName('slider4')[0];
slider4.onmouseover = function(){
    slider4.style.right = '0px';
}
slider4.onmouseout = function(){
    slider4.style.right = '-89px';
}