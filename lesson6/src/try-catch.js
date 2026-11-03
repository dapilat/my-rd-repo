export function queryDb(query) {
    if (!query.toLocaleLowerCase().includes('select')) {
        throw new Error('Only SELECT queries are allowed');
    }
    return {status: 'success', data: [{field1: 3, filed2: 'value'}]};
}

export function doAnotherQuery(query) {
    console.log('Executing alternative query', query);
    return {status: 'success', data: [{field1: 5, filed2: 'another value from alternative query'}]};
}
