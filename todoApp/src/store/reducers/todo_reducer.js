import TodoActions from '../actions/todo_actions';

const INITIAL_STATE = {
    todos: []
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TodoActions.GET_ALL_TODOS:
            return Object.assign({}, ...state, { todos: action.todos });
        default:
            return state;
    }
}