// Example uses difference of arrow function
// Arrow function redefines its function as property
// So it can fetch value from another scope using 'this' keyword

// in other words, regular functions binds 'this' automatically to an object that depends on where the function is being called
// in this case the regular function is called outside the Person's class scope, thus 'this' will return 'undefined'
// this was a problem over years, after ES6 is brought an arrow function, 'this' function will bind the object
// in which the original function is defined rather than where the function is being called

class Person{
    constructor(name){
        this.name = name
    }

    printNameFunction() {
        setTimeout(function(){
            console.log('Function: '+this.name)
        }, 1000)
    }

    printNameArrow = () =>
        setTimeout(() =>
            console.log('=>: '+this.name), 2000)
}

let person = new Person('John Doe');
person.printNameFunction()
person.printNameArrow()

// Disadvantage of arrow function
// Let's say we define people object with a function that prints the said person's name
// Arrow function will treat 'this' as an object OUTSIDE 'arrowPeople' object, which is this Window (as a parent of arrowPeople)
// In other words, 'this' in arrow func. is not this property inside own object scope
// thus creating 'undefined undefined' value

const arrowPeople = {
    firstName: 'Mark',
    lastName: 'Twain',
    readFullName: () => console.log(`${this.firstName} ${this.lastName}`)
}
const regularPeople = {
    firstName: 'Mark',
    lastName: 'Twain',
    readFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    } 
}
arrowPeople.readFullName();
regularPeople.readFullName();