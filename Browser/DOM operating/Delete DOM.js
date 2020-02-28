var self = document.getElementById('to-be-removed');//捕捉到需要删除的节点
var parent = self.parentElement;//调用该节点的父节点
var removed = parent.removeChild(self);//通过父节点删除该子节点
console.log(self === removed);//true
//例题
var parent = document.getElementById('parent');
parent.removeChild(parent.children[0]);
parent.removeChild(parent.children[1]); // <-- 浏览器报错
//注意掉坑，删除第一节点后，随后的节点序号会发生变化,length也会发生变化
{/*<ul id="test-list">*/}
    {/*<li>JavaScript</li>*/}
    {/*<li>Swift</li>*/}
    {/*<li>HTML</li>*/}
    {/*<li>ANSI C</li>*/}
    {/*<li>CSS</li>*/}
    {/*<li>DirectX</li>*/}
{/*</ul>*/}
{/*<script>*/}
{/*var list = document.getElementById('test-list');*/}
{/*var child = list.children;*/}
{/*var arr = ['JavaScript','HTML','CSS'];*/}
{/*for(var i of child){*/}
    {/*if(arr.indexOf(i.innerHTML) === -1){*/}
        {/*list.removeChild(i);*/}
    {/*}*/}
{/*}*/}
{/*</script>*/}
//大佬解答，删除目标节点组