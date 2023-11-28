var a, b;
a = 7;
console.log(a)
console.log(b)
b = a;
console.log(b)

var c = 5;
var d = 10;
var e = "I am a "

c = c + 1; c
d = d + 5; d
e = e + "string!"; e

// below i am putting variable after operation to show its values without logging (using Quokka)

var sum = 10 + 10; sum
var subtraction = 20 - 15; subtraction
var multiplication = 8 * 4; multiplication
var division = 40 / 5; division
var increment = 87; increment++; increment
var decrement = 89; decrement--; decrement
var decimal = 5.7; decimal
var decimalMult = 4.4 * decimal; decimalMult
var decimalDivs = 4.4 / decimal; decimalDivs
var remainder = 100 % 3; remainder
c += 5; c
c -= 1; c
c *= 10; c
c /= 2; c
c %= 9; c

var escLiteralQuotes = "I am a \"double quoted\" string inside \"double quotes\""; escLiteralQuotes
var altLiteralQuotes = 'I am a "double quoted" string inside "double quotes"'; altLiteralQuotes
var alt2LiteralQuotes = `I am a 'single quoted' string inside "back tick signs"`; alt2LiteralQuotes

var usingEscape = "First line\n\tSecond line with Tab\n\\Third line with backslash"; usingEscape

var concatString = "I am "+"a concatenated string."; concatString

var concatWithAugment = "First string"
concatWithAugment += " & Second string."; concatWithAugment

var stringLength = concatWithAugment.length; stringLength
var firstLetter = concatWithAugment[0]; firstLetter

// string is immutable
var typo = "Hello Wowld"
typo[8] = "r"; typo
typo = "Hello World"; typo

// find last letter regardless of length
var getLastLetter = typo[typo.length-1]; getLastLetter
// find third to last letter
var thirdLast = typo[typo.length - 3]; thirdLast

// using function and parameters, functions are reusable
function sentenceBuilder(noun, adj, verb, adverb){
    var _result = "";
    _result += "The "+adj+" "+noun+" "+verb+" to the store " + adverb;
    return _result;
}
console.log(sentenceBuilder("dog", "big", "ran", "quickly."))
console.log(sentenceBuilder("bike", "slow", "flew", "slowly."))

// array
var myArray = ["John Doe", 23]; myArray
// nested array (multidimensional array)
var multArray = [["John Doe", 27],["Mike Dawn", 30]]; multArray
// accessing array
pickSecond = multArray[1]; pickSecond
// altering values inside array
var numbers = [10,24,59,99];
numbers[1] = 29; numbers
// pick value inside nested array
var numbers_ = [[1,2],[3,4,5],[[6,7],8],[9,10]];
pickNumber7 = numbers_[2][0][1]; pickNumber7
// push an element at the end of existing array
numbers_.push([11,12,13]); numbers_
// pick and remove an end of array
getLastEle = numbers_.pop();
console.log(getLastEle)
console.log(numbers_)
// remove first element
var identities = ["John", "Doe", "United States"];
getFirstEle = identities.shift();
console.log(identities)
console.log(getFirstEle)
// append first element
identities.unshift("Thomas"); identities

// function revisited
function saySomething(){
    console.log("Hey, good to see you again!")
}
saySomething();
saySomething();

// func. with arguments
function divisionOperation(leftHand, rightHand){
    console.log(leftHand - rightHand)
}
// now invoke above func. with parameters
divisionOperation(12, 3);
divisionOperation(19, 50);

// global vs local scope
var globalInt = 5;
function localScope(){
    localInt = 10;
}
// write a function to check whether the variable is declared global or local
function checkScope(){
    var _result = "";
    if (typeof globalInt != "undefined"){
        _result += "globalInt: " + globalInt;
    }
    if (typeof localInt != "undefined"){
        _result += ", localInt: " + localInt;
    }
    console.log(_result);
}
localScope(); // this will bring local var to global
checkScope();

// console on global tries to access local var without invoking function
function localScope2(){
    var localString = "This is local.";
    console.log(localString);
}
localScope2();
//console.log(localString);

// access value outside function if local isn't exist
var outerWear = "T-Shirt";
function myOutfit(){
    var outerWear = "Sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

// return a value using function
function divideTwo(num){
    return num / 2;
}
console.log(divideTwo(50));

// using a function without returning value will result in undefined
var someNumber = 10;
function addByTen(){
    someNumber += 10;
}
console.log(addByTen())

// this function will return a value and change the global var
var remain = 0; remain
function moduloNine(num){
    return num % 9
}
remain = moduloNine(98); remain

// this function will queue next item and remove the first queue
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var someArray = [1,2,3,4,5];
console.log("Before: "+ JSON.stringify(someArray));
console.log(nextInLine(someArray, 6));
console.log("After: " + JSON.stringify(someArray));

// using boolean return in function
function booleanOps(isItTrue){
    if (isItTrue){
        return "yes it was true"
    }
    return "no it was false"
}
console.log(booleanOps(true));

// using if and boolean equal comparator
function checkBlackJack(val){
    if (val == 21)
        return "Black Jack!"
    else
        return "Nope!"
}
console.log(checkBlackJack('21'));

// strict equal comparator
function checkStrictVal(val){
    if (val === 10)
        return "Equal"
    else
        return "Not Equal"
}
console.log(checkStrictVal('10'))

