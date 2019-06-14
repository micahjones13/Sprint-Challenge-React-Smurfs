import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="SmurfForm">
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
          <button type="submit">Add to the village</button>
        </form>
        
        
        
        
        
      </div>
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