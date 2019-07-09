import { combineReducers } from 'redux';
import students from './studentReducer';

export default combineReducers({
    students: students
});