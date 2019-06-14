import React from 'react';

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
            <div className="UpdateForm">
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


export default UpdateForm;