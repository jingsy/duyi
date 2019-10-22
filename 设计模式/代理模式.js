// 代理模式
// 定义：为一个对象提供一种代理以控制这个对象的访问
// 代理对象起到类似中介的作用，会增加一些功能（如：校验，合并等的
// 也会去掉一些原有对象的功能

// 虚拟代理：把一些开销很大的对象，延迟到其真正需要
// 安全代理：控制真是对象的访问权限
// 远程代理：一个对象将不同空间的对象进行局部代理
// 智能代理：增加额外服务

// 虚拟代理：图片加载 文件上传

var mrDeng = {
    sendFlower: function(target){
        var flower='sunflower'
        target.receiveFlower(flower);
    }
}

var chengProxy = {
    proxyFlower: function(target){
        this.listenMood(target,function(){
            mrDeng.sendFlower(target);
        });
    },
    listenMood: function(target,cb){
        var timer = setInterval(function(){
            if(target.mood){
                cb();
                clearInterval(timer);
            }
        },300)
    }
}

var goddess = {
    mood: null,
    receiveFlower: function(flower){
        this.mood?console.log('ok') : console.log('get out');
    },
    changeMood: function(){
        this.mood = Math.random() > 0.5;
        // console.log(this.mood);
    },
    createMood: function(){
        var self = this;
        self.changeMood();
        setInterval(function(){
            self.changeMood()
        },400)
    }
}
// goddess.createMood(); // 给女神送花，但是心情是随机的，

mrDeng.sendFlower(goddess);
chengProxy.proxyFlower(goddess); //监听心情，代理送花这个动作，现在只有心情好才会送花