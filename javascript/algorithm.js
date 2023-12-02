let sortedList = [2, 12, 27, 34, 49, 51, 60, 76, 83, 88, 95, 101]
let unsortedList = [2, 51, 12, 34, 76, 60, 101, 83, 95, 49, 88, 27];

binarySearch(sortedList, 95)
let largest = findLargest(unsortedList); largest
bubbleSort(unsortedList); unsortedList

function binarySearch(list, query) {
    // Logarithmic Time, O(log n)
    firstBar = 0
    lastBar = list.length -1
    found = false
    
    while (firstBar <= lastBar && !found){
        middlePoint = Math.floor((firstBar + lastBar) / 2); middlePoint
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

function findLargest(list){
    // Linear Time, O(n)
    sample = list[0];
    for (let i = 0; i < list.length; i++){
        if (list[i] > sample) sample = list[i]
    }
    return sample
}

function bubbleSort(list){
    // Polynomial Time, O(n^2)
    sample = list
    for (let i = 0; i < sample.length; i++){
        for (let j = 0; j < sample.length - i - 1; j++){
            if (sample[j] > sample[j+1]){
                [sample[j], sample[j+1]] = [sample[j+1], sample[j]]
            }
        }
    }
    return sample;
}

function shuffleArray(array) {
    // Fisher-Yates (aka Knuth) Shuffle Algorithm
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}