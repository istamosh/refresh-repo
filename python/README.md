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

Code Block Cheat Sheet
- Retry invalid input until input as expected

while True:
    try:
        # some code block
    except:
        # execute exception information, or an alternative fixing code
        continue
    break