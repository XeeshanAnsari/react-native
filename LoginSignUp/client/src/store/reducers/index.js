import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
    Auth: AuthReducer
});
export default rootReducer;