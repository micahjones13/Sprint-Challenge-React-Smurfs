import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';
import UpdateForm from './components/UpdateForm';
import styled from 'styled-components';

const StyledApp = styled.div`
  background: lightblue;
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res);
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }

  addSmurf = smurf => {
    axios 
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(res);
        this.setState ({ smurfs: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res);
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }
  setUpdateForm = (e, smurf) => {
    e.preventDefault();
    this.setState({ activeSmurf: smurf });
    this.props.history.push('/update-form');
  }

  updateSmurf = (smurf) => {
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <StyledApp>
      
        <NavBar />
        <Route
          exact path = '/'
          render = {props => (
            <Smurfs
              {...props}
              smurfs = {this.state.smurfs}
              deleteSmurf = {this.deleteSmurf}
              setUpdateForm = {this.setUpdateForm}
            />
          )}
        />

        <Route
          path = '/smurf-form'
          render = {props => (
            <SmurfForm
              {...props}
              addSmurf = {this.addSmurf}
            />
          )}
        />

        <Route
        path = '/update-form'
        render = {props => (
          <UpdateForm
            {...props}
            updateSmurf = {this.updateSmurf}
            activeSmurf = {this.state.activeSmurf}
          />
        )}
      />

       
      </StyledApp>
    );
  }
}

export default App;


// <Smurfs
// smurfs={this.state.smurfs}
// />
// <SmurfForm 
// addSmurf = {this.addSmurf}
// />