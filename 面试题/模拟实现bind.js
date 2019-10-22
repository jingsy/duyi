//

Function.prototype.newBind = function(target){
    //target改变返回函数执行的this指向
    var self = this;
    //拿到需要传入的参数
    var arg = [].slice.call(arguments,1);
    //建立一个临时函数实现寄生继承，
    var temp =function(){};
    
    //执行bind后要返回的函数
    var f = function(){
        //拿到返回后的函数的参数，可以将其进行拼接，实现参数拼接功能
        var _args=[...arguments];
        return self.apply(this instanceof temp? this:(target||window),arg.concat(_args));
    }
    //为了实现new 后仍然能找到原构造函数的功能，利用了继承
    temp.prototype=self.prototype;
    f.prototype = new temp();
    
    //bind执行后要返回一个函数
    return f;
}

var a =1;
function show (x,y,z){
    console.log(this.a,x,y,z);
}
var obj ={
    a:2,
}

var newShow = show.newBind(obj,1,2);
// newShow(4)

console.log(new newShow().constructor);
