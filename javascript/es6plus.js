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
        let total = 0;
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

// nested function, reduce array by 1 everytime until it's done after being processed
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

// default params (to prevent undefined variable from caller)
function countElements(array = []) {
    let total = 0
    array.forEach((element) => total += element )
    console.log(total)
}
countElements()

// includes()
let someArr = [1,2,3,4,5]
console.log(someArr.includes(2))
console.log(someArr.includes(6))

// const (still can override the data type inside it)
const constantArr = []
constantArr.push(3)
console.log(constantArr)
const constantObj = {}
constantObj.name = 'John Doe'
console.log(constantObj)

// import and export (don't forget to use type="module" in script tag)
import { exampleData, exampleNames } from "./class/exampleClass.js";
let updatedData = exampleData
let updatedNames = exampleNames
updatedData.push('new!: 30')
updatedNames.push('new!: J.K. Rowling Sr.')
console.log(updatedData)
console.log(updatedNames)

// padStart() padEnd()
// add character padding before or after string until reaches certain max character
let stringForPad = 'Johny'
console.log(stringForPad.padStart(15, 'JH'))
console.log(stringForPad.padEnd(20, 'ye'))

// padStart() padEnd() Challenge
let exampleLink = 'Youtube.com/freeCodeCamp420'
// guess: this will repeat the original string from the start until it reaches 100 characters max.
// correct answer: no second argument for padding, so the link stay the same as is
console.log(exampleLink.padStart(100));
// guess: this will only show link without addition to the end (because of 1 character limitation)
// correct answer: you are correct
console.log(exampleLink.padEnd(1));

// classes with object constructor
import { Animal, SomeClass, Canine } from "./class/exampleClass.js";
let cat = new Animal('Mammal', 2);
// accessing class' object
console.log(cat)
// accessing class' object property
console.log(cat.legs)
// altering property
cat.legs = 4;
console.log(cat)
// access local function
cat.makeNoise();
// access local function with args
cat.makeNoise('mrrrp..')
// accessing static function
console.log(SomeClass.pi())
// accessing get function, note get itself is a property
console.log(cat.metaData)
// accessing extended class from Animal
let dog = new Canine('Mammal', 4)
dog.makeNoise()
// using original metaData because of extended class
console.log(dog.metaData)

// Trailing Comma
function trailingComma(param1,) {
    const example = {
        name: 'Wilson Losiento',
    }
    console.log(example)
}
trailingComma()

// Async and Await
// using JSON mock data
// accessing JSON without knowing the data structure

// with promise
const apiUrl = 'https://dummyjson.com/products';
function getProductsInfo() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(json => {
        const arrFromObj = Object.values(json)
        console.log(arrFromObj[0][0])
    })
    .catch(error => console.log('failed to fetch data.'))
}
getProductsInfo();

// with async await function (wait till statement completes (page fully loaded) then continue statement)
async function getProductsInfoAsync() {
    const response = await fetch(apiUrl)
    const json = await response.json()
    
    // define object inside response json
    const arrFromObj = Object.values(json)
    const firstElement = arrFromObj[0][0]
    console.log(firstElement)
}
getProductsInfoAsync();

// async await challenge
// question
function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved!')
        }, 3000)
    })
}
// answer (turns out correct!)
async function waitThreeSeconds() {
    console.log('Please wait...')

    const resolve = await resolveAfter3Seconds()
    console.log(resolve)
}
waitThreeSeconds();
// more correct answer (arrow function)
resolveAfter3Seconds().then(data => console.log(data))
// correct answer (normal function variant)
resolveAfter3Seconds().then(function(data) {
    console.log(data)
})
// then() is the continued function after Promise is resolved (whether it succeed or failed)

// sets (are iterable)
const exampleSet = new Set([1,1,1,2,2])
// returns the number count of unique element
console.log(exampleSet.size)
// add 2 numbers
exampleSet.add(4).add(5)
console.log(exampleSet.size)
// return true if found a certain number and delete it
console.log(exampleSet.delete(5))
console.log(exampleSet.delete(6))
console.log(exampleSet.size)
// return true if set has a certain number
console.log(exampleSet.has(4))
// delete entire set
exampleSet.clear();
console.log(exampleSet.size)

// fetch local mock data
async function fetchLocalData(path) {
    const response = await fetch(path)
    const json = await response.json()
    
    // define object inside response json
    const arrFromObj = Object.values(json)
    //const firstElement = arrFromObj[0]
    console.log(arrFromObj)
}
fetchLocalData('./mockdatas/highway_accidents.json')