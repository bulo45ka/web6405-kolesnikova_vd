
//проверка на целое число
function isInteger(n) {
    return typeof n === 'number' && (n | 0) === n;
}

//массив четных чисел
function even() {
    let result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

//сумма чисел цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//сумма чисел рекурсия
function recSumTo(n) {
    if (n === 1) return 1;
    return n + recSumTo(n - 1);
}

//факториал
function factorial(n) {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1);
}

//степень двойки
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

//число фиббоначи
function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    return function(newValue) {
        if (operatorFn) {
            storedValue = operatorFn(storedValue, newValue);
        }
        return storedValue;
    };
}

//генератор арифм последовательности
function sequence(start = 0, step = 1) {
    let current = start;
    return function() {
        let result = current;
        current += step;
        return result;
    };
}

//сравнение обьектов
function deepEqual(firstObject, secondObject) {
    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) return true;
    
    if (firstObject === secondObject) return true;

    if (typeof firstObject !== 'object' || firstObject === null || 
        typeof secondObject !== 'object' || secondObject === null) {
        return false;
    }

    let keys1 = Object.keys(firstObject);
    let keys2 = Object.keys(secondObject);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(firstObject[key], secondObject[key])) return false;
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
