{/*<ul id="test-ul">*/}
    {/*<li class="js">JavaScript</li>*/}
    {/*<li name="book">Java &amp; JavaScript</li>*/}
{/*</ul>*/}
//text()和html()方法分别获取节点的文本和原始HTML文
var j1 = $('#test-ul li.js');
var j2 = $('#test-ul li[name=book]');
j1.html('<span style="color:red">JavaScript</span>');
j2.text('Java EMAJavaScript');
$('#test-ul li').text('JS');//ul下的所有节点会变为一个JS
$('#not-exist').text('Hello');//即使不存在该节点，也不会报错
var arr = $('#test-css li.dy>span').css('background-color', '#ffd351').css('color', 'red');//修改css格式，第一个参数表示需要修改的属性，第二参数表示需要修改的性质，如果需要多次修改，通过.实现指令连接
var div = $('#test-div');
div.css('color');//获取颜色属性
div.css('color', '#336699');//修改颜色属性
div.css('color', '');//清除颜色属性
//除此之外还有background-color backgroundColor
div.hasClass('highlight');//判断class是否具有highlight
div.addClass('highlight');//增加highlight
div.removeClass('highlight');//删除highlight
var a = $('a[target=_blank]');
a.hihe();//隐藏
a.show();//显示
//获取DOM信息
$(window).width();//可视窗口大小
$(window).height();
$(document).width();//HTML文档大小
$(document).height();
var div = $('#test-css');//定义某个div大小
div.width()//查看div的大小
div.height()
div.width(400)//设置CSS属性，400px
div.height('200px')//设置CSS属性
//操作节点属性
//<div id="test-id" name="Test" star="1">...</div>
var div =$('#test-div');
div.attr('data');//不存在该属性
div.attr('name');//'Test'
div.attr('name', 'Hello')//div的name属性
div.removeAttr('name')//删除name属性
div.attr('name');//undefined
{/*<input id="test-radio" type="radio" name="test" checked value="1">*/}
{/*<input id="test-radio" type="radio" name="test" checked="checked" value="1">*/}
//H5规定有一种属性在DOM中可以没有属性，只有存在与否，如checked、selected，使用prop即可处理
var radio = $('#test-radio');
    radio.attr('checked');//checked
    radio.prop('checked');//true
var radio = $('#test-radio');
radio.is(':checked');//true
//操作表单，对于表单元素，jQuery对象统一提供了val()方法获取和设置对应的value属性

/*
    <input id="test-input" name="email" value="">
    <select id="test-select" name="city">
        <option value="BJ" selected>Beijing</option>
        <option value="SH">Shanghai</option>
        <option value="SZ">Shenzhen</option>
    </select>
    <textarea id="test-textarea">Hello</textarea>
*/
var
    input = $('#test-input'),
    select = $('#test-select'),
    textarea = $('#test-textarea');
input.val(); // 'test'
input.val('abc@example.com'); // 文本框的内容已变为abc@example.com
select.val(); // 'BJ'
select.val('SH'); // 选择框已变为Shanghai
textarea.val(); // 'Hello'
textarea.val('Hi'); // 文本区域已更新为'Hi'