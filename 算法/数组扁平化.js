var arr = [6, -3, -2, 7, -15, 1, 2, 2, [1, 2, [55]]];
function flat(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr= newArr.concat(flat(arr[i]))
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(flat(arr));

//方法2
arr.join().split(',')

//方法3
arr.toString().split(',')

 // 要求根据参数展开数组
  // var arr = [1,2,[3,4],[5,[6,7]]];
           
        //     // flatten (arr,1)=> [1,2,3,4,5,[6,7]]
        // function flatten(arr, times, cur) {
        //     var result = [];
        //     for (var i = 0; i < arr.length; i++) {
        //         if (Array.isArray(arr[i]) && cur++ < times) {
        //             result = result.concat(flatten(arr[i], times, cur))
        //         }
        //         else {
        //             result.push(arr[i]);
        //         }
        //     }
        //     return result;
        // }