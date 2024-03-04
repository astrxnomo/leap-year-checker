for (i = 2000; i <= 3000; i++) {
    if (i % 4 === 0) {
        if (i % 100 === 0) {
            if (i % 400 === 0) {
            console.log(i + 'is a leap year');
            } else {
            console.log(i + ' is not a leap year');
            }
        } else {
            console.log(i + ' is a leap year');
        }
    } else {
        console.log(i + ' is not a leap year');
    }
}