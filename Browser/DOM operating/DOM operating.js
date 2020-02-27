//document.getElementById('test') 返回ID为test的节点
//document.getElementById('test-table').getElementsByTagName('tr') 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
//document.getElementById('test-div').getElementsByClassName('red'); 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
//children 节点下所有直属子节点
// firstElementChild | lastElementChild 第一个节点和最后一个节点

document.querySelector('#ql') //通过querySelector获取ID为q1的节点
document.querySelectorAll('div.highlighted > p') //通过querySelectorAll获取q1节点内的符合条件的所有节点：