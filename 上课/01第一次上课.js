//01热身
//数组反转
// var str ='abc123';
// console.log(str.split('').reverse().join(""));

// //02在有序的数组里找到指定的值，返回该值在数组的索引
// var arr =[1,3,5,7,9,10,11,12,14,15];
// function getIndex(arr,value){
//     var low = 0;
//     var high = arr.length-1;
//     var mid = Math.ceil((low+hight)/2);
    
//     while()
//     if(mid>value){
//         high =mid-1;

//     }else if(arr[mid]==arr[value]){
//         return mid
//     }else{
//         low = mid +1;
//     }
// };

// function binarySearch(arr,value){
//     var low =0,
//         high=arr.length-1;
//     while(low<=high){
//         var mid = parseInt((low+high)/2);
//         if(value==arr[mid]){
//             return mid;
//         }else if(value>arr[mid]){
//             low=mid+1;

//         }else if(value<arr[mid]){
//             high= mid-1;
//         }
//     }
//     return -1;
// }
// console.log( binarySearch(arr,10));

//判断数组是否为对称数组，对称形式为[a,b,c] [c,b,a]
// var arr1 = ['a','b','c','c','b','a'];
// var arr2 = ['c','b','a'];

// function test1(arr){
//     if(arr.length==0 || !(arr instanceof Array)){
//         return false;
//     }

//     for(var i=0;i<arr.length;i++){
//         if(arr[i] != arr[arr.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(test1(arr1));

// function test2(arr){
//     if(arr.length==0 || !(arr instanceof Array)){
//         return false;
//     }
//     var low =0,
//         high=arr.length-1;
//     while(true){
//         if(low>=high){
//             break;
//         }
//         if(arr[low]!=arr[high]){
//             return false;
//         }
//         low++;
//         high--;
//     }
//     return true;
// }
// console.log(test2(arr2));
// console.log(test2(arr1));


//04查询子串首次出现的位置，如abcbcxyxyxz 子串bc 结果为1

// var arr = ['a']
// var str1 ='abcbcxyxyxz';
// var str2 ='xy';

// function test(origin,sub){
//     origin = origin.split('');
//     sub=sub.split('');
//     if(origin==null || !(origin instanceof Array) || !(sub instanceof Array)){
//         return -1;
//     }
//     //查找首次出现的位置
//     for(var index =0;index<=origin.length-sub.length;index++){
//         //控制子数组和原数组从哪一位开始比较
//         for(var j=0;j<sub.length;j++){
//             if(origin[index+j] != sub[j]){
//                 break;
//             }
//             if(j == sub.length-1){
//                 return index;
//             }
//         }
//     }
//     return -1;
// }
// console.log(test(str1,str2));

//05 计算数组中，最大连续增长子序列的长度，，如[1,2,3,4,1,2,3,4,5,1,2,3]结果为5

// 1 3
// 2 3
// 3 3
// 4 2
// 5 1

// var arr = [1,2,3,4,5,1,2,4];
// var newArr=[];
// var obj ={};
// for(var i=0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//         obj[arr[i]]="abc";
//         newArr.push(arr[i]);
//     }
// }
// console.log(Object.keys(obj));

// 01 数组反转
// var arr = [1,2,3];
// var newArr=[];
// // console.log(arr.reverse())
// for(var i =arr.length-1;i>=0;i--){
//     // newArr.push(arr[i]);
//     //or
//     newArr[newArr.length]=arr[i];
// }
// console.log(newArr);

//二分查找
// var arr =[1,3,5,7,9,10,11,12,14,15];
// function binarySearch(arr,value){
//     var low = 0;
//     var high = arr.length-1;
//     // var mid = parseInt((high+low)/2);
//     while(low<=high){
//         var mid = parseInt((high+low)/2);

//         if(arr[mid]>value){
//             high = mid-1;
//         }else if (arr[mid]<value){
//             low = mid +1;
//         }else{
//             return mid;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch(arr,5));

// //判断对称数组
// var arr1 = [1,2,3,3,2,1];
// var arr2 = [1,2,3,3,2,3,1];

// function test(arr){
//     if(arr.length==0 || !(arr instanceof Array)){
//         return false;
//     }
//     for(var i=0; i<arr.length;i++){
//         if(arr[i] != arr[arr.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(test(arr1));
// console.log(test(arr2));

//04查询 子串首次出现的位置
var mas ='avacf';
var sub ='ac';
function test(mas,sub){
    mas = mas.split('');
    sub = sub.split('');
    if(mas.length ==0||sub.length==0||!(mas instanceof Array)||!(sub instanceof Array)){
        return -1;
    }
    for(var index =0; index<=mas.length-sub.length;index++){
        for(var j =0; j<sub.length;j++){
            if(mas[index+j] != sub[j]){
                break;
            }
            if(j==sub.length-1){
                return index;
            }
        }
    }
}
console.log(test(mas,sub));

//05 找出连续增长数列的个数
// var arr = [1,2,3,1,2,3,4,5,1,2];
        // function max(arr){
        //     var max =1,curMax =1;
        //     if(arr.length==0 || !(arr instanceof Array)){
        //         return 0;
        //     }
        //     for(var i =0;i<arr.length;i++){
        //         if(arr[i+1]>=arr[i]){
        //             curMax++;
        //         }
        //         if(arr[i+1]<arr[i]){
        //             max = curMax>max?curMax:max;
        //             curMax=1;
        //         }
        //     }
        //     max = curMax>max?curMax:max;
        //     return max;
        // }
        // console.log(max(arr));