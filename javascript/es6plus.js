// using string template literals
let word1 = 'John';
let word2 = 'Doe';
const fullName = `${word1} ${word2}`;
console.log(fullName);

// addition
let num1 = 5
let num2 = 10
const addition = `${num1 + num2}`;
console.log(addition)

// using string with newline (\n) alternative on both console and p-tag
var nameWithNewline = `${word1}
${word2}
`
console.log(nameWithNewline)
document.getElementById('name-with-newline').innerText = nameWithNewline

// accessing object info and using custom alias
const personalInfo = {
    firstName: 'Helen',
    lastName: 'Berrington',
    city: 'Austin',
    state: 'Texas',
    postalCode: 73302
}
const {lastName: ln, firstName: fn} = personalInfo
console.log(`${ln}, ${fn}`)

// destructuring array
let [first, mid, last] = ['John', 'Rap Demigod', 'Castielle'];
console.log(first + mid + last)
last = 'Clementine'
console.log(first + last)

// object literal
function addrMaker(city, state){
    const fullAddress = {city, state}
    console.log(fullAddress)
}
addrMaker('West Jakarta', 'Jakarta Region Special Capital')

// object literal challenge (with arrow function)
const addressMaker = (address) => {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    }
    const {city: ct, state: st, country: cy} = newAddress
    console.log(`${ct}, ${st}, ${cy}`);
}
addressMaker({city:'Austin', state: 'Texas'})

// for loop and iterable values
let accountStatement = [752, 1008, 625, 690]
scan(accountStatement, "calculate")
let gigachad = "Ernest Khalimov the Gigachad"
scan(gigachad);
function scan(param, ops) {
    if (ops == "calculate") {
        total = 0;
        for (const i of param) {
            total += i;
        }
        console.log(total)
    }
    else {
        for (const i of param) {
            console.log(i);
        }
    }
}

// spread operator (copying entire array items)
let array1 = [1,2,3,4,5,6,7]
let array2 = [...array1]
console.log(array2)
array2.push(true);
console.log(array2)

// rest operator (rest several values as array)
function restNums(...nums) {
    console.log(nums)
}
restNums(10,2,5,9,1)

// nested function, reduce array by 1 after being processed
sumThese(10,2,5,9,1)
function sumThese(...params) {
    let total = params.reduce(function(x, y) {
        return x + y;
    })
    console.log(total)
}

// arrow function variant (eliminates return, curly braces(if there have one statement))
// arrow function can't be hoisted (must init. function first then call it)
const sumThese2 = (...params) => {
    let total = params.reduce((x, y) => x + y)
    console.log(total)
}
sumThese2(10,2,5,9,1)