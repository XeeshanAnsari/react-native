import TodoActions from '../actions/todo_actions';
import axios from 'axios';

const rootUrl = 'http://192.168.56.1:3090';
export default class TodoMiddleware {

    static addTodo(todo) {
        return dispatch => {
            console.log(todo)
            axios.post(`${rootUrl}/api/addTodo`, { todo })
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        dispatch(TodoMiddleware.getAllTodos());
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    static getAllTodos() {
        return (dispatch) => {
            axios.get(`${rootUrl}/api/getAllTodos`)
                .then((response) => {
                    console.log(response.data)
                    if (response.status === 200) {
                        dispatch(TodoActions.getAllTodos(response.data));
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    static completedTodo(id, status) {
        return (dispatch) => {
            console.log("id", id);
            axios.put(`${rootUrl}/api/completedSpecificTodo`, { id: id, status: status })
                .then((response) => {
                    dispatch(TodoMiddleware.getAllTodos());
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    static deleteTodo(id) {
        return (dispatch) => {
            console.log("delete id", id)
            axios.delete(`${rootUrl}/api/deleteTodo/${id}`)
                .then((response) => {
                    dispatch(TodoMiddleware.getAllTodos())
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    static editTodo(id, updateTodo) {
        return (dispatch) => {
            console.log("Edit Id", id);
            axios.put(`${rootUrl}/api/editTodo/${id}`, { updateTodo })
                .then((response) => {
                    dispatch(TodoMiddleware.getAllTodos())
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

}