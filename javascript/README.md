# JS Readme

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

Operator:
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

Declaration:
- var = variable
- var a; = unsigned variable (empty declaration)
- var b = 2; signed variable (filled by 2)
- let = block-scoped variable
- const = constant, value cannot be changed

# Using unsigned variable (code block):

var a;
a = 7;

# More Description:
- Value declaration is case sensitive, 'var JavaScript' can't be read with 'console.log(javascript)'
- Camel case is a case naming style with first letter being lowercase then after that use uppercase, e.g. = properCamelCase, javaScript, java