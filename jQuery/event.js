var a = $('#test-link');
a.mouseenter(function () {
    alert('Hello!');
});
click//鼠标单击时触发
dblclick//鼠标双击时触发
mouseenter//鼠标进入时触发
mouseleave//鼠标移出时触发
hover//鼠标进入和退出时触发两个函数，相当于mouseenter和mouseleave两个函数
//键盘事件
keydown//键盘按下时触发
keyup//键盘松开后触发
keypress//按一次键后触发，触发之后保留触发的状态
//其他事件
focus//当DOM获得焦点时触发
blur()//当DOM失去焦点时触发
change()//当<input><select>或者<textarea>的内容改变时触发
submit()//当<form>提交时触发
ready//当页面被载入并且DOM完成初始化后触发
$(function () {

});//对于ready处理
//事件参数
pageX//捕捉到鼠标的横坐标
pageY//捕捉到鼠标的纵坐标
//取消绑定
function hello() {
    alert('hello!');
}
a.click(hello);
setTimeout(function () {
    a.off('click', hello);//注明off('click',function)无法已绑定的第一个匿名函数
},10000);
//事件触发条件
var input = $('#test-input');
input.change(function () {
    console.log('Change...');//当用户在文本框输入数，就会输出，但是在控制台无法输出
});
//修改之后
var input = $('#test-input');
input.val('change it!');//===input.trigger()缩写
input.change();//触发change事件
//浏览器安全
$(function () {
    window.open('/');//无法弹出新窗口
});
var button1 = $('#testPopuButton1');
var button2 = $('#testPopuButton2');
function popuTestWindow() {
    window.open('/');
}
button1.click(function () {
    popuTestWindow();//重新加载界面
});
button2.click(function () {
    setTimeout(popuTestWindow,3000);//三秒后执行
});