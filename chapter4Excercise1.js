function range(x, y) {
    let list = [];
    for (let i = x; i<=y; i++) {
        list.push(i);
    }
    return list;
}

function sum(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum
}

console.log(sum(range(1,10)));