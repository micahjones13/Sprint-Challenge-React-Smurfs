import React from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div`
    border: 5px solid black;
   
    margin: 4px 0;
    background: #5500cc
    color: white;
    &:hover{
        background: hotpink;
        color: #5500cc;
    }

`;
const StyledButton = styled.button`
 
  background: hotpink;
  color: #5500cc;
  height: 50px;
  margin: 15px 35px;

  &:hover{
      background: #5500cc;
      color: hotpink;
  }
 
  
`;
const Smurf = props => {
  return (
    <SmurfDiv>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <StyledButton onClick = {e => props.deleteSmurf(e, props.id)}>Delete Smurf</StyledButton>
      <StyledButton onClick = {e => props.setUpdateForm(e, props.smurf)}>Update Smurf</StyledButton>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

