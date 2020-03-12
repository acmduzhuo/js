{/*<ul className="lang">*/}
    {/*<li className="js dy">JavaScript</li>*/}
    {/*<li className="dy">Python</li>*/}
    {/*<li id="swift">Swift</li>*/}
    {/*<li className="dy">Scheme</li>*/}
    {/*<li name="haskell">Haskell</li>*/}
{/*</ul>*/}
//find某个节点的所有子节点中查找
var ul = $('ul.lang');//获取到<ul>
var dy = ul.find('.dy'); //获取到JavaScript Python Scheme
var swf = ul.find('#swift');//获取到Swift
var hsk = ul.find('[name=haskell');//获取到Haskell
//从当前节点向上找
var swf = $('#swift');//获取到Swift
var parent = swf.parent();//获取到Swift上层节点<ul>
var a = swf.parent('.red');//获得Swift的上层节点<ul>, 同时传入过滤条件。如果ul不符合条件，返回空jQuery对象
//上一级和下一级
var swift = $('#swift');
var swift.next();//Scheme
swift.next('[name=haskell]');//空的jQuery对象，下一个元素不符合条件
swift.prev();//Python
swift.prev('.dy');//符合条件，鬼知道为啥要用（）筛选条件
//过滤filter()过滤掉不符合选择器的节点，不符合（）内条件的都要去除
var langs = $('ul.lang li');//拿到JavaScript, Python, Swift, Scheme和Haskell
var a = langs.filter('.dy');//拿到JavaScript, Python, Scheme
var langs = $('ul.lang li');// 拿到JavaScript, Python, Swift, Scheme和Haskell
langs.filter(function () {
    return this.innerHTML.indexOf('S') === 0;// 返回S开头的节点
});// 拿到Swift, Scheme
var langs = $('ul.lang li');
var arr = langs.map(function () {
    return this.innerHTML;
}).get();// 用get()拿到包含string的Array：['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']
var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var js = langs.first(); // JavaScript，相当于$('ul.lang li:first-child')
var haskell = langs.last(); // Haskell, 相当于$('ul.lang li:last-child')
var sub = langs.slice(2, 4); // Swift, Scheme, 参数和数组的slice()方法一致
json = {};
json.name = $('input[name=name]')[0].value;
json.email = $('input[name=email]')[0].value;
json.password = $('input[name=password]')[0].value;
json.gender = $('input[name=gender]').filter(function () {
    return this.checked;
})[0].value === 'm' ? 'Male' : 'Female';
json.city = $('select[name=city] option').filter(function () {
    return this.selected;
})[0].innerText;
json = JSON.stringify(json, null, ' ');