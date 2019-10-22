//一维数组转二维数组

var arr =[1,2,3,4];
    function getArr(arr, n) {
            var innerArr = [];
            var lineNum = arr.length / n
            for (var i = 0; i < lineNum; i++) {
                var temp = arr.slice(i * n, i * n + n)
                innerArr.push(temp);
            }
            return innerArr;
        }

console.log(getArr(arr,2));   //[ [ 1, 2 ], [ 3, 4 ] ]

