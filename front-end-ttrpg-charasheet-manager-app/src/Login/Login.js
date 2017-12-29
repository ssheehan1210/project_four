import React, { Component } from 'react';
import './Login.css';
import {Signin} from '../Signin/Signin.js';

export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			targetUsername: '',
			usernameReady: false,
			targetPassword: ''
		};
	}

	loggingIn = (e) => {
		const state = this.state;
		if (e.key === 'Enter') {
			if (e.target.id === 'user-input') {
				state.targetUsername = e.target.value;
				state.usernameReady = true;
				console.log(state.targetUsername, 'this is the username being input');
				this.setState(state);
			} else if (e.target.id === 'pass-input') {
				state.targetPassword = e.target.value;
				console.log('Username: ' + state.targetUsername + ' Password: ' + state.targetPassword);
				this.props.getLoggedIn(state.targetUsername, state.targetPassword);
			}
		}
	}

	// Signin createNewPost={this.props.createNewPost} creatingNewDungeonDragonSheet={this.props.creatingNewDungeonDragonSheet} createNewUser={this.props.createNewUser} megaJumpToLogin={this.props.megaJumpToLogin} jumpToSignin={this.props.jumpToSignin} jumpToLogin={this.props.jumpToLogin} currentId={this.props.currentId} currentUsername={this.props.currentUsername} currentPassword={this.props.currentPassword} postData={this.props.postData} userData={this.props.userData} goingToLogIn={this.props.goingToLogIn} goingToSignIn={this.props.goingToSignIn}


	render() {
		return (
			<div>
				{this.props.goingToLogIn ?
					<div className='container-fluid'>
						<div className='row'>
							<div className='col s12'>
								<h1>Table-Top RPG Character Sheet Manager</h1>
							</div>
						</div>
						<div className='row'>
							<div className='col s12'>
								<h3>User Log-In:</h3>
							</div>
						</div>
						<div className='row justify-content-center'>
							<div className='col-4' id='user-box'>
								<p id='user-label'>Username:</p>
							</div>
							<div className='col-1'></div>
							<div className='col-4 align-self-center' id='username-inputtext'>
								<input id='user-input' type='text' onKeyPress={this.loggingIn}/>
							</div>
							<div className='w-100'></div>
							<div className='col-4' id='pass-box'>
								<p className={this.state.usernameReady ? 'visible' : 'invisible'} id='pass-label'>Password:</p>
							</div>
							<div className='col-1'></div>
							<div className='col-4 align-self-center' id='password-inputtext'>
								<input className={this.state.usernameReady ? 'visible' : 'invisible'} id='pass-input' type='text' onKeyPress={this.loggingIn}/>
							</div>
						</div>
						<div className='row'>
							<div className='col s12'>
								<img className='img-fluid' src="#" alt='insert relevant visual here' />
							</div>
						</div>
					</div>
				:
					<Signin createNewUser={this.props.createNewUser} megaJumpToLogin={this.props.megaJumpToLogin} jumpToSignin={this.props.jumpToSignin} jumpToLogin={this.props.jumpToLogin} currentUsername={this.props.currentUsername} currentPassword={this.props.currentPassword} postData={this.props.postData} userData={this.props.userData} goingToLogIn={this.props.goingToLogIn} goingToSignIn={this.props.goingToSignIn} />
				}
			</div>
		)
	}
}