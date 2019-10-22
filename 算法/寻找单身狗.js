 //寻找单身狗
        //方法1:set
        // var arr = [1,2,3,4,5,1,2,3,4,5,5];
        // var set = new Set();
        // for(var i=0;i<arr.length;i++){
        //     if(set.has(arr[i])){
        //         set.delete(arr[i]);
        //     }else{
        //         set.add(arr[i]);
        //     }
        // }
        // console.log(...set);

        //方法2
        // var arr = [1,2,3,4,5,1,2,3,4,5,5];
        // var obj = {};
        // for(var i=0;i<arr.length;i++){
        //     if(obj[arr[i]]){
        //         delete obj[arr[i]];
        //     }else{
        //         obj[arr[i]]="abc";
        //     }
        // }
        // console.log(...Object.keys(obj));