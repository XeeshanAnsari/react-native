const Todo = require('../models/todo_model');

module.exports = {

    addTodo(req, res, next) {
        const todoProps = req.body;
        console.log(todoProps)
        Todo.create(todoProps)
            .then(todo => res.send(todo))
            .catch(next)
    },

    getAllTodos(req, res, next) {
        Todo.find({})
            .then((todos) => {
                res.send(todos)
            })
            .catch(next)
    },
    completedSpecificTodo(req, res, next) {
        const id = req.body.id;
        const status = req.body.status;
        console.log(id);
        Todo.findOneAndUpdate({ _id: id }, { completed: status })
            .then(todo => {
                res.send(todo)
            })
            .catch(next)
    },

    deleteTodo(req, res, next) {
        const id = req.params.id;
        Todo.findByIdAndRemove({ _id: id })
            .then((todo) => {
                res.send(todo)
            })
            .catch(next)
    },

    editTodo(req, res, next) {
        const id = req.params.id;
        const todoProps = req.body.updateTodo;
        console.log(todoProps)

        Todo.findByIdAndUpdate({ _id: id }, { todo: todoProps })
            .then(todo => {
                res.send(todo)
            })
            .catch(next)
    }


}