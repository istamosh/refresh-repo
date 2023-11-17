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