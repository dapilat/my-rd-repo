export const addNumbersExpr = function(a, b) {
    let sum;
    if (areParametersNumbersExpr(a, b)) {
        sum = a + b;
    } else {
        const convertedNumbers = getConvertedNumbersExpr(a, b);
        if (convertedNumbers) {
            sum = convertedNumbers[0] + convertedNumbers[1];
        }
    }
    return sum;
};

const areParametersNumbersExpr = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return true;
    } else {
        return false;
    }
};

const convertToNumbersExpr = function (a, b) {
    return [Number(a), Number(b)];
};

const getConvertedNumbersExpr = function (a, b) {
    const [aNumber, bNumber] = convertToNumbersExpr(a, b);
    if (!isNaN(aNumber) || !isNaN(bNumber)) {
        return [aNumber, bNumber];
    } else {
        return [0, 0];
    }
};


