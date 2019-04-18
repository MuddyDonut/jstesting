function isEven(a) {
    if (a % 2 == 0) {
        return 0;
    } else if (a % 2 != 0) {
        return 1;
    } else {
        return isEven(a - 2);
    }
}

console.log(isEven(-1))