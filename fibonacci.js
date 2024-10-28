function fibs(n) {
    const fibArray = [0, 1];
    for(let i = 2; i < n; i++) {
        fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
    return fibArray;
}

console.log(fibs(8));

function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fibRecArray = fibsRec(n - 1)

    fibRecArray.push(fibRecArray[fibRecArray.length -1] + fibRecArray[fibRecArray.length -2])
    
    return fibRecArray;
}

console.log("This was printed recursively");
console.log(fibsRec(8))