import { sum, doNothing, getCurrentEnumAsString, createNewDog,
    selectNumbers, selectNumbersForMixedArray, listObjectKeysWithObjectParameter,
    listObjectKeysWithUnknownParameter, listObjectsKeysWithRecordParameter } from './functions';
import { List } from './new-types';
import { addNumbers } from './functions-HW';


const arrayNumbers = [1, 2, 3, 4, 5];
console.log(arrayNumbers);

const sumResult = sum(5, 10);
console.log(sumResult);

doNothing();

const value1 = getCurrentEnumAsString(List.one);
console.log(value1);

const value2 = getCurrentEnumAsString(List.two);
console.log(value2);

const value3 = getCurrentEnumAsString(List.three);
console.log(value3);

const patron = createNewDog('Buddy', 3, 'Golden Retriever', 60, 30);
console.log(patron);

const filteredArray = selectNumbers([1, 2, 3, 4]);
console.log(filteredArray);

const filteredArrayWithStringInput = selectNumbers(['1', '2', '3', '4']);
console.log(filteredArrayWithStringInput);

const mixedArray = selectNumbersForMixedArray([1, '2', 3, '4', 5]);
console.log(mixedArray);

const arr: (number | string)[] = [1, '2', 3, '4', 5];
arr.push('5');
console.log(arr);

const obj = { name: 'John', age: 30, city: 'New York' };

const keysWithUnknownParameter = listObjectKeysWithUnknownParameter(value2);
console.log(keysWithUnknownParameter);

const keysWithObjectParameter = listObjectKeysWithObjectParameter(obj);
console.log(keysWithObjectParameter);

const keysWithRecordParameter = listObjectsKeysWithRecordParameter({ name: 'Alice', age: 25, city: 'Los Angeles', [Symbol('Sym')]: 'Value' });
console.log(keysWithRecordParameter);

console.log('===============================================');
console.log('Testing addNumbers function with different inputs');
console.log('Result of addNumbers String and String: ', addNumbers('5', '10'));
console.log('Result of addNumbers Number and Number: ', addNumbers(5, 10));
console.log('Result of addNumbers Number and String: ', addNumbers(5, '10'));
console.log('Result of addNumbers Number and Object: ', addNumbers(5, {sum: 10, name: 'test'}));
