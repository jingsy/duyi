 //去重
        // var arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 1, 2, 5, 'a', 'a', 'b'];
        // var arr2 = [1, 2, 3, 4]
        //1
        // function getUniqueArr(arr){
        //     var obj = {};
        //     for (var i=0;i<arr.length-1;i++){
        //         if(!obj[arr[i]]){
        //             obj[arr[i]]='a'
        //         }
        //     }
        //     console.log(obj);
        //     return Object.keys(obj);
        // }
        //2
        // function getUniqueArr(arr){
        //     var mySet = new Set(arr);
        //     return Array.from(mySet);
        // }
        //3
        // function getUniqueArr(arr){
        //     var newArr = arr.join('');
        //     var reg = /(.)\1+/g;
        //     return Array.from(newArr.replace(reg,"$1"));
        // }

          //方法4:异或
        // var arr = [1,2,3,4,5,5,9,1,2,3,4,5,5];
        // var result=0;
        // for(var i=0;i<arr.length;i++){
        //     result=result^arr[i];
        // }
        // console.log(result);