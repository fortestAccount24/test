import { ADD_STUDENT, DELETE_STUDENT, FETCH_STUDENT } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3001/students';

export const createStudent = ({ name, email,enrollmentNumber }) => {
  return (dispatch) => {
    return axios.post(apiUrl, {name, email,enrollmentNumber})
      .then(response => {
        console.log(response.data)
        dispatch(createStudentSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createStudentSuccess =  (data) => {
  return {
    type: ADD_STUDENT,
    payload: {
      _id: data._id,
      name: data.name,
      email: data.email,
      enrollmentNumber: data.enrollmentNumber
    }
  }
};

export const deleteStudentSuccess = id => {
  return {
    type: DELETE_STUDENT,
    payload: {
      id
    }
  }
}

export const deleteStudent = id => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deleteStudentSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchStudents = (students) => {
  return {
    type: FETCH_STUDENT,
    students
  }
};

export const fetchAllStudents = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchStudents(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};