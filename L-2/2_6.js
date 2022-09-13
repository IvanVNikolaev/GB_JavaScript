function math(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return arg1 + arg2;
        case 'subtraction':
            return arg1 - arg2;
        case 'multiply':
            return arg1 * arg2;
        case 'divide':
            return arg1 / arg2;
    }
}

console.log(math(7, 6, 'multiply'));