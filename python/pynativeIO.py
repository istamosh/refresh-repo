# Python Input and Output Exercise
# https://pynative.com/python-input-and-output-exercise/
''' Comment block (skip prev. phase)
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

# Exercise 6: Write all content of a given file into a new file by skipping line number 5
# located in .\pynative\res\io\test.txt
print("6. Answer:")

def deleteLine5(path, fileName):
    from pathlib import Path
    _fileLoc = Path(__file__).parent / path
    _newFilePath = str(_fileLoc).rsplit('\\',1)[0] + "\\" + fileName + ".txt"

    with open(_fileLoc, 'r') as file:
        _list = file.readlines()

    _contents = [i for i in _list if i != _list[4]]
    
    import os.path as osp
    if osp.exists(_newFilePath):
        print('Operation cancelled, file already exists!')
    else:
        with open(_newFilePath, 'w') as file:
            file.writelines(_contents)
            file.close()
        print('Exercise 6: File created as ',fileName,'.txt!', sep='')

deleteLine5(r'./pyNative/res/io/test.txt', input("Enter file name: "))

# Exercise 7: Accept any three string from one input() call
# Write a program to take three names as input from a user in the single input() function call.
print("7. Answer:")

while True:
    try:
        a, b, c = input("Enter three names (separated by space): ").split()
        print("Name1:", a)
        print("Name2:", b)
        print("Name3:", c)
    except:
        print("Invalid input, please input 3 names separated by space.")
        continue
    break

# Exercise 8: Format variables using a string.format() method.
# Write a program to use string.format() method to format the following three variables as per the expected output
print("8. Answer:")

def answer8(money, qty, price):
    _txt = "I have {_money:,} dollar(s) so I can buy {_qty:n} football(s) for {_price:.2f} dollar(s)."
    print(_txt.format(_money = money, _qty = qty, _price = price))

answer8(1000, 3, 450)
'''
# Exercise 9: Check file is empty or not
# Write a program to check if the given file is empty or not
print("9. Answer:")

def getSize(filePath, fileName):
    from pathlib import Path
    _fullPath = str(Path(__file__).parent / filePath) + "\\" + fileName
    import os
    print(fileName, " size is: ", os.stat(_fullPath).st_size, " bytes.", sep='')

while True:
    try:
        _dir = "./pyNative/res/io/"
        print('Current dir:',_dir)
        getSize(_dir, input("Enter file name for check: "))
    except:
        print("File not found, make sure type the name correctly.")
        continue
    break
