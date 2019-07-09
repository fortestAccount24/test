import { ADD_STUDENT, DELETE_STUDENT, FETCH_STUDENT } from '../actions/types';

export default function studentReducer(state = [], action) {
  switch (action.type) {
    case ADD_STUDENT:
      return [...state, action.payload];
    case DELETE_STUDENT:
      return state.filter(student => student._id !== action.payload.id);
      case FETCH_STUDENT:
      return action.students;
    default:
      return state;
  }
}