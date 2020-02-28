//两种办法插入节点
//appendChild
//把一个子节点添加到父节点的最后一个子节点
{/*<p id="js">JavaScript</p>*/}
{/*<div id="list">*/}
    {/*<p id="java">Java</p>*/}
{/*<p id="python">Python</p>*/}
{/*<p id="scheme">Scheme</p>*/}
{/*</div>*/}
// var
//     js = document.getElementById('js'),//捕捉到<p id="js">JavaScript</p>
//     list = document.getElementById('list');//捕捉list
// list.appendChild(js);//将捕捉到的js添加到list的末尾
// var haskell = document.createElement('p');//设置一个新的节点，声明节点类型
// haskell.id = 'haskell';//设置该节点的ID
// haskell.innerText = 'Haskell';//设置该节点的值
// list.appendChild(haskell);//增加到末尾的节点
// var d = document.createElement('style');//设置标签类型
// d.setAttribute('type', 'text/css');//type="text/css"
// d.innerHTML = 'p { color: red }';//设置该节点的值
// document.getElementsByTagName('head')[0].appendChild(d);//该结点插入位置
// //<style type="text/css">p { color: red }</style>
//
// parentElement.insertBefore(newElement, referenceElement);//将newElement插入到parentElement子节点下的referenceElement节点前
// var
//     list = document.getElementById('list'),
//     ref = document.getElementById('python'),
//     haskell = document.createElement('p');
// haskell.id = 'haskell';
// haskell.innerText = 'Haskell';
// list.insertBefore(haskell, ref);//实例
// var
//     i, c,
//     list = document.getElementById('list');
// for (i = 0; i < list.children.length; i++) {
//     c = list.children[i]; // 拿到第i个子节点
// }//实例
// var children_arr = [...document.getElementById('test-list').children]//类数组转数组
// var sorted = children_arr.map(x=>x.innerText).sort();//节点转节点值
// children_arr.map((x,i)=>{x.innerText=sorted [i];});//膜拜前排大佬所写的按照节点值字符排序代码