import { combineReducers } from 'redux';
import auth from './auth_reducer';
import nav from './nav_reducer';

export default combineReducers({
    auth,
    nav
});