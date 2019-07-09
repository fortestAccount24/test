import { connect } from 'react-redux';
import { createStudent } from '../actions';
import NewStudent from '../components/NewStudent';

const mapDispatchToProps = dispatch => {
  return {
    onAddStudent: student => {
      dispatch(createStudent(student));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewStudent);