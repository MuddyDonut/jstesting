
function addEntry(x, y) {
    let list = [];
    for (let i = x; i<=y; i++) {
        list.push(i)
    }
    return list;
}
console.log(addEntry(1,10));