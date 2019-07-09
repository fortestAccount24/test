import React, { Component } from 'react';
import CreateStudent from './containers/CreateStudent';
import StudentList from './containers/StudentList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const stylesApp = {
  marginTop: 40
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={ stylesApp }>
          <div className="col-md-6">
            <CreateStudent/>
          </div>
          <div className="col-md-6">
            <StudentList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
