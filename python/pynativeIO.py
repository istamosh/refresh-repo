# Python Input and Output Exercise
# https://pynative.com/python-input-and-output-exercise/
''' Comment block (skip prev. questions)
# Exercise 1: Accept numbers from a user
# Write a program to accept two numbers from the user and calculate multiplication
print("1. Answer:")
while True:
    try:
        x, y = input("Enter the numbers to be multiplied (separated by space):").split()
        print(x,"*",y,"=",int(x)*int(y))
    except ValueError:
        print("input must be integer numbers. e.g.: \"5 10\" (without double quotes sign)")
        continue
    break

# Exercise 2: Display three string “Name”, “Is”, “James” as “Name**Is**James”
# Use the print() function to format the given words in the mentioned format. Display the ** separator between each string.
print("2. Answer:")

def sentenceGen(name):
    _x = "Name"
    _y = "Is"
    _z = name
    print(_x, _y, _z, sep='**')

sentenceGen(input("Enter your name: "))

# Exercise 3: Convert Decimal number to octal using print() output formatting
print("3. Answer:")

def octalConvert(number):
    _o = oct(int(number))
    print("Octal:",_o[2:])

while True:
    try:
        octalConvert(input("Input number to be converted as octal: "))
    except ValueError:
       print("This is invalid input, please input integer number")
       continue
    break

# Exercise 4: Display float number with 2 decimal places using print()
print("4. Answer:")

def twoDigitFloat(x):
    print("{:.2f}".format(x))

while True:
    try:
        twoDigitFloat(float(input("Enter int or float number: ")))
    except ValueError:
        print("This is invalid input. Please input either integer or float: \"14.513\" or \"15\"")
        continue
    break
'''
# Exercise 5: Accept a list of 5 float numbers as an input from the user
print("5. Answer:")

def castFloat():
    while True:
        try:
            _n = int(input("Enter number of elements: "))
        except ValueError:
            print("Please input a number without symbol or space")
            continue
        break

    _list = []
    for i in range(0, _n):
        while True:
            try:
                _element = float(input("Input a number (\".\" is allowed): "))
                _list.append("{:.1f}".format(_element))
                print("input no.",i+1," : ",_element, sep='')
            except ValueError:
               print("Please input either int or float")
               continue
            break
    print(_list)

castFloat()