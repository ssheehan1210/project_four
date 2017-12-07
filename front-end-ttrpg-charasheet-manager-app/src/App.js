import React, { Component } from 'react';
import './App.css';
import {Login} from './Login/Login.js';
import {MainUsersPage} from './MainUsersPage/MainUsersPage.js';

const request = require('superagent');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: [],
      postData: [],
      goingToLogIn: false,
      goingToSignIn: false,
      isLoggedIn: false,
      currentUsername: '',
      currentPassword: ''
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'user data being pulled in');
        const state = this.state;
        state.userData = data;
        console.log(state.userData, 'this should be the same as the user data');
      })

    fetch('http://localhost:8080/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'post data being pulled in');
        const state = this.state;
        state.postData = data;
        console.log(state.postData, 'this should be the same as the post data');
        this.setState(state);
        console.log(this.state.userData, 'this is the resulting userData');
        console.log(this.state.postData, 'this is the resulting postData');
      })

    console.log(this.state, 'state after componentDidMount is done');
  }

  getCurrentData = () => {
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'user data being pulled in');
        const state = this.state;
        state.userData = data;
        console.log(state.userData, 'this should be the same as the user data');
      })

    fetch('http://localhost:8080/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'post data being pulled in');
        const state = this.state;
        state.postData = data;
        console.log(state.postData, 'this should be the same as the post data');
        this.setState(state);
        console.log(this.state.userData, 'this is the resulting userData');
        console.log(this.state.postData, 'this is the resulting postData');
      })
  }

  // getCurrentUserData = () => {
  //   fetch('http://localhost:8080/users')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data, 'new user data being pulled in');
  //       const state = this.state;
  //       state.userData = data;
  //       console.log(state.userData, 'new state of the user data');
  //       this.setState(state);
  //     })
  // }

  // getCurrentPostData = () => {
  //   fetch('http://localhost:8080/posts')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data, 'new post data being pulled in');
  //       const state = this.state;
  //       state.postData = data;
  //       console.log(state.postData, 'new state of the post data');
  //       this.setState(state);
  //     })
  // }

  getLoggedIn = (username, password) => {
    const state = this.state;
    state.currentUsername = username;
    state.currentPassword = password;
    for (let i = 0; i < state.userData.length; i++) {
      if (state.userData[i].name === state.currentUsername) {
        const foundData = state.userData.find(x => x.name === state.currentUsername);
        if (state.currentPassword === foundData.password) {
          console.log('User profile found!');
          state.isLoggedIn = true;
        } else {
          console.log('Incorrect password! Either the password you used does not match with the username, or the password not found in current data!');
          state.currentUsername = '';
          state.currentPassword = '';
        }
      }
    }
    this.setState(state);
    if (state.isLoggedIn === false) {
      console.log('User was not found! Either try a different username or see if something went wrong with the password.');
    }
  }

  createNewUser = (newName, pw) => {
    console.log('createNewUser is using ' + newName + ' for its name parameter and ' + pw + ' as its password parameter');
    request.post('http://localhost:8080/users')
      .send({_method: 'POST'})
      .send({ name: newName, password: pw })
      .end((err, data) => {
        this.getCurrentData();
      })
    console.log('Congrats! You created a new User Profile! Username: ' + newName + ' Password: ' + pw);
  }

  megaJumpToLogin = (word) => {
    if (word === 'double') {
      const state = this.state;
      state.goingToSignIn = true;
      state.goingToLogIn = true;
      this.setState(state);
    }
  }

  jumpToLogin = (word) => {
    if (word === 'go') {
      const state = this.state;
      state.goingToLogIn = true;
      this.setState(state);
    }
  }

  jumpToSignin = (word) => {
    if (word === 'sign') {
      const state = this.state;
      state.goingToSignIn = true;
      this.setState(state);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ?
          <MainUsersPage currentUsername={this.state.currentUsername} currentPassword={this.state.currentPassword} postData={this.state.postData} userData={this.state.userData} goingToLogIn={this.state.goingToLogIn} goingToSignIn={this.state.goingToSignIn} />
        :
          <Login megaJumpToLogin={this.megaJumpToLogin} jumpToSignin={this.jumpToSignin} jumpToLogin={this.jumpToLogin} currentUsername={this.state.currentUsername} currentPassword={this.state.currentPassword} getLoggedIn={this.getLoggedIn} createNewUser={this.createNewUser} getCurrentData={this.getCurrentData} postData={this.state.postData} userData={this.state.userData} goingToLogIn={this.state.goingToLogIn} goingToSignIn={this.state.goingToSignIn} />
        }
      </div>
    );
  }
}

export default App;
