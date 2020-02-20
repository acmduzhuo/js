// var now = new Date();
// console.log(now+8);//获取当前详细时间，精确到Thu Feb 20 2020 18:45:44 GMT+0800 (GMT+08:00)8，记得+8
// console.log(now.getFullYear());//获取当前年份
// console.log(now.getMonth());//获取当前月份，js中月份是从0到11
// console.log(now.getDate());//获取当前日份
// console.log(now.getDay());//获取当前星期几
// console.log(now.getHours());//获取当前小时
// console.log(now.getMinutes());//获取当前分钟
// console.log(now.getSeconds());//获取当前秒
// console.log(now.getMilliseconds());//获取当前毫秒
// console.log(now.getTime());//获取当前以number表示的时间戳
// var d = new Date(2020, 2, 20, 18, 51, 20, 123);//设定时间，依次为年月日时分秒毫秒
// console.log(d);
// console.log(d.getMilliseconds());
// var d = Date.parse('2020-02-20T19:05:00.875+08:00');
// console.log(d);//ISO 8601格式，但返回的是一个时间戳
// var dd = new Date(d);//需要转换为一个Date
// console.log(dd.getMonth());
// console.log(dd.toLocaleString());//本地时区
// console.log(dd.toUTCString());//UTC时区
//项目中读取数据库的时间戳，再用JS来转换
if(Date.now){
    console.log(Date.now());
}else{
    console.log(new Date().getTime());
}