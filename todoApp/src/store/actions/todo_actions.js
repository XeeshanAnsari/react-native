
export default class TodoActions{
    static GET_ALL_TODOS = 'GET_ALL_TODOS';
  
    static getAllTodos(todos){
        return {
            type: TodoActions.GET_ALL_TODOS,
            todos
        }
    }
}