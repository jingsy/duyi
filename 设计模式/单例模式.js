// 单例模式
// 定义：保证一个类仅有一个实例，并提供一个访问他的全局访问点

var Test = (function(){
    var instance;
    return function(name){
        if(typeof instance ==='object'){
            return instance;
        }
        instance = this;
        this.name = name;
    }
})();

var a = new Test();
var b = new Test();

console.log(a==b);//true
