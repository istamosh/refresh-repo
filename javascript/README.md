# JS Readme
# Read this in editor or notepad++

Tools used:
- VSCode
- Live Server Extension = Live HTML code run on save, on browser 
- Quokka.js Extension = Live JS code run as you type
- Browser

VSCode shortcut:
- ALT+L, ALT+O = Run file with live server on default browser (on HTML requires head or body)
- CTRL+K, Q = Start/Restart Quokka on current file, view in Output tab

Browser Shortcut:
- F12 = Open Inspect Element

HTML Code:
- <script></script> = embed JS script inside HTML (without creating new JS file)

Code:
- // = comments, ignore in-line comment
- /* this block is ignored */ = multiline comments
- var string = "double quote sign (\")" : escaping quote sign, how to include quote without being recognized as string start or end (\")
- var string = 'double quote sign (")' : alternative escape quote sign using single quote (') as starting and closing
- var string = `double quote (") and single quote sign (')` : another alternative using backticks (`) to freely using single quote and double quote without escaping literal sign (\)

# Primitive (immutable) vs Reference (mutable) Data Type:
- Immutable : String, Integer, Undefined, Boolean, BigInt
- Mutable : Function, Array, Object
-- Function declared as "function(args)"
-- Array declared as "[element1, element2]"
-- Object declared as "{fname: 'John', lname: 'Doe'}"

# Operator:
- + = addition
- - = subtraction
- * = multiplication
- / = division
- % = modulo (remainder of division)
- ++ = increment
- -- = decrement
- += = compound assignment with augmented addition (instantly adds to left-hand variable e.g. 'a = a + 2' is the same as 'a += 2')
- -= = augmented subtraction
- *= = augmented multiplication
- /= = augmented division
- %= = augmented modulo

# If statement:
-- Serial if statements
- if = the firstmost if declaration (can jump directly to else for handling two outcomes (if then else); else if and else are optional depends on use case)
- else if = the alternate statement if above ifs is not satisfied (can be continued by another else if below)
- else = the last statement if above ifs are not satisfied
-- Parallel if statements can be used for multiple uses
- if
- if
# Variable comparator/statement:
- == = equal
= != = is not equal
= > = greater than
= < = lesser than
- >= = equal or greater than
- <= = equal or lesser than
- === = strict equal (int 3 and string '3' is NOT equal)
- !== = strict non-equal
# Compare two statements (Logical Operator):
- && = AND operator, two ampersand sign (requires both to be true for continuing)
- || = OR operator, two pipes sign (requires either one to be true)


# Escape Sequences in string:
- \' = single quote
- \" = double quote
- \\ = backslash
- \n = newline
- \r = carriage return
- \t = tab
- \b = backspace
- \f = form feed

# Declaration:
- var = variable
- var a; = unsigned variable (empty declaration)
- var b = 2; signed variable (filled by 2)
- let = block-scoped variable, arrow function use this declaration
- const = constant, value cannot be changed

# Property:
- myString.length = get a number of chars in myString. (incl. spaces)
- myString[1] = get second letter in myString by using bracket notation (list index begins at 0)
- myNestedArray[2][5] = get value inside index 2 and subindex 5 (and so on depends on the depth of array)
- myString[myString.length - 1] = get last letter regardless of string length
- myString[myString.length - 3] = get the third to last letter

# Methods:
- myArray.push([afterEnd]) = append new element on the end of myArray
- myArray.pop() = return the last element (optional) and remove it from myArray
- myArray.shift() = return the first element (optional) and remove it from myArray
- myArray.unshift([willBeFirst]) = append new element on the beginning of myArray
- console.log(JSON.stringify(myArray)) = display array elements in JSON string variant (['1','2','3'] to [1,2,3])

# Using unsigned variable (code block):

var a;
a = 7;

# Code Blocks
- Functions
myFunction(param, param){
    // operations here
}
myFunction(var, var)

- Switch Statement
switch(params){
    case 1:
        // op
        break;
    case 2:
        // op
        break;
    case 3:
        // op
        break;
    default:
        // op
    // return something (optional)
}
    

# More Description:
- Variable naming declaration is case sensitive, 'var JavaScript' can't be read with 'console.log(javascript)'
- Camel case is a case naming style with first letter being lowercase then after that use uppercase, e.g. = properCamelCase, javaScript, java
- the use of number in the beginning of variable naming on javascript is prohibited
- When using 'if' statement with 'else if' and 'else', consider the logical order, the order as follows: if -> else if -> else. If the condition are met (returns true), then the rest codeblocks are skipped.
- 'if' statement and 'else if' statement uses condition, while 'else' does not.
- 'switch' statement is just like 'if' but the cases (case) and parameter matching are using strict equal (===), then the 'default' keyword is just like final 'else'.
- Hoisting is a function call BEFORE the function itself is being defined (function is placed below the caller, not from the top, like usual top to bottom coding flow), Regular function can be hoisted while Arrow function cannot.