import express from 'express';


const app = express();

const users = [
    'Yanka',
    'Renato',
    'Rayanne',
    'Roberto',
    'Amanda'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUsers);
});

app.get('/users/:id', (request,response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users',(request, response) => {
    const user = {
        name: 'Yanka',
        email:'yanka@mail.com'
    };
    return response.json(user);
});

app.listen(3333);
