import {queryDb, doAnotherQuery} from './try-catch.js';

console.log('--------------try-catch---------------------');
const result = queryDb('Select * FROM table');
console.log(result);

let result2;
const query = 'DELETE FROM table';
try {
    result2 = queryDb(query);
} catch (error) {
    if (error.message === 'Only SELECT queries are allowed') {
        result2 = doAnotherQuery(query);
    } else throw error;
    console.error('Error:', error.message);
}
console.log(result2);
