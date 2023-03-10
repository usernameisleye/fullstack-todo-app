// IMPORTS AND INITIALIZATIONS
const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES

//Create a todo 
app.post('/todos', async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todos (description) VALUES($1) RETURNING *", [description]);

        res.status(200).json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// Get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todos");
        res.status(200).json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
    }
})

// Get a todo
app.get('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [id]);
        res.status(200).json(todo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// Update a Todo
app.put('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {description} =req.body;
        const updateTodo = await pool.query("UPDATE todos SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo Was Updated")
    } catch (err) {
        console.error(err.message);        
    }
})

// Delete a todo
app.delete('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todos WHERE todo_id = $1", [id]);
        res.status(200).json("Todo was Deleted");

    } catch (err) {
        console.error(err.message)
    }
})

//SERVER
const PORT = 5000;

app.listen(PORT, () => {
    console.log("App is listening on port", PORT);
})