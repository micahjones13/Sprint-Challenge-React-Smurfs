import React, { Component } from 'react';
import styled from 'styled-components';

const FormStyled = styled.div`
  form{
      display: flex;
      flex-direction: column;
      align-items: center;

      

     
      padding: 1%;
  }
  input{
      width: 20%;
      padding: 1%;
      margin: 4px 0;
      border-color: darkblue;
  }
`;
const StyledButton = styled.button`
  width: 10%
  background: hotpink;
  color: #5500cc;
  height: 50px;
  margin: 4px 0;

  &:hover{
      background: #5500cc;
      color: hotpink;
  }
 
  
`;

class SmurfForm extends Component {
  
    state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  

  handleSubmit = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state.smurf)
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  }

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ( {
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }))
  };

  render() {
    return (
      <FormStyled>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <StyledButton type="submit">Add to the village</StyledButton>
        </form>
        
        
        
        
        
      </FormStyled>
    );
  }
}

export default SmurfForm;


// handleInputChange = e => {
//   this.setState({ [e.target.name]: e.target.value });
// };

// class SmurfForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       smurf: {
//         name: '',
//         age: '',
//         height: ''
//       }
//     };
//   }