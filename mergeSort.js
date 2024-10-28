function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    } else {
        let arrayMid = Math.floor(array.length / 2)
        let firstHalf = array.slice(0, arrayMid);
        let secondHalf = array.slice(arrayMid);
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}

function merge(firstHalf, secondHalf) {
    const result = [];

    while (firstHalf.length && secondHalf.length) {
        if (firstHalf[0] < secondHalf[0]) {
            result.push(firstHalf.shift());
        } else {
            result.push(secondHalf.shift());
        }
    }

    return [...result, ...firstHalf, ...secondHalf];
}

console.log("This was printed recursively");
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));