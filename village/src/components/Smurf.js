import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <p>{props.id} id</p>
      <button onClick = {e => props.deleteSmurf(e, props.id)}>Delete Smurf</button>
      <button onClick = {e => props.setUpdateForm(e, props.smurf)}>Update Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

