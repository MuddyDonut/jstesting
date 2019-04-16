let array = [1,2,3,4,5]
function reverseArray(array) {
    let rArray = []
    for (let i = 0; i <= array.length; i++) {
        rArray.unshift(i)
    }
    return rArray;
}
console.log(reverseArray(array));