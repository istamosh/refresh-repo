// Example uses difference of arrow function
// Arrow function redefines its function as property
// So it can fetch value from another scope using 'this' keyword

class Person{
    constructor(name){
        this.name = name
    }

    printNameFunction() {
        setTimeout(function(){
            console.log('Function: '+this.name)
        }, 100)
    }

    printNameArrow = () =>
        setTimeout(() =>
            console.log('=>: '+this.name), 100)
}

let person = new Person('John Doe');
person.printNameFunction()
person.printNameArrow()