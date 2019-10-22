// server - front data  personArr
var personArr = [
    {name: '王港', src: './src/img/3.png', des: '颈椎不好', sex: 'm', age: 18}, 
    {name: '刘莹', src: './src/img/5.png',des: '我是谁', sex: 'f', age: 23}, 
    {name: '王秀莹', src: './src/img/4.png', des: '我很好看', sex: 'f', age: 25}, 
    {name: '刘金雷', src: './src/img/1.png', des: '你没有见过陌生的脸', sex: 'm', age: 15}, 
    {name: '刘飞翔', src: './src/img/2.png', des: '瓜皮刘', sex: 'm', age: 20}
];

// dom 感受事件发生 => 更改状态 => 影响视图
// 需求的增加 事件越来越多  状态越来越多  管理状态 合并行为

//initial variable
var oUl = document.getElementsByTagName('ul')[0];
var oInput = document.getElementsByTagName('input')[0];
var filterText = '';
var filterSex = 'a';

//数据渲染页面
function RenderPage(data){
    //遍历
    var htmlStr = '';
    oUl.innerHTML='';
    data.forEach(function(ele,index,self){
        htmlStr += '<li><img src="'+ ele.src+'"><p class="name">'+ele.name+'</p><p class="des">'+ele.des+'</p></img></li>'
        // console.log(htmlStr);
    });
    oUl.innerHTML=htmlStr;
}
RenderPage(personArr);

//添加行为
oInput.oninput = function(){
    filterText = this.value;
    var newArr = filterArrByText(personArr,filterText);
    var newArr2 = filterArrBySex(newArr,filterSex);
    RenderPage(newArr2);
}

//根据文本来过滤函数
function filterArrByText(data,text){
    if(!text){
        return data;
    }else{
        return data.filter(function(ele,index){
            //text存在与ele.name才保留
           return ele.name.indexOf(text) != -1;
        });
    }
}

//btn style
var oBtnArr = Array.prototype.slice.call(document.getElementsByClassName('btn'),0);
var lastActiveBtn = oBtnArr[2];
oBtnArr.forEach(function(ele,index,self){
    ele.onclick = function(){
        changeActive(this);
        filterSex = this.getAttribute("sex");
        var newArr = filterArrBySex(personArr,filterSex);
        var newArr2 = filterArrByText(newArr,filterText);
        // filterArrByText(newArr,filterText);
        RenderPage(newArr2);
        
    }
});

function changeActive(curActiveBtn){
    curActiveBtn.className = 'btn active';
    lastActiveBtn.className='btn';
    lastActiveBtn=curActiveBtn;
}

//根据性别过滤 sex
function filterArrBySex(data, sex){
    if(sex=='a'){
        return data;
    }else{
        return data.filter(function(ele,index,self){
                return ele.sex == sex;
        });
    }
}
