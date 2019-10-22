    //取出数组最大的两个数
      var score = [
            { 'name': '学生1', 'score': 96 },
            { 'name': '学生2', 'score': 95 },
            { 'name': '学生3', 'score': 77 },
            { 'name': '学生4', 'score': 82 },
            { 'name': '学生5', 'score': 47 },
            { 'name': '学生6', 'score': 96 },
            { 'name': '学生7', 'score': 65 },
            { 'name': '学生8', 'score': 70 }
        ]
        function getMaxTwoNum(arr){
            var obj = {};
            arr.sort(function(a,b){
                return b.score-a.score;
            })
            return [arr[0],arr[1]];
        }