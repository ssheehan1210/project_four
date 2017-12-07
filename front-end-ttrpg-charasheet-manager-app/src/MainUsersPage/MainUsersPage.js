import React, { Component } from 'react';
import './MainUsersPage.css';
import {TutorialModalBodyOne} from '../TutorialModalBody/TutorialModalBodyOne/TutorialModalBodyOne.js';
import {TutorialModalBodyTwo} from '../TutorialModalBody/TutorialModalBodyTwo/TutorialModalBodyTwo.js';

export class MainUsersPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			somethingWrongWithModal: false,
			modalArray: [{startedModalOne: false, startModalTwo: false, startModalThree: false}]
		};
	}

	nextModalPage = () => {
		const state = this.state;
		if (state.somethingWrongWithModal === false) {
			state.modalArray.map((item, i) => {
				console.log(item, 'this is the item');
				if (state.modalArray[i].startedModalOne === false) {
					console.log('Setting ModalOne to true');
					state.modalArray[i].startedModalOne = true;
				} else if (state.modalArray[i].startModalTwo === false) {
					console.log('Setting Modal Two to true');
					state.modalArray[i].startModalTwo = true;
				} else if (state.modalArray[i].startModalThree === false) {
					console.log('Setting Modal Three to true');
					state.modalArray[i].startModalThree = true;
				}
			});
		} else {
			console.log('Something is wrong with the modal. Fix it.');
		}
		this.setState(state);
	}

	render() {
		const state = this.state;
		const contentOfModal = state.modalArray.map((item, i) => {
			if (item.startModalTwo === true) {
				return (
					<div key={i}>
						<TutorialModalBodyTwo currentUsername={this.props.currentUsername} currentPassword={this.props.currentPassword} postData={this.props.postData} userData={this.props.userData} goingToLogIn={this.props.goingToLogIn} goingToSignIn={this.props.goingToSignIn} />
					</div>
				)
			} else if (item.startedModalOne === true) {
				return (
					<div key={i}>
						<TutorialModalBodyOne currentUsername={this.props.currentUsername} currentPassword={this.props.currentPassword} postData={this.props.postData} userData={this.props.userData} goingToLogIn={this.props.goingToLogIn} goingToSignIn={this.props.goingToSignIn} />
					</div>
				)
			}
		});

		return (
			<div>
				<div className="modal fade" id="tutorialModal" tabIndex="-1" role="dialog" aria-labelledby="tutorialModalTitle" aria-hidden="true">
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="tutorialModalTitle">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								{contentOfModal}
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary" onClick={this.nextModalPage}>Next Page</button>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h1>Table-Top RPG Character Sheet Manager</h1>
						</div>
					</div>



					<div className="row">
						<div className="col-12">
							<h4>Click here to start the tutorial:</h4><br/>
							<button className="btn btn-primary" type="button" data-toggle="modal" data-target="#tutorialModal" onClick={this.nextModalPage}>Start Tutorial</button>
							<br/>
							<br/>
						</div>
					</div>



					<div className="row">
						<div className="col-12">
							<h3>{this.props.currentUsername}'s Saved Character Sheets</h3>
						</div>
					</div>
					<div className="row" id="saved-sheets-buttons">
						<div className="col-4">
							<button id="button-one" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#saved-character-sheet-1" aria-expanded="false" aria-controls="saved-character-sheet-1">Character Sheet 1</button>
						</div>
						<div className="col-4">
							<button id="button-two" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#saved-character-sheet-2" aria-expanded="false" aria-controls="saved-character-sheet-2">Character Sheet 2</button>
						</div>
						<div className="col-4">
							<button id="button-three" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#saved-character-sheet-3" aria-expanded="false" aria-controls="saved-character-sheet-3" disabled>Character Sheet 3</button>
						</div>
					</div>
					<div className="row collapse" id="saved-character-sheet-1">
						<div className="col-12">
							<p>Character Sheet Here...</p>
						</div>
					</div>
					<div className="row collapse" id="saved-character-sheet-2">
						<div className="col-12">
							<p>Character Sheet Here...</p>
						</div>
					</div>
					<div className="row collapse" id="saved-character-sheet-3">
						<div className="col-12">
							<p>Character Sheet Here...</p>
						</div>
					</div>
					<div className="row invisible">
						<div className="col-12">
							<p>This text should be invisible</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}