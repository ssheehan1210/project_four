import React, { Component } from 'react';
import './FirstPage.css';

export class FirstPage extends Component {
	moveToLogin = () => {
		this.props.megaJumpToLogin('double');
	}

	moveToSignin = () => {
		this.props.jumpToSignin('sign');
	}

	render() {
		return (
			<div>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col s12'>
							<h1>Table-Top RPG Character Sheet Manager</h1>
						</div>
					</div>
					<div className='row'>
						<div className='col s12'>
							<h3>Front Page:</h3>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-3'>
							<p>Go To Log-In:</p>
						</div>
						<div className='col-3'>
							<button className="btn btn-primary" type="button" onClick={this.moveToLogin}>Log-In</button>
						</div>
						<div className='col-3'>
							<p>Go To Sign-Up:</p>
						</div>
						<div className='col-3'>
							<button className="btn btn-primary" type="button" onClick={this.moveToSignin}>Sign-Up</button>
						</div>
					</div>
					<div className='row'>
						<div className='col s12'>
							<img className='img-fluid' src="#" alt='insert relevant visual here' />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
