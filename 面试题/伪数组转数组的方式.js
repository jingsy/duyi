
function test (){
    // es5
    // 方法1. 调用Array.apply
    // var arg = Array.apply(null,arguments);

    //方法2. Array.prototype.slice.call()
    // var arg = [].slice.call(arguments);

    //方法3. 遍历arguments

    //es6
    //方法4. ...
    // var arg = [...arguments];

    //方法5. Array.from
    // var arg = Array.from(arguments);
    return arg
    
}

console.log(test(1,2,1,2,"a",1))