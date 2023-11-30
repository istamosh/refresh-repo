# Binary Search (Logarithmic Time: O(log n))
# Best for searching element or index number in already sorted list and, input only known elements
someList = [1, 7, 16, 24, 37, 40, 68, 71, 82, 98]

def binarySearch(listQuery: list, query: int):
    firstBar = 0
    lastBar = len(listQuery)-1
    found = False

    while firstBar <= lastBar and found is False:
        midPointer = (firstBar + lastBar) // 2
        if query == listQuery[midPointer]: print("Found at index [",midPointer,"]",sep=''); found = True
        else:
            if query > listQuery[midPointer]: firstBar = midPointer + 1
            else: lastBar = midPointer - 1
        
binarySearch(someList, 82)