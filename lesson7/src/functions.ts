import { List, StringOrNumber, Dog } from './new-types';

export function  sum(a: number, b: number): number {
    return a + b;
}

export function doNothing(): void {
    console.log('This function does nothing');
}

export function getCurrentEnumAsString(value: List): StringOrNumber {
    return value;
}

export function createNewDog(name: string, age: number, breed: string, height: number, weight: number): Dog {
    return {
        name,
        age,
        breed,
        height,
        weight
    };
}

export function selectNumbers(arr: number[] | string[]): number[]{
    //return arr.filter((item) => typeof item === 'number' && !isNaN(item)) as number[];
    if (typeof arr[0] === 'number') {
        return arr as number[];
    }
    return [];
}


export function selectNumbersForMixedArray(arr: (number | string)[]): number[] {
    return arr.filter((item) => typeof item === 'number' && !isNaN(item)) as number[];
}

export function listObjectKeysWithUnknownParameter(obj: unknown): string[] {
    if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj as object);
    }
    return [];
}

export function listObjectKeysWithObjectParameter(obj: object): string[] {
    return Object.keys(obj);
}

export function listObjectsKeysWithRecordParameter(obj: Record<string, unknown>): string[] {
    return Object.keys(obj);
}
