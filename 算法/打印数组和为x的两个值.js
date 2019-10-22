
var arr = [1, 5, 10, 11 , 13, 18, 22 ,55];
// 升序数组，如果不是的话，先排序
function test(arr,k){
    var left =0;
    var right = arr.length-1;
    var res = [];
    while(left<right){
        if(arr[left]+arr[right]>k){
            right--
        }else if(arr[left]+arr[right]<k){
            left++
        }else{
            res.push(arr[left],arr[right]);
            left++;
            right--
        }
    }
    return res
}

console.log(test(arr,23))