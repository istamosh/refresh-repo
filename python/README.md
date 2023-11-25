# Python Readme

Overview
- Hashtag sign (#) for inserting comment

Terminal Command
- python app.py = run python file

Declaration cheat sheet
- array = []
- array.append(<obj>) = method for insert object at the end of said list
- integers = 100
- name = "Kovac"

Cheat Sheet
- print("<content>") = print a file into terminal output
- for i in range(5): print(i) = 0,1,2,3,4
- for i in range(1, 5+1): print(i) = 1,2,3,4,5
- if = declare if statement
- elif = else if, another if after first if
- else = last resort prior any ifs are false

Variable Declaration
- Immutable = str, int, float, bool, bytes, tuple...
- Mutable = list, set, dict...

More explanation
- Immutable is variable declaration containing a value that can't be changed, while mutable can.

String manipulation:
- print("{:.2f}".format("105")) = change number into two digit floating number (105.00)

String slice:
- someString[2:] = remove the first two chars
- someString[:-1] = remove the last one char

# Code Block
- Retry invalid input until input is correct and as intended

while True:
    try:
        # some code block
    except:
        # execute exception information, or an alternative fixing code
        continue
    break

- Get full directory path from relative path

relativePath = ""
from pathlib import Path
_path = str(Path(__file__).parent / relativePath)

- Multiple variables in one input separated by space

var1, var2, var3 = input("enter 3 vars:").split()

- Get file size in bytes

fullDirPath = ""
import os
print(os.stat(fullDirPath).st_size)

# List Comprehension Cheat Sheet
- items = ['ration','antibiotic','phone']
- Add "items" elements into "content":

content = []
for i in items:
    content.append(i)

is the same as:

content = [i for i in items]

- Add "items" elements' char. length into "content":

content = []
for i in items:
    content.append(len(i))

is the same as:

content = [len(i) for i in items]

- Include "items" elements' as 'Nice' string if char. length is 5 into "content", otherwise fill '-':

content = []
for i in items:
    if len(i) == 5:
        content.append("Nice")
    else:
        content.append("-")

is the same as:

content = ["Nice" if len(i)==5 else "-" for i in items]

- Add "items" elements into "content" without first element:

content = []
for i in items:
    if i != items[0]:
        content.append(i)

is the same as:

content = [i for i in items if i != items[0]]

- Add prefix for every "items" elements, and insert them into "content":
- upgrades = ['pristine-', 'broken-']

content = []
for i in items:
    for prefix in upgrades:
        content.append(prefix+i)

is the same as:

content = [prefix+i for i in items for prefix in upgrades]

# String format() method cheatsheet:
- _string = "I have {fund:.2f} dollar(s) saving."
- print(_string.format(fund = 100))
Result is: "I have 100.00 dollar(s) saving."
The format() method formats the value and then insert them inside placeholder (curly braces{}).
Placeholder formatting type (example {fund:,} to format thousand separator (1,000,000)):
- :.2f = 2-digit floating number
- :< = Left aligns the result (within the available space)
- :> = Right aligns the result (within the available space)
- :^ = Center aligns the result (within the available space)
- := = Places the sign to the left most position
- :+ = Use a plus sign to indicate if the result is positive or negative
- :- = Use a minus sign for negative values only
- :  = Use a space to insert an extra space before positive numbers (and a minus sign before negative numbers)
- :, = Use a comma as a thousand separator
- :_ = Use a underscore as a thousand separator
- :b = Binary format
- :c = Converts the value into the corresponding unicode character
- :d = Decimal format
- :e = Scientific format, with a lower case e
- :E = Scientific format, with an upper case E
- :f = Fix point number format
- :F = Fix point number format, in uppercase format (show inf and nan as INF and NAN)
- :g = General format
- :G = General format (using a upper case E for scientific notations)
- :o = Octal format
- :x = Hex format, lower case
- :X = Hex format, upper case
- :n = Number format
- :% = Percentage format