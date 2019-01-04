//顶部悬浮
var toppp = document.getElementsByClassName('toppp')[0];
window.onscroll = function(){
	var st = document.documentElement.scrollTop || document.body.scrollTop;
	if(st > 180){
		toppp.style.position = 'fixed';
		toppp.style.paddingBottom = '18px';
	}
	else{
		toppp.style.position = 'static';
		toppp.style.paddingBottom = '0';
	}
}
//含量选择
var first = document.getElementsByClassName('first')[0];
var second = document.getElementsByClassName('second')[0];
var duigou = document.getElementsByClassName('duigou');
var content = document.getElementsByClassName('content')[0];
first.onclick = function(){
	second.style.border = 'none';
	first.style.border = '#fe0a4a 1px solid';
	duigou[0].style.opacity = 10;
	duigou[1].style.opacity = 0;
	content.innerHTML = '"'+ parseInt(first.innerHTML) + 'ml' + '"';
}
second.onclick = function(){
	first.style.border = 'none';
	second.style.border = ' #fe0a4a 1px solid ';
	duigou[0].style.opacity = 0;
	duigou[1].style.opacity = 10;
	content.innerHTML = '"'+ parseInt(second.innerHTML) + 'ml' + '"';
}
//数量选择
var buttondis = document.getElementsByClassName('buttondis')[0];
var buttonadd = document.getElementsByClassName('buttonadd')[0];
var inputsss = document.getElementsByClassName('inputsss')[0];
buttondis.onclick = function(){
	if(inputsss.value > 1){
		inputsss.value = inputsss.value - 1;
	}
	if(inputsss.value == 1){
		buttondis.style.cursor = 'not-allowed';
	} 
	else{
		buttondis.style.cursor = 'pointer';
		buttonadd.style.cursor = 'pointer';
	} 
}
buttonadd.onclick = function(){
	if(inputsss.value < 5){
		inputsss.value = parseInt(inputsss.value) + 1;
	}
	if(inputsss.value == 5){
		buttonadd.style.cursor = 'not-allowed';
	} 
	else{
		buttondis.style.cursor = 'pointer';
		buttonadd.style.cursor = 'pointer';
	} 
}
//加入购物车
var buttonss = document.getElementsByClassName('buttonss')[0];
var mengzhao = document.getElementsByClassName('mengzhao')[0];
var buttongou = document.getElementsByClassName('buttongou')[0];
var buttonbuy = document.getElementsByClassName('buttonbuy')[0];
var jiagou = document.getElementsByClassName('jiagou')[0];
var cha = document.getElementsByClassName('cha')[0];
buttonss.onclick = function(){
	mengzhao.style.display = 'inline';
	jiagou.style.display = 'inline';
}
function chadiao(){
	mengzhao.style.display = 'none';
	jiagou.style.display = 'none';
}
buttongou.onclick = chadiao;
buttonbuy.onclick = chadiao;
cha.onclick = chadiao;
//放大镜
var big = document.getElementsByClassName('big')[0];
var con = document.getElementsByClassName('con')[0];
var Bimg = document.getElementsByClassName('Bimg')[0];
var slider = document.getElementsByClassName('slider')[0];
var distance = big.offsetLeft;
con.style.left = distance + 400 + 'px';
//小图
big.onmouseover = function(){
	if(pic.style.left == '0px'){
		Bimg.src="../img/pp0.jpeg";
	}
	else{
		Bimg.src="../img/pp1.jpeg";
	}
	slider.style.display = 'block';
	con.style.display = 'block';
}
big.onmousemove = function(ev){
	var ev = ev||window.event;
	var stt = document.documentElement.scrollTop || document.body.scrollTop;
	//计算放大镜的位置
	var left = ev.clientX - big.offsetLeft - slider.offsetWidth/2;
	var top = ev.clientY - big.offsetTop - slider.offsetHeight/2 + stt;
  	var maxLeft = big.offsetWidth - slider.offsetWidth;
  	var maxTop = big.offsetHeight - slider.offsetHeight;
  	left = left>maxLeft?maxLeft:left<0?0:left;
  	top = top>maxTop?maxTop:top<0?0:top;
  	//设置放大镜的位置
  	if(pic.style.left == '0px'){
		slider.style.left = left + 'px';
  		slider.style.top = top + 'px';
	}
	else{
	  	slider.style.left = left + 400 + 'px';
	  	slider.style.top = top  + 'px';
	}
  	//计算右侧大图的移动比例
  	var wmove = left/maxLeft;
  	var hmove = top/maxTop;
  	//计算大图的移动范围
  	var BimgLeft = con.offsetWidth - Bimg.offsetWidth;
  	var BimgTop = con.offsetHeight - Bimg.offsetHeight;
  	//设置大图的位置
  	Bimg.style.left = wmove * BimgLeft + 'px';
  	Bimg.style.top = hmove *BimgTop + 'px';
 }
big.onmouseout = function(){
	slider.style.display = 'none';
	con.style.display = 'none';
}

//选择小图
var big = document.getElementsByClassName('big')[0];
var pic = document.getElementsByClassName('pic')[0];
var zuo = document.getElementsByClassName('zuo')[0];
var you = document.getElementsByClassName('you')[0];
var white = document.getElementsByClassName('white')[0];
var blue = document.getElementsByClassName('blue')[0];
pic.style.left = '0px';
function click(){
	if(pic.style.left == '0px'){
		pic.style.left = '-400px';
		blue.style.border = '#ff9003 2px solid ';
		white.style.border = '#fff 2px solid ';
	}
	else{
		pic.style.left = '0px';
		white.style.border = '#ff9003 2px solid ';
		blue.style.border = '#fff 2px solid';
	}
}
white.onmouseover = function(){
	pic.style.left = '0px';
	white.style.border = '2px solid #ff9003';
	blue.style.border = '2px solid #fff';
}
blue.onmouseover = function(){
	pic.style.left = '-400px';
	blue.style.border = ' #ff9003 2px solid ';
	white.style.border = '#fff 2px solid';
}
zuo.onclick = click;
you.onclick = click;

