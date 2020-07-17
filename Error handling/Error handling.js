//try catch finally处理错误
// var r1, r2, s = null;
// try{
//     r1 = s.length;//错误
//     r2 = 100;
// }catch(e){
//     console.log('出错了：'+ e);
// }finally {
//     console.log('finally');
// }
// console.log('r1 = ' + r1);
// console.log('r2 = ' + r2);
//catch finally都是不必须的
var r, n, s;
try {
    s = prompt('请输入一个数字');
    n = parseInt(s);
    if (isNaN(n)) {
        throw new Error('输入错误');
    }
    // 计算平方:
    r = n * n;
    console.log(n + ' * ' + n + ' = ' + r);
} catch (e) {
    console.log('出错了：' + e);
}
