import React, { Component } from 'react';
import './MainUsersPage.css';
import {TutorialModalBodyOne} from '../TutorialModalBody/TutorialModalBodyOne/TutorialModalBodyOne.js';
import {TutorialModalBodyTwo} from '../TutorialModalBody/TutorialModalBodyTwo/TutorialModalBodyTwo.js';
import {TutorialModalBodyThree} from '../TutorialModalBody/TutorialModalBodyThree/TutorialModalBodyThree.js';

export class MainUsersPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sampleData: '',
			somethingWrongWithModal: false,
			modalArray: [{startedModalOne: false, startModalTwo: false, startModalThree: false}],
			hasDungeonDragonSheet: false
		};
	}

	nextModalPage = () => {
		const state = this.state;
		if (state.somethingWrongWithModal === true) {
			console.log('The somethingWrongWithModal boolean is set to true. Find out what set it off.');
		} else if (state.somethingWrongWithModal === false) {
			console.log('Starting nextModalPage function now.');
			state.modalArray.forEach((item, i) => {
				console.log(item, 'this is the item for nextModalPage');
				if (item.startedModalOne === false) {
					console.log('Setting ModalOne to true');
					item.startedModalOne = true;
				} else if (item.startModalTwo === false) {
					console.log('Setting Modal Two to true');
					item.startModalTwo = true;
				} else if (item.startModalThree === false) {
					console.log('Setting Modal Three to true');
					item.startModalThree = true;
				} else {
					console.log('Resetting modal booleans back to false');
					state.modalArray[i].startedModalOne = false;
					state.modalArray[i].startModalTwo = false;
					state.modalArray[i].startModalThree = false;
					console.log(item, 'final state of the item');
				}
			});
			console.log('Ending nextModalPage function.');
		} else {
			console.log('Something is wrong with the modal that is not related to the somethingWrongWithModal boolean and/or the nextModalPage. Fix it.');
		}
		this.setState(state);
	}

	// startNewCharacter = () => {
	// 	this.props.creatingNewDungeonDragonSheet();
	// }

	// // <div className="row">
	// 	<div className="col-12">
	// 		<h4>Click here to create a character and start the tutorial:</h4><br/>
	// 		<button className="btn btn-primary" type="button" onClick={this.startNewCharacter}>Create Sheet</button>
	// 		<br/>
	// 		<br/>
	// 	</div>
	// </div>

	render() {
		const state = this.state;
		for (let h = 0; h < this.props.postData.length; h++) {
			console.log('Post User Id: ', this.props.postData[h].user_id);
			if (this.props.postData[h].user_id === this.props.currentId) {
				console.log(this.props.postData[h], 'Character Sheet Found.');
				state.sampleData = this.props.postData[h];
				state.sampleAuthor = state.sampleData.author;
				state.sampleCharacterName = state.sampleData.dadcharacter_name;
				state.sampleGenderInputValue = state.sampleData.dadcharacter_gender;
				state.sampleClassInputValue = state.sampleData.dadcharacter_class;
				state.sampleRaceInputValue = state.sampleData.dadcharacter_race;
				state.sampleAlignmentInputValue = state.sampleData.dadcharacter_alignment;
				state.sampleDeityInputValue = state.sampleData.dadcharacter_deity;
				state.sampleSizeInputValue = state.sampleData.dadcharacter_size;
				state.sampleHeightInputValue = state.sampleData.dadcharacter_height;
				state.sampleWeightInfoValue = state.sampleData.dadcharacter_weight;
				state.sampleEyesInputValue = state.sampleData.dadcharacter_eyes;
				state.sampleHairInputValue = state.sampleData.dadcharacter_hair;
				state.hasDungeonDragonSheet = true;
			}
		}
		if (state.hasDungeonDragonSheet === true) {
			console.log('Dungeons and Dragons info should be appearing for the user.');
		} else if (state.hasDungeonDragonSheet === false) {
			console.log('There should be an empty character sheet right now.');
		}

		const contentOfModal = state.modalArray.map((item, i) => {
			if (item.startModalThree === true) {
				return (
					<div key={i}>
						<TutorialModalBodyThree nextModalPage={this.nextModalPage} currentUsername={this.props.currentUsername} currentPassword={this.props.currentPassword} postData={this.props.postData} userData={this.props.userData} goingToLogIn={this.props.goingToLogIn} goingToSignIn={this.props.goingToSignIn} />
					</div>
				)
			} else if (item.startModalTwo === true) {
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
			} else {
				return (
					<div key={i}>
						<h5>No other conditions are being met for the modal. Make sure this was meant to happen.</h5>
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
								<h5 className="modal-title" id="tutorialModalTitle">Dungeons and Dragons: Player Character Tutorial</h5>
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



				<div className="container-fluid" id="main-page-container">
					<div className="row">
						<div className="col-12">
							<h1>Table-Top RPG Character Sheet Manager</h1>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<h4>Click here to open the tutorial:</h4><br/>
							<button className="btn btn-primary" type="button" data-toggle="modal" data-target="#tutorialModal" onClick={this.nextModalPage}>Start Tutorial</button>
							<br/>
							<br/>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<h3>Saved Character Sheets for {this.props.currentUsername}</h3>
						</div>
					</div>

					<div className="row" id="saved-sheets-buttons">
						<div className="col-4">
							<button id="button-one" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#saved-character-sheet-1" aria-expanded="false" aria-controls="saved-character-sheet-1">{this.props.currentUsername}'s Character Data List</button>
						</div>
						<div className="col-4">
							<button id="button-two" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#saved-character-sheet-2" aria-expanded="false" aria-controls="saved-character-sheet-2">Character Sheet Template</button>
						</div>
						<div className="col-4">
							<button id="button-three" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#saved-character-sheet-3" aria-expanded="false" aria-controls="saved-character-sheet-3" disabled>{this.props.currentUsername}'s Character Sheet</button>
						</div>
					</div>

					<div className="row collapse" id="saved-character-sheet-1">
						<div className="col-12">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-12">
										<h3>Dungeons and Dragons Character</h3>
									</div>
								</div>
								<div className="row justify-content-center">
								{this.state.hasDungeonDragonSheet ?
									<form>
										<div className="form-group">
											<label className="form-control-label">Player Name:</label>
											<input type="text" className="form-control" defaultValue={state.sampleAuthor} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Character Name:</label>
											<input type="text" className="form-control" defaultValue={state.sampleCharacterName} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Class:</label>
											<input type="text" className="form-control" defaultValue={state.sampleClassInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Race:</label>
											<input type="text" className="form-control" defaultValue={state.sampleRaceInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Alignment:</label>
											<input type="text" className="form-control" defaultValue={state.sampleAlignmentInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Deity:</label>
											<input type="text" className="form-control" defaultValue={state.sampleDeityInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Size:</label>
											<input type="text" className="form-control" defaultValue={state.sampleSizeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Gender:</label>
											<input type="text" className="form-control" defaultValue={state.sampleGenderInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Height:</label>
											<input type="text" className="form-control" defaultValue={state.sampleHeightInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Weight:</label>
											<input type="text" className="form-control" defaultValue={state.sampleWeightInfoValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Eyes:</label>
											<input type="text" className="form-control" defaultValue={state.sampleEyesInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
										<div className="form-group">
											<label className="form-control-label">Hair:</label>
											<input type="text" className="form-control" defaultValue={state.sampleHairInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
										</div>
									</form>
								:
									<div className="col-12">
										<p>No Dungeons and Dragons sheet available.</p>
									</div>
								}
								</div>
							</div>
						</div>
					</div>
					<div className="row collapse" id="saved-character-sheet-2">
						<div className="col-12">
							<h3>Official Character Sheet Version</h3>
							<img src="https://i.warosu.org/data/tg/img/0415/77/1438320251039.jpg" alt='Example of a Blank Dungeons and Dragons Character Sheet' />
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