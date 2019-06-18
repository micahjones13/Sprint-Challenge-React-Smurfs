import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';
import styled from 'styled-components';

const SmurfList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const StyledButton = styled.button`
 
  background: hotpink;
  color: #5500cc;
  height: 50px;
  margin: 4px 0;

  &:hover{
      background: #5500cc;
      color: hotpink;
  }
 
  
`;

class Smurfs extends Component {
  render() {
    return (
      <div>
      
        <h1>Smurf Village</h1>
        <SmurfList>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf = {this.props.deleteSmurf}
                setUpdateForm = {this.props.setUpdateForm}
                smurf = {smurf}
              />
            );
          })}
        </ul>
        </SmurfList>
        <Link to = '/smurf-form'><StyledButton>Add A Smurf!</StyledButton></Link>
      
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
