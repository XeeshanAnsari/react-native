const TodosController = require('../controllers/todo_controller');

module.exports = (app) => {

    app.post('/api/addTodo', TodosController.addTodo);
    app.get('/api/getAllTodos' , TodosController.getAllTodos);
    app.put('/api/completedSpecificTodo', TodosController.completedSpecificTodo);
    app.delete('/api/deleteTodo/:id', TodosController.deleteTodo);
    app.put('/api/editTodo/:id', TodosController.editTodo)

}