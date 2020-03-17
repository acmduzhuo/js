{/*<div id="test-div">*/}
    {/*<ul>*/}
        {/*<li><span>JavaScript</span></li>*/}
        {/*<li><span>Python</span></li>*/}
        {/*<li><span>Swift</span></li>*/}
    {/*</ul>*/}
{/*</div>*/}
//增加DOM
var ul = $('#test-div>ul');
    ul.append('<li><span>Haskell</span></li>li>');//增加HTML片段
var ps = document.createElement('li');
ps.innerHTML = '<span>Pascal</span>';//创建DOM对象
ul.append(ps);//增加DOM对象
ul.append($('#scheme'));//增加jQuery对象
ul.append(function (index, html) {
    return '<li><span>Language - '+ index + '</span></li>';//增加函数对象：要求返回一个字符串、DOM对象或者jQuery对象
});
append()//把DOM增加到最后
prepend()//把DOM增加到最前
//当需要添加的节点已经存在于HTML中，首先会将其删除，然后再增加，可以利用append()prepend()移动一个DOM节点
after()//移动到某节点之后
var js = $('#test-div>ul>li:first-child');
js.after('<li><span>Lua</span></li>');
before()//移动到某节点之前
//节点删除
remove();
var li = $('#test-div>ul>li');
li.remove();//所有的<li>全被删除
var ul = $('#test-div>ul');
var lang = ['A', 'B', 'C'];
lang.map((langs)=>
{ul.append('<li><span>langs</span></li>')});
li = ul.find(li);
li.sort((x,y)=>{
    return $(x).text()>$(y).text()?1:-1;
});