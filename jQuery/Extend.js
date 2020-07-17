//统一写法
$.fn.highlight1 = function () {
    this.css('background', 'fffceb').css('color','#d85030');
    return this;
}
//调用
$('test-highlight1 span').highlight1();
//调用可链式写法
$('span hl').highlight1().slideDown();
//指定参数
$.fn.highlight2 = function (option) {
    var bgcolor = option && option.backgroundColor || '#fffceb';//默认参数
    var color = option && option.color || '#d85030';
    this.css('backgroundColor', bgcolor).css('color', color);
    return this;
};
//调用
$('').highlight2({
    backgroundColor: '#00a8e6',
    color:'#ffffff'
});
//默认值的另一种处理方法
//调用
var opts = $.extend({},{
    backgroundColor : '',
    color : ''
}, options);
//设置缺省值，以便于将来直接调用
$.fn.highlight = function (options) {
    var opt = $.extend({},$.fn.highlight.defaults,options);
    this.css('backgroundColor' , opts.backgroundColor).css('color', opts.color);
    return this;
}
$.fn.highlight.defaults = {
    color : '',
    backgroundColor : ''
}

