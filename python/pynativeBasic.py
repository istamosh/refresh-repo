# Python Basic Exercise for Beginners
# https://pynative.com/python-basic-exercise-for-beginners/

# Exercise 1: Calculate the multiplication and sum of two numbers
# Given two integer numbers, multiply their product only if the product is equal to or lower than 1000. Otherwise, return their sum.

# Given 1 & 2
print("1. Answer:")
myTuple = ((20,30),(40,30),(30,25),(50,45))
for contents in myTuple:
    if (contents[0] * contents[1] <= 1000):
        print(contents[0],"x",contents[1],"=", contents[0] * contents[1])
    else:
        print(contents[0],"+",contents[1],"=", contents[0] + contents[1])

# Exercise 2: Print the sum of the current number and the previous number
# Write a program to iterate the first 10 numbers, and in each iteration, print the sum of the current and previous number.
print("2. Answer:")
for i in range(10):
    j = i-1
    if (j < 0):
        print("Current Number",i,"Previous Number",i,"Sum:",i)
    else:
        print("Current Number",i,"Previous Number",j,"Sum:",i+j)

# Exercise 3: Print characters from a string that are present at an even index number
# Write a program to accept a string from the user and display characters that are present at an even index number.
print("3. Answer:")

string = "pynative"

print("Original string is", string)
print("Printing only even index chars (0, 2, 4, 6)")
def displayEvenChars(str):
    processedString = ""
    for i in str:
        if (str.index(i) % 2 == 0):
            processedString += i
    print(", ".join(processedString))

displayEvenChars(string)

# Exercise 4: Remove first n characters from a string
# Write a program to remove characters from a string starting from zero up to n and return a new string.
print("4. Answer:")

def removeChar(givenString, beginIndex):
    constructString = ""
    for i in givenString[beginIndex:]:
        constructString += i
    print("Sliced the first",beginIndex,"chars:", constructString)

removeChar(string, 4)
removeChar(string, 2)

# Exercise 5: Check if the first and last number of a list is the same
# Write a function to return True if the first and last number of a given list is same. If numbers are different then return False.
print("5. Answer:")
def checkHeadTail(list):
    print("Given list:", list)
    if (list[0] == list[-1]):
        print("Result is:", True)
    else:
        print("Result is:", False)

checkHeadTail([10, 20, 30, 40, 10])
checkHeadTail([75, 65, 35, 75, 30])

# Exercise 6: Display numbers divisible by 5 from a list
# Iterate the given list of numbers and print only those numbers which are divisible by 5
print("6. Answer:")
def divisibleBy5(list):
    temp_list = []
    for i in list:
        if (i % 5 == 0):
            temp_list.append(i)
    print("Items divisible by 5:",temp_list)

divisibleBy5([10,20,33,46,55])

# Exercise 7: Return the count of a given substring from a string
# Write a program to find how many times substring “Emma” appears in the given string.
print("7. Answer:")
def stringFinder(string, sentence):
    splits = sentence.split(" ")
    x = 0
    for i in splits:
        if (string == i):
            x += 1
    print(sentence)
    print(string,"appeared",x,"times.")

stringFinder("Emma", "Emma is good developer. Emma is a writer")

# Exercise 8: Print the following pattern
# 1
# 2 2
# 3 3 3
# etc.
print("8. Answer:")
def drawTriangleNumber(layerCount):
    temp_string = ""
    for i in range(1, layerCount+1):
        temp_string += str(i)+" "
        print(temp_string[:-1])
        
drawTriangleNumber(5)

# Exercise 9: Check Palindrome Number
# Write a program to check if the given number is a palindrome number.
# A palindrome number is a number that is the same after reverse. For example, 545, is the palindrome numbers
print("9. Answer:")
def checkPalindrome(number):
    temp_list = []
    for i in str(number):
        temp_list.append(i)

    rev_list = list(reversed(temp_list))

    print("original number", number)
    if (temp_list == rev_list):
        print("Yes, given number is palindrome number.")
    else: 
        print("No, given number is not palindrome number.")

checkPalindrome(533767767335)

# Exercise 10: Create a new list from two list using the following condition
# Given two list of numbers, write a program to create a new list such that the new list should contain odd numbers from the first list and even numbers from the second list.
print("10. Answer:")
def exercise10(list, list2):
    temp_list = []
    for i in list:
        if (i % 2 != 0):
            temp_list.append(i)
    for i in list2:
        if (i % 2 == 0):
            temp_list.append(i)
    print("result list:", temp_list)

exercise10((10, 20, 25, 30, 35), (40, 45, 60, 75, 90))

# Exercise 11: Write a Program to extract each digit from an integer in the reverse order.
# For example, If the given int is 7536, the output shall be “6 3 5 7“, with a space separating the digits.
print("11. Answer:")
def reverseInt2Str(int):
    temp_list = []
    for i in reversed(str(int)):
        temp_list.append(i)
    print(" ".join(temp_list))
reverseInt2Str(5623)

# Exercise 12: Calculate income tax for the given income by adhering to the rules below
# Taxable Income    Rate (in %)
# First $10000      0
# Next $10000       10
# The remaining     20
# For example, suppose the taxable income is 45000, and the income tax payable is
# 10000*0% + 10000*10%  + 25000*20% = $6000.
print("12. Answer:")
def calculateTotalTax(int):
    if (int > 20000):
        remainder = int - 20000
        tax = float(remainder * (20/100))
        total = float(1000 + tax)
        print("taxable income: $",int)
        print("income tax: $",total)
    elif (int > 10000):
        remainder = int - 10000
        total = float(remainder * (10/100))
        print("taxable income: $",int)
        print("income tax: $",total)
    elif (int > 0):
        print("this income is not taxable.( $",int,")")
    else: print("invalid input")
calculateTotalTax(45000)

# Exercise 13: Print multiplication table from 1 to 10
print("13. Answer:")

def multiplicationTable(input):
    print("Table multiplication of",input,"x",input)
    for i in range(1, input+1):
        temp_string = ""
        for j in range(1, input+1):
            temp_string += str(i * j)+" "
        print(temp_string[:-1])

multiplicationTable(10)

# Exercise 14: Print a downward Half-Pyramid Pattern of Star (asterisk)
print("14. Answer:")
def upsideDownAsteriskPyramid(layer):
    temp_string = ""
    for i in range(layer):
        temp_string += str("*")+" "
    for i in range(layer):
        print(temp_string[i*2:])

upsideDownAsteriskPyramid(6)

# Exercise 15: Write a function called exponent(base, exp) that returns an int value of base raises to the power of exp.
# Note here exp is a non-negative integer, and the base is an integer.
print("15. Answer:")
def exponent(num, exponent):
    if not type(num) is int or not type(exponent) is int:
        print("Sorry, one of the input is not a number.")
    elif exponent < 0:
        print("Sorry, no exponents input below zero.")
    else:
        temp_string = str(num)
        for i in range(1, exponent):
            temp_string += " *"+str(num)

        print("base = ",num,'\n',"exponent = ",exponent,'\n',num," raises to the power of ",exponent," : ",num**exponent," i.e. ","(",temp_string," = ",num**exponent,")", sep='')

exponent(2, 5)