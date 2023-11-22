# Python Input and Output Exercise
# https://pynative.com/python-input-and-output-exercise/

# Exercise 1: Accept numbers from a user
# Write a program to accept two numbers from the user and calculate multiplication
print("1. Answer:")
try:
    x, y = input("Enter the numbers to be multiplied (separated by space):").split()
    print(x,"*",y,"=",int(x)*int(y))
except ValueError as ve:
    print("input must be numbers. e.g.: \"5 10\" (without double quotes sign)")
