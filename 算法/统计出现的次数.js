 //返回出现的次数
         function getCount(arr){
            var obj = {};
            for (var i=0;i<arr.length;i++){
                if(!obj[arr[i]]){
                    obj[arr[i]]=1;
                }else{
                    obj[arr[i]]++;
                }
            }
            console.log(obj);
            //如果问怎么得到统计次数最多的那个
            var max =0;
            var maxStr=null;
            for(var key in obj){
                if(max<obj[key]){
                    max = obj[key];
                    maxStr = key;
                }
            }
            console.log(maxStr + '出现了 '+ max + '次');
        return obj;
        }