import React from 'react';

class NewStudent extends React.Component {
  state = {
    name: '',
    email: '',
    enrollmentNumber:0
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() && this.state.email.trim()) {
      this.props.onAddStudent(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      enrollmentNumber: 0
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="name"
              className="form-control"
              name="name"
              onChange={ this.handleInputChange }
              value={ this.state.name }
            />
          </div>
          <div className="form-group">
            <input
            type="number"
              placeholder="enrollmentNumber"
              className="form-control"
              name="enrollmentNumber"
              onChange={ this.handleInputChange }
              value={ this.state.enrollmentNumber }>
            </input>
          </div>
          <div className="form-group">
            <input
            type="email"
              placeholder="email"
              className="form-control"
              name="email"
              onChange={ this.handleInputChange }
              value={ this.state.email }>
            </input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add student</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewStudent;