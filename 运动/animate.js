function startMove(dom,attrObj,callback){
    var timer=null, speed =null, cur =null;
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        var stop = true;
        for(var attr in attrObj){
            if(attr=='opacity'){
                cur=parseFloat(getStyle(dom,attr))*100;
            }else{
                cur=parseInt(getStyle(dom,attr));
            }
            speed = (attrObj[attr]-cur)/7;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(attr=='opacity'){
                dom.style[attr]=(cur+speed)/100; 
            }else{
                dom.style[attr]=cur+speed+'px';
            }
            if(cur!==attrObj[attr]){
                stop=false;
            }
        }
        if(stop){
            clearInterval(dom.timer);
            typeof callback=='function' && callback();
        }
    },30);
}

function getStyle(dom, attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(dom,null)[attr];
    }else{
        return dom.currentStyle[attr];
    }
}