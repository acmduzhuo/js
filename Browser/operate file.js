//<input type="file">
//唯一上传文件的控件
var f = document.getElementById('test-file-upload');//捕捉该节点
var filename = f.value; // 'C:\fakepath\test.png'//节点赋值
if (!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.gif'))) {//判断条件
    alert('Can only upload image file.');
    return false;
}