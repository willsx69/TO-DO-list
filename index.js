const express = require('express');
const app = express();


app.get ('/home', (req , res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});  

app.post('/addtask', (req, res) => {
    // Logic to add a task
    res.send('Task added');
}); 

app.put ('/updatetask/:id', (req, res) => {
    const taskId = req.params.id});   

app.delete('/deletetask/:id', (req, res) =>{
    const taskId = req.params.id;
    // Logic to delete a task by id
    res.send(`Task with id ${taskId} deleted`);
});

