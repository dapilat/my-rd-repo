fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        console.log(response);
        console.log(response.status);
        return response.json();
    })
    .then(todos => {
        console.log(todos);
    });
