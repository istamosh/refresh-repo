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

// object literal challenge
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