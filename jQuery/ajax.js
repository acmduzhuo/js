`use strict`;
function ajaxLog(s){
    var username = $('#username');
    username.val(username.val()+'\n'+s);
}
$('#username').val('');
var jqxhr = $.ajax('/api/getInfo',{
   dataType: 'json'
}).done(function(data){
    ajaxLog('成功，收到数据：'+JSON.stringify(data));
}).fail(function (xhr,status) {
    ajaxLog('失败：' + xhr.status+',原因：'+status);
}).always(function () {
    ajaxLog('请求完成：无论成功或失败都会调用');
});