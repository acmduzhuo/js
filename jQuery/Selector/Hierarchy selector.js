// <!-- HTML结构 -->
// <div class="testing">
//     <ul class="lang">
//         <li class="lang-javascript">JavaScript</li>
//         <li class="lang-python">Python</li>
//         <li class="lang-lua">Lua</li>
//     </ul>
// </div>
//层级选择器
$('ul.lang li.lang-javascript');//<li className="lang-javascript">JavaScript</li>
$('div.testing li.lang-javascript'); // [<li class="lang-javascript">JavaScript</li>]
$('ul.lang li');//所有的<li>节点
//缩小了选择范围，先捕捉到父节点，然后找到子节点
$('form[name=upload] input');//限定在name属性为upload的表单里
$('form.test p input');//<form class=test><p> <input></p></test>
//子选择器 限定了层级关系必须是父子关系，不可以越级
$('ul.lang>li.lang-javascript');//筛选出JavaScript
//过滤器 附加在选择器上，
$('ul.lang li');//可以确定的三个节点
$('ul.lang li:first-child');//仅选出JavaScript
$('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
$('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
$('ul.lang li:nth-child(odd)');// 选出序号为奇数的元素
//表单相关
:input//可以选择<input>,<textarea>,<select>,<button>
:file//可以选择<input type="file">,同input[type=file]
:checkbox//可以选择复选框，同input[type=checkbox]
:radio //可以选择单选框，同input[type=radio]
:focus //可以选择当前输入焦点的元素，把光标放到<input>上，$('input:focus')
:checked //当前用户所勾选的单选框和复选框，$('input[type=radio]:checked')
:enabled //可以选择正常输入的<input>和<select>，也就是没有灰掉的输入，可以正常启用的<input><button>元素
:disabled //与enabled正相反
$('dis:visible')//所有可见的div
$('dis:hidden')//所有隐藏的div

