var p = document.getElementById('p-id');//获取id为p-id的节点
p.innerHTML = 'ABC';//<p id='p-id'>ABC</p>
p.innerHTML = 'ABC <span style="color:red">RED</span>XYZ';//内部结构被修改
p.innerText = '<script>alert("Hi")</script>';//innerText不返回隐藏文本，textContent返回全部文本
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';
//修改CSS也是经常需要的操作
<!-- HTML结构 -->
<div id="test-div">
    <p id="test-js">javascript</p>
    <p>Java</p>
    </div>
`use strict`;
var js= document.getElementById('test-js');
js.innerText = 'JavaScript';
js.style.color = '#ff0000';
js.style.fontWeight = 'bold';
