
class Person{
    constructor(val){
        this.val = val;
    }
    say(){
        console.log('hihi');
    }
}

var p = new Person(1)

console.log(p.say());
