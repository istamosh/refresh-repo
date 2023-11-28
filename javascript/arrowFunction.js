// function with two arguments
function sum(a, b){
    return a+b
}

let sum2 = (a, b) => a+b


// function with one argument
function isPositive(number){
    return number >= 0
}

let isPositive2 = number => number >= 0


// function with no argument
function rng(){
    return Math.random
}

let rng2 = () => Math.random


// anonymous function
document.addEventListener('click', function(){
    console.log('Click')
})

document.addEventListener('click', () => console.log('Click'))


/*
- arrow function uses var. declaration (such as let)
- the '(a,b)' denotes that those are the a and b parameters
- if it has ONE parameter then parenthesis '()' is not required, ex. '= a =>'
- if it has NO parameter then use the empty parenthesis. ex. '= () =>'
- arrow sign '=>' denotes that the var. is recognized as a function
- return keyword is not required after arrow sign
- if it has one-liner statement then the curly braces is not required
*/