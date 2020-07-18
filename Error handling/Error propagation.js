'use strict';
function main(s) {
    console.log('Begin main()');
    try{
        foo(s);
    }catch (e) {
        console.log('出错了', + e);
    }
    console.log('ENG main()');
}

function foo(s) {
    console.log('Begin foo()');
    bar(s);
    console.log('ENG foo()');
}

function bar(s) {
    console.log('Begin bar()');
    console.log('length = ', s.length);
    console.log('ENG bar()');
}

main(null);