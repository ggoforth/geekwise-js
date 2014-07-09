function isMultiple3(num) {
    if (isNaN(num)) {
        return false;
    }

    return num % 3 === 0;
}

function isMultiple5(num) {
    if (isNaN(num)) {
        return false;
    }

    return num % 5 === 0;
}

for (var i = 1; i <= 100; i++) {
    if (isMultiple3(i) && isMultiple5(i)) {
        console.log("fizzbuzz");
    } else if (isMultiple3(i)) {
        console.log("fizz");
    } else if (isMultiple5(i)) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}