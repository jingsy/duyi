// 2. # 现将英汉词典导入到数组array=[...,mate,...meat,...meta,......team,.....]中，
// 找出所有的同构词 # 你需要输出一个二维数组[..., [mate, meat, meta, ...], ...] 


var arr = ['mate', 'meat', 'tea', 'meta', 'eat', 'team']
// arr.sort();
console.log(test(arr))
function test(arr) {
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        var charArr = [];
        charArr[i]=arr[i].split('')
        charArr[i].sort()
        if(!map.has(charArr[i].toString())){
            map.set(charArr[i].toString(),[])
        }else{
            map.get(charArr[i].toString()).push(arr[i])
        }
    }
    return [...map.values()]
}


