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
        return print("Result is:", True)
    else:
        return print("Result is:", False)

checkHeadTail([10, 20, 30, 40, 10])
checkHeadTail([75, 65, 35, 75, 30])