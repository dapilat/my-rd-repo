export function addNumbers(a, b) {
    let sum;
    if (areParametersNumbers(a, b)) {
        sum = a + b;
    } else {
        const convertedNumbers = getConvertedNumbers(a, b);
        if (convertedNumbers) {
            sum = convertedNumbers[0] + convertedNumbers[1];
        }
    }
    return sum;
}

function areParametersNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return true;
    } else {
        return false;
    }
}

function convertToNumbers(a, b) {
    return [Number(a), Number(b)];
}

function getConvertedNumbers(a, b) {
    const [aNumber, bNumber] = convertToNumbers(a, b);
    if (!isNaN(aNumber) || !isNaN(bNumber)) {
        return [aNumber, bNumber];
    } else {
        return [0, 0];
    }
}

export function checkNumberShortened(a) {
    if (typeof a === 'number') {
        return a > 5 ? 'greater than 5' : 'less than or equal 5';
    }
}
