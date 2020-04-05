show()//从左上角开始显示DOM元素
hide()//从左上角开始隐藏DOM元素
toggle()//反选以上操作
slideUp()//垂直收缩DOM元素
slideDown()//垂直展开DOM元素
slideToggle()//反选以上垂直操作
fadeIn()//淡入
fadeOut()//淡出
fadeToggle()//反选淡入操作
animate()//自定义动画
delay()//实现暂停

tr.fadeOut(1000,function () {
    tr.remove();
});