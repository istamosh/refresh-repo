// Placeholder Binary Search Algo.
let myList = [2, 12, 27, 34, 49, 51, 60, 76, 83, 88, 95, 101]

binarySearch(myList, 95)

function binarySearch(list, query) {
    firstBar = 0
    lastBar = list.length -1
    found = false
    
    while (firstBar <= lastBar && !found){
        middlePoint = Math.floor((firstBar + lastBar) / 2); middlePoint
        // found = true; break
        if (query == list[middlePoint]){
            console.log(`found at index [${ middlePoint }]`)
            found = true
        }
        else {
            if (query < list[middlePoint]) lastBar = middlePoint - 1
            else firstBar = middlePoint + 1
        }
    }
}
