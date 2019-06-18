import React from 'react';
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



class UpdateForm extends React.Component {
    state= {
        smurf: this.props.activeSmurf
    }

    handleSubmit = event => {
        event.preventDefault();
       this.props.updateSmurf(this.state.smurf);
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

    render(){
        return(
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
              <StyledButton type="submit">Update Smurf</StyledButton>
            </form>
            
            
            
            
            
          </FormStyled>
        );
    }
}


export default UpdateForm;