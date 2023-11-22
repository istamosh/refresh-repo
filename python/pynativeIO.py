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

# Exercise 2: Display three string “Name”, “Is”, “James” as “Name**Is**James”
# Use the print() function to format the given words in the mentioned format. Display the ** separator between each string.
print("2. Answer:")

def sentenceGen(name):
    _x = "Name"
    _y = "Is"
    _z = name
    print(_x, _y, _z, sep='**')

sentenceGen(input("Enter your name: "))