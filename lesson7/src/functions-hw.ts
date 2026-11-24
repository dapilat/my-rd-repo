export function addNumbers(a: unknown, b: unknown): number {
    let sum;
    if (areParametersNumbers(a, b)) {
        sum = (a as number) + (b as number);
    } else {
        const convertedNumbers = getConvertedNumbers(a as number | string, b as number | string);
        if (convertedNumbers) {
            sum = convertedNumbers[0] + convertedNumbers[1];
        }
    }
    return sum;
}

function areParametersNumbers(a: unknown, b: unknown): boolean {
    if (typeof a === 'number' && typeof b === 'number') {
        return true;
    } else {
        return false;
    }
}

function convertToNumbers(a: string, b: string): [number, number] {
    return [Number(a), Number(b)];
}

function getConvertedNumbers(a: number | string, b: number | string): [number, number] {
    const [aNumber, bNumber] = convertToNumbers(a as string, b as string);
    if (!isNaN(aNumber) || !isNaN(bNumber)) {
        return [aNumber, bNumber];
    } else {
        return [0, 0];
    }
}


