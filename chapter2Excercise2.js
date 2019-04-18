for(let number = 0; number <=100; number++) {
    if (number % 3 ==0 && number % 5 ==0) {
        console.log('fizzBuzz ' + number);
    } else if (number % 3 == 0) {
        console.log('fizz ' + number);
    } else if (number % 5 == 0) {
        console.log('buzz ' + number);
    }
};