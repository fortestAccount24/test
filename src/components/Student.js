import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ student: { name, email, enrollmentNumber ,_id }, onDelete }) => {
  return (
    <div style={ styles }>
      <h2>{ name }</h2>
      <p>{ email }</p>
      <p>{enrollmentNumber}</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
        Remove
      </button>
    </div>
  );
};