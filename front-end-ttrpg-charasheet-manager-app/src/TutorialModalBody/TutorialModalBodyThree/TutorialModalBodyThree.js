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
			}
			// } else if (e.target.id === "dchero-title") {
			// 	state.targettitleInputValue = e.target.value;
			// } else if (e.target.id === "dchero-subtitle") {
			// 	state.targetsubtitleInputValue = e.target.value;
			// } else if (e.target.id === "dchero-over-eighteen" || e.target.id === "dchero-under-eighteen") {
			// 	state.targetoverEighteenInputValue = e.target.value;
			// } else if (e.target.id === "dchero-gender") {
			// 	state.targetgenderInputValue = e.target.value;
			// } else if (e.target.id === "dchero-hometown") {
			// 	state.targethometownInputValue = e.target.value;
			// } else if (e.target.id === "dchero-current-location") {
			// 	state.targetcurrentLocationInputValue = e.target.value;
			// } else if (e.target.id === "dchero-image") {
			// 	state.targetimageInputValue = e.target.value;
			// } else if (e.target.id === "dchero-affiliation") {
			// 	state.targetaffiliationInputValue = e.target.value;
			// } else if (e.target.id === "dchero-has-superpowers" || e.target.id === "dchero-has-no-superpowers") {
			// 	state.targethasSuperpowersInputValue = e.target.value;
			// } else if (e.target.id === "dchero-powers") {
			// 	state.targetpowersInputValue = e.target.value;
			// } else if (e.target.id === "dchero-abilities") {
			// 	state.targetabilitiesInputValue = e.target.value;
			// } else if (e.target.id === "dchero-arsenal") {
			// 	state.targetarsenalInputValue = e.target.value;
			// } else if (e.target.id === "dchero-weaknesses") {
			// 	state.targetweaknessesInputValue = e.target.value;
			// }
		}
		this.setState(state);
	}

	render() {
		console.log(this.props.postData, 'this is the initial data being rendered for the DC card');
		const state = this.state;
		state.targetCharacterInfo = this.props.postData.find(x => x.dungeons_and_dragons === true);
		state.nameInputValue = state.targetCharacterInfo.author;
		state.characterNameInputValue = state.targetCharacterInfo.dadcharacter_name;
		state.genderInputValue = state.targetCharacterInfo.dadcharacter_gender;
		state.classInputValue = state.targetCharacterInfo.dadcharacter_class;
		state.levelInputValue = state.targetCharacterInfo.dadcharacter_level;
		state.raceInputValue = state.targetCharacterInfo.dadcharacter_race;
		state.alignmentInputValue = state.targetCharacterInfo.dadcharacter_alignment;
		state.deityInputValue = state.targetCharacterInfo.dadcharacter_deity;
		state.sizeInputValue = state.targetCharacterInfo.dadcharacter_size;
		state.ageInputValue = state.targetCharacterInfo.dadcharacter_age;
		state.heightInputValue = state.targetCharacterInfo.dadcharacter_height;
		state.weightInfoValue = state.targetCharacterInfo.dadcharacter_weight;
		state.eyesInputValue = state.targetCharacterInfo.dadcharacter_eyes;
		state.hairInputValue = state.targetCharacterInfo.dadcharacter_hair;
		state.skinInputValue = state.targetCharacterInfo.dadcharacter_skin;
		state.strBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_str_base;
		state.strModInputValue = state.targetCharacterInfo.dadcharacter_attr_str_mod;
		state.strTempBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_str_tempbase;
		state.strTempModInputValue = state.targetCharacterInfo.dadcharacter_attr_str_tempmod;
		state.dexBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_dex_base;
		state.dexModInputValue = state.targetCharacterInfo.dadcharacter_attr_dex_mod;
		state.dexTempBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_dex_tempbase;
		state.dexTempModInputValue = state.targetCharacterInfo.dadcharacter_attr_dex_tempmod;
		state.conBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_con_base;
		state.conModInputValue = state.targetCharacterInfo.dadcharacter_attr_con_mod;
		state.conTempBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_con_tempbase;
		state.conTempModInputValue = state.targetCharacterInfo.dadcharacter_attr_con_tempmod;
		state.intBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_int_base;
		state.intModInputValue = state.targetCharacterInfo.dadcharacter_attr_int_mod;
		state.intTempBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_int_tempbase;
		state.intTempModInputValue = state.targetCharacterInfo.dadcharacter_attr_int_tempmod;
		state.wisBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_wis_base;
		state.wisModInputValue = state.targetCharacterInfo.dadcharacter_attr_wis_mod;
		state.wisTempBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_wis_tempbase;
		state.wisTempModInputValue = state.targetCharacterInfo.dadcharacter_attr_wis_tempmod;
		state.chaBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_cha_base;
		state.chaModInputValue = state.targetCharacterInfo.dadcharacter_attr_cha_mod;
		state.chaTempBaseInputValue = state.targetCharacterInfo.dadcharacter_attr_cha_tempbase;
		state.chaTempModInputValue = state.targetCharacterInfo.dadcharacter_attr_cha_tempmod;

		return (
			<div onSubmit={this.handleSubmit}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h5>Your New Character Sheet Stats</h5>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<form id='tutorial-data-list'>
								<div className="form-row">
									<div className="form-group col-6">
										<label className="form-control-label">Player Name:</label>
										<input type="text" className="form-control" id="1" value={state.nameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-6">
										<label className="form-control-label">Character Name:</label>
										<input type="text" className="form-control" value={state.characterNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-3">
										<label className="form-control-label">Class:</label>
										<input type="text" className="form-control" value={state.classInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Level:</label>
										<input type="number" className="form-control" value={state.levelInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-2">
										<label className="form-control-label">Race:</label>
										<input type="text" className="form-control" value={state.raceInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-3">
										<label className="form-control-label">Alignment:</label>
										<input type="text" className="form-control" value={state.alignmentInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-3">
										<label className="form-control-label">Deity:</label>
										<input type="text" className="form-control" value={state.deityInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Size:</label>
										<input type="text" className="form-control" value={state.sizeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Age:</label>
										<input type="number" className="form-control" value={state.ageInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Gender:</label>
										<input type="text" className="form-control" value={state.genderInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Height:</label>
										<input type="text" className="form-control" value={state.heightInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Weight:</label>
										<input type="text" className="form-control" value={state.weightInfoValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Eyes:</label>
										<input type="text" className="form-control" value={state.eyesInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Hair:</label>
										<input type="text" className="form-control" value={state.hairInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skin:</label>
										<input type="text" className="form-control" value={state.skinInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Base STR:</label>
										<input type="number" className="form-control" value={state.strBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">STR Modifier:</label>
										<input type="number" className="form-control" value={state.strModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. Base STR:</label>
										<input type="number" className="form-control" value={state.strTempBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. STR Modifier:</label>
										<input type="number" className="form-control" value={state.strTempModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Base DEX:</label>
										<input type="number" className="form-control" value={state.dexBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Modifier:</label>
										<input type="number" className="form-control" value={state.dexModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. Base DEX:</label>
										<input type="number" className="form-control" value={state.dexTempBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. DEX Modifier:</label>
										<input type="number" className="form-control" value={state.dexTempModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Base CON:</label>
										<input type="number" className="form-control" value={state.conBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CON Modifier:</label>
										<input type="number" className="form-control" value={state.conModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. Base CON:</label>
										<input type="number" className="form-control" value={state.conTempBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. CON Modifier:</label>
										<input type="number" className="form-control" value={state.conTempModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Base INT:</label>
										<input type="number" className="form-control" value={state.intBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Modifier:</label>
										<input type="number" className="form-control" value={state.intModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. Base INT:</label>
										<input type="number" className="form-control" value={state.intTempBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. INT Modifier:</label>
										<input type="number" className="form-control" value={state.intTempModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Base WIS:</label>
										<input type="number" className="form-control" value={state.wisBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">WIS Modifier:</label>
										<input type="number" className="form-control" value={state.wisModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. Base WIS:</label>
										<input type="number" className="form-control" value={state.wisTempBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. WIS Modifier:</label>
										<input type="number" className="form-control" value={state.wisTempModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Base CHA:</label>
										<input type="number" className="form-control" value={state.chaBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Modifier:</label>
										<input type="number" className="form-control" value={state.chaModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. Base CHA:</label>
										<input type="number" className="form-control" value={state.chaTempBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. CHA Modifier:</label>
										<input type="number" className="form-control" value={state.chaTempModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-group">
									<button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.props.nextModalPage}>Save</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}