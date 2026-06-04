const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

let todos = [
    {
        id: 1,
        title: 'Learn Docker'
    }
];

app.get('/', (req, res) => {
    res.send('Hello Docker!');
});

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Create todo
app.post('/todos', (req, res) => {
    const todo = {
        id: todos.length + 1,
        title: req.body.title
    };

    todos.push(todo);

    res.status(201).json(todo);
});

// Delete todo
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    todos = todos.filter(todo => todo.id !== id);

    res.json({
        message: 'Todo deleted'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});