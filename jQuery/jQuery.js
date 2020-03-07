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
//按属性查找
var a = $('[name=email]');//找出<name="email">
var icons = $('[name^=icon]');//s所有name属性值以icon开头的DOM，例如: name="icon-1", name="icon-2"
var name = $('[name$=with]');// 找出所有name属性值以with结尾的DOM,name="startswith", name="endswith"
var icons = $([name$="icon-"]);//找出所有class包含至少一个以'icon-'开头的DOM，例如: class="icon-clock", class="abc icon-home"
//组合查找
var email = $('input[name=email]');//只会找出<input name="email">
var tr = $('tr.red');//只会查找到<tr class="red"></tr>
//多项选择器
$('p,div')//把<p>和<div>都选出来
$('p.red,p.green')//把<p class="red">和<p class="green>都选出来
selected = $(#'para-1');
selected = $('.color-red.color-green');
selected = $('.color-red');
selected = $('[class^=color-]');
selected = $('input(name=name)');
selected = $('input(name=name),input(name=email)');