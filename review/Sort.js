var arr = [1, 3, 5, 2 ,4];
//冒泡排序
function sort() {
    var temp;
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<i-1-j;j++){
            if(a[j] < a[j+1]){
             temp = a[j];
             a[j] = a[j+1];
             a[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(arr.sort());
var arr = [1, 3, 5, 2 ,4];
//选择排序
function sort() {
    var temp;
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(a[i] > a[j]){
                temp = a[j];
                a[j] = a[i];
                a[i] = temp;
            }
        }
    }
}
console.log(arr.sort());
var arr = [1, 3, 5, 2 , 4];
//插入排序
function sort(arr){
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
// console.log(sort(sort(arr)));
var arr = [1, 3, 5, 2, 4];
//快排
function Sort(arr) {
    if(arr.length <= 1){
        return arr;
    }
    var Zhong = Math.floor(arr.length / 2);
    var key = arr.splice(Zhong, 1)[0];
    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] < key){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    return Sort(left).concat(key, Sort(right));
}
console.log(Sort(arr));