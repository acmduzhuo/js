`use strict`;
// function ajax(s) {
//     var username = $('#username');
//     username.val(username.val() + '\n' +s);
// }
// $('#username').val('');
// var jqxhr = $.ajax('/api/',{
//     dataType: 'json'
// }).done(function (data) {
//     ajaxLog('成功，收到的数据：'+JSON.stringify(data));
// }).fail(function (xhr, status) {
//     ajaxLog('失败：'+xhr.status+'原因：'+status);
// }).always(function () {
//     ajaxLog('请求完成：无论成功或失败都会调用');
// });
// //get方法
// var jqxhr = $.get('api/',{
//     name: '',
//     check: 1
// });
// //post方法
// var jqxhr = $.post('api',{
//     name:'',
//     check: 1
// });
// //与get区别，第二个参数默认序列化不同
// //getJSON
// var jqxhr = $.getJSON('api/',{
//     name: '',
//     check: 1,
//     json:'callback'
//     //让jQuery实现JSONP跨域加载数据
// }).done(function (data) {
//     //data解析为JSON对象
// });
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        if(xhr.status>=200 && xhr.status<300 || xhr.status === 304){
            console.log(xhr.responseText);
            console.log(xhr.responseXML);
        } else {
            console.error('error:::', xhr.status);
        }
    }
};
xhr.open("get", "json", true);
xhr.setRequestHeader("MyHeader", "MyValue");
xhr.send(null);