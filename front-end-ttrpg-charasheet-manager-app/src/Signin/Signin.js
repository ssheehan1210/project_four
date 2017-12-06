import React, { Component } from 'react';
import './Signin.css';
import {FirstPage} from '../FirstPage/FirstPage.js';

export class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newUsernameReady: false,
			newUserName: '',
			newPassword: ''
		};
	}

	signingUp = (e) => {
		const state = this.state;
		if (e.key === 'Enter') {
			if (e.target.id === 'new-user-input') {
				state.newUserName = e.target.value;
				state.newUsernameReady = true;
				console.log(state.newUserName, 'this is the new username being input');
				this.setState(state);
			} else if (e.target.id === 'new-pass-input') {
				state.newPassword = e.target.value;
				console.log('New Username: ' + state.newUserName + ' New Password: ' + state.newPassword);
				this.props.createNewUser(state.newUserName, state.newPassword);
				this.props.jumpToLogin('go');
			}
		}
	}

	nowJumpToLogin = () => {
		this.props.jumpToLogin('go');
	}

	render() {
		return (
			<div>
				{this.props.goingToSignIn ?
					<div className='container-fluid'>
						<div className='row'>
							<div className='col s12'>
								<h1>Table-Top RPG Character Sheet Manager</h1>
							</div>
						</div>
						<div className='row'>
							<div className='col s12'>
								<h3>User Sign-Up:</h3>
							</div>
						</div>
						<div className='row justify-content-center'>
							<div className='col-12'>
								<form id='signUpForm' name='signUpForm'>
									<div className='form-group' id='new-user-box'>
										<label className='col-form-label' id='new-user-label'>Username:</label>
										<input className='form-control' id='new-user-input' name='new-user-input' type='text' placeholder='Press enter or return when done...' onKeyPress={this.signingUp}/>
									</div>
									<div className='form-group' id='new-pass-box'>
										<label className={this.state.newUsernameReady ? 'col-form-label visible' : 'col-form-label invisible'} id='new-pass-label'>Password:</label>
										<input className={this.state.newUsernameReady ? 'form-control visible' : 'form-control invisible'} id='new-pass-input' name='new-pass-input' type='text' placeholder='Press enter or return when done...' onKeyPress={this.signingUp}/>
									</div>
								</form>
							</div>
						</div>
						<div className='row'>
							<div className='col s12'>
								<img className='img-fluid' src="#" alt='insert relevant visual here' />
							</div>
						</div>
					</div>
				:
					<FirstPage jumpToSignin={this.props.jumpToSignin} megaJumpToLogin={this.props.megaJumpToLogin} currentUsername={this.props.currentUsername} currentPassword={this.props.currentPassword} getLoggedIn={this.props.getLoggedIn} createNewUser={this.props.createNewUser} getCurrentData={this.props.getCurrentData} postData={this.props.postData} userData={this.props.userData} goingToLogIn={this.props.goingToLogIn} goingToSignIn={this.props.goingToSignIn} />
				}
			</div>
		)
	}
}