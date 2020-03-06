//$('#test') = document.getElementById('test')
{/*<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>//在head文件引用*/}
{/*console.log('jQuery版本：'+$.fn.jquery);*/}
//console.log($ === jQuery);
//jQuery与Dom相互转化
var div = $('#abc');// 查找<div id="abc">:
var div = $('#abc'); // jQuery对象
var divDom = div.get(0); // 假设存在div，获取第1个DOM元素
var another = $(divDom); // 重新把DOM包装为jQuery对象
var ps = $('p');//返回所有的<p>节点
console.log(ps.length);//输出<p>节点的个数
var a = $('.red');// 所有节点包含`class="red"`都将返回
var a = $('.red.green'); // 注意没有空格！
// 符合条件的节点：
// <div class="red green">...</div>
// <div class="blue green red">...</div>
var a = $('[name=email]');
