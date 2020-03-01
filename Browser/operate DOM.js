//HTML表单输入控件主要有这几种：
//<input type="text"> 文本框 输入文本
//<input type="password"> 口令框 输入口令
//<input type="radio> 单选框 用于选择一项
//<select> 下拉框 用于选择一项
// <input type="hidden"> 隐藏文本 用户不可见，但表单提交时会吧隐藏文本发送到服务器
// <input type="text" id="email">

//获取值
// var input = document.getElementById('email');
// input.value; // '用户输入的值'//获取到的是输入的值，不管该值是否提交
// <label><input type="radio" name="weekday" id="monday" value="1"> Monday</label>
// <label><input type="radio" name="weekday" id="tuesday" value="2"> Tuesday</label>
var mon = document.getElementById("monday");//捕捉mon节点
var tue = document.getElementById("tuesday");//捕捉tue节点
console.log(mon.value);//1
console.log(tue.value);//2
mon.checked;//若用户选择，则是true，反之是false

//设置值
// <input type="text" id="email">
var input = document.getElementById('email');
input.value = 'test@example.com'; // 文本框的内容已更新
//对于单选框，设置checker为false
//HTML新增了大量的标准控件，包括date、datetime、date-local、color
//<input type="color" value="#ff0000">

//提交表单
