//$() 为什么返回一个对象？
//jquery库自己封闭了自己的作用域 他其实是一个大的闭包
(function () {
    function jQuery(selector) {
        return new jQuery.prototype.init(selector);
    }
    jQuery.prototype.init = function (selector) {
        //⚠️注意：只能传id和class现在
        // this = {};
        // 选出 dom 并且包装成jQuery对象  返回
        // id class
        this.length = 0;
        // null undefined dom
        if (selector == null) {
            return this;
        }

        if (typeof selector == 'string' && selector.indexOf('.') != -1) {
            var dom = document.getElementsByClassName(selector.slice(1));
        } else if (typeof selector == 'string' && selector.indexOf('#') != -1) {
            var dom = document.getElementById(selector.slice(1));
        }
        //如果是dom对象
        if (selector instanceof Element || dom.length == undefined) {
            this[0] = dom || selector;
            this.length++;
        } else {
            // 基础铺垫：通过上面class或者id获得的dom有很多个 把每一个都塞到this里去
            for (var i = 0; i < dom.length; i++) {
                this[i] = dom[i];
                this.length++
            }
        }
        //new了之后自动返回this
        // return this;
    }
    //this是谁呢，谁调用 this就是谁 比如$('.demo')，this就是'.demo'
    jQuery.prototype.css = function (config) {
        //解析样式对象
        for (var i = 0; i < this.length; i++) {
            for (var attr in config) {
                this[i].style[attr] = config[attr];
            }
        }
        //为什么要return this,这样后面就可以接着链式调用了
        return this;
    }

    jQuery.prototype.pushStack = function (dom) {
        //dom 是 newObj
        //如果不是一个jq对象
        if (dom.constructor != jQuery) {
            dom = jQuery(dom);
        }
        dom.prevObject = this;

        return dom;
    }
    jQuery.prototype.get = function (num) {
        // if(num == null){
        //     return [].slice.call(this,0);
        // }else{
        //     if(num>=0){
        //         return this[num];
        //     }else{
        //         return this[num+this.length];
        //     }
        // }
        //return的是原生 这个方法返回的就是原生
        return num != null ? (num >= 0 ? this[num] : this[num + this.length]) : [].slice.call(this, 0);
    }

    jQuery.prototype.eq = function (num) {
        var dom = num != null ? (num >= 0 ? this[num] : this[num + this.length]) : null;
        // return jQuery(dom);
        return this.pushStack(dom);
    }

    jQuery.prototype.add = function (selector) {
        //获得当前的obj
        var curObj = jQuery(selector);
        //获得最开始的obj，这个obj是经过了jQ的init选择后return出来的this
        var baseObj = this;
        //让curOBj 和 baseObj割成一个新的jQ对象
        var newObj = jQuery();

        //通过两个for loop把对象分别塞到newOBj里面 
        for (var i = 0; i < curObj.length; i++) {
            newObj[newObj.length++] = curObj[i];
        }
        for (var i = 0; i < baseObj.length; i++) {
            newObj[newObj.length++] = baseObj[i];
        }

        //
        this.pushStack(newObj);
        return newObj;
    }
    jQuery.prototype.end = function () {
        return this.prevObject;
    }

    jQuery.prototype.myOn = function (type, handle) {
        for (var i = 0; i < this.length; i++) {

            if (!this[i].cacheEvent) {
                this[i].cacheEvent = {};
            }
            if (!this[i].cacheEvent[type]) {
                this[i].cacheEvent[type] = [handle];
            } else {
                this[i].cacheEvent[type].push(handle);
            }
        }
    }

    //暂时只能使用自定义事件
    jQuery.prototype.myTrigger = function (type) {
        var params = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
        var self = this;
        for (var i = 0; i < this.length; i++) {
            if (this[i].cacheEvent[type]) {
                this[i].cacheEvent[type].forEach(function (ele, index) {
                    ele.apply(self, params);
                });
            }
        }
    }

    jQuery.prototype.myQueue = function () {
        var queueObj = this;
        var queueName = arguments[0] || 'fx';
        var addFunc = arguments[1] || null;
        var len = arguments.length;

        // 获取队列
        if (len == 1) {
            return queueObj[0][queueName];
        }

        // queue dom {chain: } 添加队列 或 往已有队列中添加内容
        queueObj[0][queueName] == undefined ? queueObj[0][queueName] = [addFunc] : queueObj[0][queueName].push(addFunc);
        return this;
    }

    jQuery.prototype.myDequeue = function (type) {
        var self = this;
        var queueName = arguments[0] || 'fx';
        var queueArr = this.myQueue(queueName);
        var currFunc = queueArr.shift();
        if (currFunc == undefined) {
            return;
        }
        var next = function () {
            self.myDequeue(queueName);
        }
        currFunc(next);
        return this;
    }

    jQuery.prototype.myDelay = function (duration) {
        var queueArr = this[0]['fx'];
        queueArr.push(function (next) {
            setTimeout(function () {
                next();
            }, duration);
        });
        return this;
    }


    jQuery.prototype.myAnimate = function (json, callback) {
        var len = this.length;
        var self = this;
        // 最后添加到队列里的内容函数

        var baseFunc = function (next) {
            var times = 0;
            for (var i = 0; i < len; i++) {
                startMove(self[i], json, function () {
                    times++;
                    if (times == len) {
                        callback && callback();
                        next();
                    }
                });
            }
        }

        this.myQueue('fx', baseFunc);

        if (this.myQueue('fx').length == 1) {
            this.myDequeue('fx');
        }


        function getStyle(obj, attr) {
            if (obj.currentStyle) {
                return obj.currentStyle[attr];
            } else {
                return window.getComputedStyle(obj, false)[attr];
            }
        }

        function startMove(obj, json, callblack) {
            clearInterval(obj.timer);
            var iSpeed;
            var iCur;
            var name;
            obj.timer = setInterval(function () {
                var bStop = true;
                for (var attr in json) {
                    if (attr === 'opacity') {
                        name = attr;
                        iCur = parseFloat(getStyle(obj, attr)) * 100;
                    } else {
                        iCur = parseInt(getStyle(obj, attr));
                    }
                    iSpeed = (json[attr] - iCur) / 7;
                    if (iSpeed > 0) {
                        iSpeed = Math.ceil(iSpeed);
                    } else {
                        iSpeed = Math.floor(iSpeed);
                    }
                    if (attr === 'opacity') {
                        obj.style.opacity = (iCur + iSpeed) / 100;
                    } else {
                        obj.style[attr] = iCur + iSpeed + 'px';
                    }
                    if (json[attr] - iCur !== 0) {
                        bStop = false;
                    }
                }
                if (bStop) {
                    clearInterval(obj.timer);
                    callblack();
                }
            }, 30);
        }

        return this;
    }



    jQuery.myCallbacks = function () {
        // 'once' 'memory' 'once memory' null
        // 存储参数
        var options = arguments[0] || '';
        // 通过add 来加入的方法
        var list = [];

        // 记录当前要执行的函数的索引
        var fireIndex = 0;

        // 记录是否有被fire过
        var fired = false;

        // 实际参数列表
        var args = [];

        var fire = function () {
            for (; fireIndex < list.length; fireIndex++) {
                list[fireIndex].apply(window, args);
            }
            if (options.indexOf('once') != -1) {
                list = [];
                fireIndex = 0;
            }
        }


        return {
            add: function (func) {
                list.push(func);
                if (options.indexOf('memory') != -1 && fired) {
                    fire();
                }
                return this;
            },
            fire: function () {
                fireIndex = 0;
                args = arguments;
                fired = true;
                fire();
            }
        }
    }


    jQuery.prototype.init.prototype = jQuery.prototype;
    window.$ = window.jQuery = jQuery;
})();