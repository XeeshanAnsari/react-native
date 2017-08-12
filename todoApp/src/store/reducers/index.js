import { combineReducers } from 'redux';
import TodosReducer from './todo_reducer';

const rootReducer = combineReducers({
    Todos: TodosReducer
});
export default rootReducer;