 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

 var t1 =TreeNode(1);
 var t2 =TreeNode(2);
 var t3 =TreeNode(3);
 var t4 =TreeNode(4);
 var t5 =TreeNode(5);
 t1.left = t2;
t1.right = t3;
t2.left = t4;
t2.right =t5;


// 递归
//先序遍历
function  perOrderRecursive(root) {
    if(!root){
        return null
    }
    console.log(root.val)
    perOrderRecursive(root.left);
    perOrderRecursive(root.right);
}
//中序遍历
function  midOrderRecursive(root) {
    if(!root){
        return null
    }
    perOrderRecursive(root.left);
    console.log(root.val)
    perOrderRecursive(root.right);
}
//后序遍历
function  lastOrderRecursive(root) {
    if(!root){
        return null
    }
    perOrderRecursive(root.left);
    perOrderRecursive(root.right);
    console.log(root.val)
}

// 非︿(￣︶￣)︿递归


function preOrder(root) {
    if(!root){
        return null
    }
    var stack = [];
    var tmpNode = root;
    while (tmpNode || stack){
        while (tmpNode){
            console.log(node.val);
            stack.push(tmpNode)
            tmpNode = tmpNode.left
        }
        var node = stack.pop();
        tmpNode = node.right;
    }
}

function midOrder(root) {
    if(!root){
        return null
    }
    var stack = [];
    var tmpNode = root;
    while (tmpNode || stack){
        while (tmpNode){
            stack.push(tmpNode)
            tmpNode = tmpNode.left
        }
        var node = stack.pop();
        console.log(node.val);
        tmpNode = node.right;
    }
}