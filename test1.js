// if(2 > 1)
// {
//     x = 1;
//     y = 2;
//     z = 3;
// }
// if(x < y){
//     z = 4;
// }
// if(x > y){
//     z = 5;
// }
// alert(z);
// alert('我不想执行');
// alert('我也不想执行');
var arr = [0, 1];
var
    a = 0;
    b = 1;
    max = 5;
    n = 0;
while(n < max){
    n++;
    [a, b] = [b, a+b];
    arr.push(b);
}
console.log(arr);
