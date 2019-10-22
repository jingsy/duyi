var obj ={
    1:'a',
    b:'c'
  }
  
  Object.prototype.say='a'
  
  console.log(Object.keys(obj)); //[1,b]

  console.log('------------------');
  
  for(var prop in obj){
      console.log(prop); // 1, b ,say
  }
  
  //区别：使用 for in 循环遍历对象的属性时，原型链上的所有属性都将被访问：
  //Object.keys() 方法会返回一个由给定对象的自身可枚举属性组成的数组，不会遍历原型😯