function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle, arr.length))
    
    return merge(left, right)
}

function merge(left, right) {
    const newArr = []

    while (left.length > 0 && right.length > 0) {
        const minArr = left[0] < right[0] ? left : right;
        const minEl = minArr.shift();
        newArr.push(minEl);
    }

    return newArr.concat(left, right)
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) // returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])) // returns [79, 100, 105, 110]