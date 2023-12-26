function add(a, b){
    return a + b
}

function mult(a, b){
    return a * b
}

function sub(a, b){
    return a - b
}

function div(a, b){
    return a / b
}

function mathOperation(a, b, operation){
    return operation(a, b)
}

// use function to call ops function
console.log(mathOperation(10, 12, div));