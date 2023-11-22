# print a number from 1 to 100
# if the number is multiplier of 3, the value changed to fizz
# if the number is multiplier of 7, the value changed to buzz
# if the number is multiplier of 3 and 7, the value changed to fizzbuzz
# display the print horizontally with a comma
max = 100
stash = []
for i in range(1, max+1):
    if (i % 3 == 0 and i % 7 == 0):
        stash.append("fizzbuzz")
    elif (i % 3 == 0):
        stash.append("fizz")
    elif (i % 7 == 0):
        stash.append("buzz")
    else:
        stash.append(i)

print(stash, sep=", ")