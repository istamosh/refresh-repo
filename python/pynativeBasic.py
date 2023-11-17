# Python Basic Exercise for Beginners
# https://pynative.com/python-basic-exercise-for-beginners/

# Exercise 1: Calculate the multiplication and sum of two numbers
# Given two integer numbers, multiply their product only if the product is equal to or lower than 1000. Otherwise, return their sum.

# Practice 1 & 2
print("1. Answer:")
myTuple = ((20,30),(40,30),(30,25),(50,45))
for contents in myTuple:
    if (contents[0] * contents[1] <= 1000):
        print(contents[0],"x",contents[1],"=", contents[0] * contents[1])
    else:
        print(contents[0],"+",contents[1],"=", contents[0] + contents[1])