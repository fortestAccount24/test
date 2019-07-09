import React from 'react';
import { connect } from 'react-redux';
import Student from '../components/Student';
import { deleteStudent } from '../actions';

function StudentList({ students, onDelete }) {
  if(!students.length) {
    return (
      <div>
        No students
      </div>
    )
  }
  return (
    <div>
      {students.map(student => {
        return (
          <Student student={ student } onDelete={ onDelete } key={ student._id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteStudent(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);