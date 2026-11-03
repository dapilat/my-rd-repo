async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const responseJson = await response.json();
    return responseJson;
}

const todos = await getTodos();
console.log('todos', todos);

const promises = [];
for (let i = 0; i < 10; i++) {
    promises.push(getTodos());
}

const results = await Promise.all(promises);
console.log('result', results.length);

