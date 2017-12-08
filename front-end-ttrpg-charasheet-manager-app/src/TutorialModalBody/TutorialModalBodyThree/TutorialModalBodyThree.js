import React, { Component } from 'react';
import './TutorialModalBodyThree.css';

export class TutorialModalBodyThree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInputValue: '',
			characterProjectable: true,
			targetEditData: '',
			targetidInputValue: '',
			targetCharacterInfo: '',
			genderInputValue: '',
			characterNameInputValue: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		this.setState({value: e.target.value});
	}

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSubmit = (e) => {
		alert('A name was submitted: ', this.state.value);
		e.preventDefault();
	}

	currentCharacterVersion = () => {
		const state = this.state;
		state.targetEditData = this.props.userData.find(x => x.id === 1).author;
		this.setState(state);
	}

	handleInput = (e) => {
		const state = this.state;
		if (state.dungeons_and_dragons === true) {
			if (e.target.id === '1') {
				state.targetnameInputValue = e.target.value;
			} else if (e.target.id === "dchero-title") {
				state.targettitleInputValue = e.target.value;
			} else if (e.target.id === "dchero-subtitle") {
				state.targetsubtitleInputValue = e.target.value;
			} else if (e.target.id === "dchero-over-eighteen" || e.target.id === "dchero-under-eighteen") {
				state.targetoverEighteenInputValue = e.target.value;
			} else if (e.target.id === "dchero-gender") {
				state.targetgenderInputValue = e.target.value;
			} else if (e.target.id === "dchero-hometown") {
				state.targethometownInputValue = e.target.value;
			} else if (e.target.id === "dchero-current-location") {
				state.targetcurrentLocationInputValue = e.target.value;
			} else if (e.target.id === "dchero-image") {
				state.targetimageInputValue = e.target.value;
			} else if (e.target.id === "dchero-affiliation") {
				state.targetaffiliationInputValue = e.target.value;
			} else if (e.target.id === "dchero-has-superpowers" || e.target.id === "dchero-has-no-superpowers") {
				state.targethasSuperpowersInputValue = e.target.value;
			} else if (e.target.id === "dchero-powers") {
				state.targetpowersInputValue = e.target.value;
			} else if (e.target.id === "dchero-abilities") {
				state.targetabilitiesInputValue = e.target.value;
			} else if (e.target.id === "dchero-arsenal") {
				state.targetarsenalInputValue = e.target.value;
			} else if (e.target.id === "dchero-weaknesses") {
				state.targetweaknessesInputValue = e.target.value;
			}
		}
		this.setState(state);
	}

	render() {
		console.log(this.props.postData, 'this is the initial data being rendered for the DC card');
		const state = this.state;
		state.targetCharacterInfo = this.props.postData.find(x => x.dungeons_and_dragons === true);
		console.log(state.targetDcHero);
		state.nameInputValue = state.targetCharacterInfo.author;
		state.characterNameInputValue = state.targetCharacterInfo.dadcharacter_name;
		state.genderInputValue = state.targetCharacterInfo.dadcharacter_gender;
		state.classInputValue = state.targetCharacterInfo.dadcharacter_class;
		state.raceInputValue = state.targetCharacterInfo.dadcharacter_race;
		state.alignmentInputValue = state.targetCharacterInfo.dadcharacter_alignment;
		state.deityInputValue = state.targetCharacterInfo.dadcharacter_deity;
		state.sizeInputValue = state.targetCharacterInfo.dadcharacter_size;
		state.heightInputValue = state.targetCharacterInfo.dadcharacter_height;
		state.weightInfoValue = state.targetCharacterInfo.dadcharacter_weight;
		state.eyesInputValue = state.targetCharacterInfo.dadcharacter_eyes;
		state.hairInputValue = state.targetCharacterInfo.dadcharacter_hair;

		return (
			<div onSubmit={this.handleSubmit}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h5>Your New Character Sheet Stats</h5>
							<form>
								<div className="form-group">
									<label className="form-control-label">Player Name:</label>
									<input type="text" className="form-control" id="1" value={state.nameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Character Name:</label>
									<input type="text" className="form-control" value={state.characterNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Class:</label>
									<input type="text" className="form-control" value={state.classInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Race:</label>
									<input type="text" className="form-control" value={state.raceInputValue} placeholder="Half-Elf" onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Alignment:</label>
									<input type="text" className="form-control" value={state.alignmentInputValue} placeholder="Neutral Good" onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Deity:</label>
									<input type="text" className="form-control" value={state.deityInputValue} placeholder="N/A" onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Size:</label>
									<input type="text" className="form-control" value={state.sizeInputValue} placeholder="M" onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Gender:</label>
									<input type="text" className="form-control" value={state.genderInputValue} placeholder="Male" onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Height:</label>
									<input type="text" className="form-control" value={state.heightInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Weight:</label>
									<input type="text" className="form-control" value={state.weightInfoValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Eyes:</label>
									<input type="text" className="form-control" value={state.eyesInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<label className="form-control-label">Hair:</label>
									<input type="text" className="form-control" value={state.hairInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
								<div className="form-group">
									<button type="submit" className="btn btn-primary" data-dismiss="modal">Save</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}