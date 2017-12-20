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
		state.maxHPInputValue = state.targetCharacterInfo.dadcharacter_hp_max;
		state.currentHPInputValue = state.targetCharacterInfo.dadcharacter_hp_current;
		state.nonlethalDamageInputValue = state.targetCharacterInfo.dadcharacter_hp_nonlethaldamage;
		state.speedInputValue = state.targetCharacterInfo.dadcharacter_speed;
		state.acTotalInputValue = state.targetCharacterInfo.dadcharacter_ac_total;
		state.acArmorBonusInputValue = state.targetCharacterInfo.dadcharacter_ac_armorbonus;
		state.acShieldBonusInputValue = state.targetCharacterInfo.dadcharacter_ac_shieldbonus;
		state.acDexModInputValue = state.targetCharacterInfo.dadcharacter_ac_dexmod;
		state.acNatArmorInputValue = state.targetCharacterInfo.dadcharacter_ac_natarmor;
		state.acDeflectModInputValue = state.targetCharacterInfo.dadcharacter_ac_deflectmod;
		state.acMiscModInputValue = state.targetCharacterInfo.dadcharacter_ac_miscmod;
		state.damageReductInputValue = state.targetCharacterInfo.dadcharacter_damagereduction;
		state.touchInputValue = state.targetCharacterInfo.dadcharacter_touch;
		state.flatFootInputValue = state.targetCharacterInfo.dadcharacter_flatfooted;
		state.initiativeTotalInputValue = state.targetCharacterInfo.dadcharacter_initiative_total;
		state.initiativeDexModInputValue = state.targetCharacterInfo.dadcharacter_initiative_dexmod;
		state.initiativeMiscModInputValue = state.targetCharacterInfo.dadcharacter_initiative_miscmod;
		state.fortitudeTotalInputValue = state.targetCharacterInfo.dadcharacter_fortitude_total;
		state.fortitudeBaseInputValue = state.targetCharacterInfo.dadcharacter_fortitude_base;
		state.fortitudeAbilityModInputValue = state.targetCharacterInfo.dadcharacter_fortitude_abilitymod;
		state.fortitudeMagicModInputValue = state.targetCharacterInfo.dadcharacter_fortitude_magicmod;
		state.fortitudeMiscModInputValue = state.targetCharacterInfo.dadcharacter_fortitude_miscmod;
		state.fortitudeTempModInputValue = state.targetCharacterInfo.dadcharacter_fortitude_tempmod;
		state.reflexTotalInputValue = state.targetCharacterInfo.dadcharacter_reflex_total;
		state.reflexBaseInputValue = state.targetCharacterInfo.dadcharacter_reflex_base;
		state.reflexAbilityModInputValue = state.targetCharacterInfo.dadcharacter_reflex_abilitymod;
		state.reflexMagicModInputValue = state.targetCharacterInfo.dadcharacter_reflex_magicmod;
		state.reflexMiscModInputValue = state.targetCharacterInfo.dadcharacter_reflex_miscmod;
		state.reflexTempModInputValue = state.targetCharacterInfo.dadcharacter_reflex_tempmod;
		state.willTotalInputValue = state.targetCharacterInfo.dadcharacter_will_total;
		state.willBaseInputValue = state.targetCharacterInfo.dadcharacter_will_base;
		state.willAbilityModInputValue = state.targetCharacterInfo.dadcharacter_will_abilitymod;
		state.willMagicModInputValue = state.targetCharacterInfo.dadcharacter_will_magicmod;
		state.willMiscModInputValue = state.targetCharacterInfo.dadcharacter_will_miscmod;
		state.willTempModInputValue = state.targetCharacterInfo.dadcharacter_will_tempmod;
		state.conditionalModInputValue = state.targetCharacterInfo.dadcharacter_conditionalmod;
		state.babInputValue = state.targetCharacterInfo.dadcharacter_bab;
		state.spellResistInputValue = state.targetCharacterInfo.dadcharacter_spellresistance;
		state.grappleTotalInputValue = state.targetCharacterInfo.dadcharacter_grapple_total;
		state.grappleBabInputValue = state.targetCharacterInfo.dadcharacter_grapple_bab;
		state.grappleStrModInputValue = state.targetCharacterInfo.dadcharacter_grapple_strmod;
		state.grappleSizeModInputValue = state.targetCharacterInfo.dadcharacter_grapple_sizemod;
		state.grappleMiscModInputValue = state.targetCharacterInfo.dadcharacter_grapple_miscmod;
		state.attackOneNameInputValue = state.targetCharacterInfo.dadcharacter_attackone_name;
		state.attackOneBonusInputValue = state.targetCharacterInfo.dadcharacter_attackone_bonus;
		state.attackOneDamageInputValue = state.targetCharacterInfo.dadcharacter_attackone_damage;
		state.attackOneCriticalInputValue = state.targetCharacterInfo.dadcharacter_attackone_critical;
		state.attackOneRangeInputValue = state.targetCharacterInfo.dadcharacter_attackone_range;
		state.attackOneTypeInputValue = state.targetCharacterInfo.dadcharacter_attackone_type;
		state.attackOneNoteInputValue = state.targetCharacterInfo.dadcharacter_attackone_note;
		state.attackOneAmmonameInputValue = state.targetCharacterInfo.dadcharacter_attackone_ammoname;
		state.attackOneAmmocounterInputValue = state.targetCharacterInfo.dadcharacter_attackone_ammocounter;
		state.attackTwoNameInputValue = state.targetCharacterInfo.dadcharacter_attacktwo_name;
		state.attackTwoBonusInputValue = state.targetCharacterInfo.dadcharacter_attacktwo_bonus;
		state.attackTwoDamageInputValue = state.targetCharacterInfo.dadcharacter_attacktwo_damage;
		state.attackTwoCriticalInputValue = state.targetCharacterInfo.dadcharacter_attacktwo_critical;
		state.attackTwoRangeInputValue = state.targetCharacterInfo.dadcharacter_attacktwo_range;
		state.attackTwoTypeInputValue = state.targetCharacterInfo.dadcharacter_attacktwo_type;
		state.attackTwoNoteInputValue = state.targetCharacterInfo.dadcharacter_attacktwo_note;
		state.attackTwoAmmonameInputValue = state.targetCharacterInfo.dadcharacter_attacktwo_ammoname;
		state.attackTwoAmmocounterInputValue = state.targetCharacterInfo.dadcharacter_attacktwo_ammocounter;
		state.attackThreeNameInputValue = state.targetCharacterInfo.dadcharacter_attackthree_name;
		state.attackThreeBonusInputValue = state.targetCharacterInfo.dadcharacter_attackthree_bonus;
		state.attackThreeDamageInputValue = state.targetCharacterInfo.dadcharacter_attackthree_damage;
		state.attackThreeCriticalInputValue = state.targetCharacterInfo.dadcharacter_attackthree_critical;
		state.attackThreeRangeInputValue = state.targetCharacterInfo.dadcharacter_attackthree_range;
		state.attackThreeTypeInputValue = state.targetCharacterInfo.dadcharacter_attackthree_type;
		state.attackThreeNoteInputValue = state.targetCharacterInfo.dadcharacter_attackthree_note;
		state.attackThreeAmmonameInputValue = state.targetCharacterInfo.dadcharacter_attackthree_ammoname;
		state.attackThreeAmmocounterInputValue = state.targetCharacterInfo.dadcharacter_attackthree_ammocounter;
		state.attackFourNameInputValue = state.targetCharacterInfo.dadcharacter_attackfour_name;
		state.attackFourBonusInputValue = state.targetCharacterInfo.dadcharacter_attackfour_bonus;
		state.attackFourDamageInputValue = state.targetCharacterInfo.dadcharacter_attackfour_damage;
		state.attackFourCriticalInputValue = state.targetCharacterInfo.dadcharacter_attackfour_critical;
		state.attackFourRangeInputValue = state.targetCharacterInfo.dadcharacter_attackfour_range;
		state.attackFourTypeInputValue = state.targetCharacterInfo.dadcharacter_attackfour_type;
		state.attackFourNoteInputValue = state.targetCharacterInfo.dadcharacter_attackfour_note;
		state.attackFourAmmonameInputValue = state.targetCharacterInfo.dadcharacter_attackfour_ammoname;
		state.attackFourAmmocounterInputValue = state.targetCharacterInfo.dadcharacter_attackfour_ammocounter;
		state.attackFiveNameInputValue = state.targetCharacterInfo.dadcharacter_attackfive_name;
		state.attackFiveBonusInputValue = state.targetCharacterInfo.dadcharacter_attackfive_bonus;
		state.attackFiveDamageInputValue = state.targetCharacterInfo.dadcharacter_attackfive_damage;
		state.attackFiveCriticalInputValue = state.targetCharacterInfo.dadcharacter_attackfive_critical;
		state.attackFiveRangeInputValue = state.targetCharacterInfo.dadcharacter_attackfive_range;
		state.attackFiveTypeInputValue = state.targetCharacterInfo.dadcharacter_attackfive_type;
		state.attackFiveNoteInputValue = state.targetCharacterInfo.dadcharacter_attackfive_note;
		state.attackFiveAmmonameInputValue = state.targetCharacterInfo.dadcharacter_attackfive_ammoname;
		state.attackFiveAmmocounterInputValue = state.targetCharacterInfo.dadcharacter_attackfive_ammocounter;
		state.maxClassRanksInputValue = state.targetCharacterInfo.dadcharacter_skill_maxclassranks;
		state.maxCrossClassRanksInputValue = state.targetCharacterInfo.dadcharacter_skill_maxcrossclassranks;
		state.appraiseUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_appraise_usable;
		state.appraiseSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_appraise_skillmod;
		state.appraiseAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_appraise_abilitymod;
		state.appraiseRankInputValue = state.targetCharacterInfo.dadcharacter_skill_appraise_rank;
		state.appraiseMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_appraise_miscmod;
		state.balanceUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_balance_usable;
		state.balanceSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_balance_skillmod;
		state.balanceAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_balance_abilitymod;
		state.balanceRankInputValue = state.targetCharacterInfo.dadcharacter_skill_balance_rank;
		state.balanceMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_balance_miscmod;

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
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Max HP:</label>
										<input type="number" className="form-control" value={state.maxHPInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Current HP:</label>
										<input type="number" className="form-control" value={state.currentHPInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Nonlethal Damage:</label>
										<input type="number" className="form-control" value={state.nonlethalDamageInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Speed:</label>
										<input type="number" className="form-control" value={state.speedInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Armor Class Total:</label>
										<input type="number" className="form-control" value={state.acTotalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Armor Bonus:</label>
										<input type="number" className="form-control" value={state.acArmorBonusInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Shield Bonus:</label>
										<input type="number" className="form-control" value={state.acShieldBonusInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Modifier:</label>
										<input type="number" className="form-control" value={state.acDexModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Size Modifier:</label>
										<input type="number" className="form-control" value={state.acSizeModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Natural Armor:</label>
										<input type="number" className="form-control" value={state.acNatArmorInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Deflection Modifier:</label>
										<input type="number" className="form-control" value={state.acDeflectModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc. Modifier:</label>
										<input type="number" className="form-control" value={state.acMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Damage Reduction:</label>
										<input type="number" className="form-control" value={state.damageReductInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Touch:</label>
										<input type="number" className="form-control" value={state.touchInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Flat-Footed:</label>
										<input type="number" className="form-control" value={state.flatFootInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Initiative Total:</label>
										<input type="number" className="form-control" value={state.initiativeTotalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Modifier:</label>
										<input type="number" className="form-control" value={state.initiativeDexModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc. Modifier:</label>
										<input type="number" className="form-control" value={state.initiativeMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Fortitude:</label>
										<input type="number" className="form-control" value={state.fortitudeTotalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Base Save:</label>
										<input type="number" className="form-control" value={state.fortitudeBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Ability Mod.:</label>
										<input type="number" className="form-control" value={state.fortitudeAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Magic Mod.:</label>
										<input type="number" className="form-control" value={state.fortitudeMagicModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc. Modifier:</label>
										<input type="number" className="form-control" value={state.fortitudeMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. Mod.:</label>
										<input type="number" className="form-control" value={state.fortitudeTempModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Reflex:</label>
										<input type="number" className="form-control" value={state.reflexTotalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Base Save:</label>
										<input type="number" className="form-control" value={state.reflexBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Ability Mod.:</label>
										<input type="number" className="form-control" value={state.reflexAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Magic Mod.:</label>
										<input type="number" className="form-control" value={state.reflexMagicModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc. Modifier:</label>
										<input type="number" className="form-control" value={state.reflexMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. Mod.:</label>
										<input type="number" className="form-control" value={state.reflexTempModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Will:</label>
										<input type="number" className="form-control" value={state.willTotalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Base Save:</label>
										<input type="number" className="form-control" value={state.willBaseInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Ability Mod.:</label>
										<input type="number" className="form-control" value={state.willAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Magic Mod.:</label>
										<input type="number" className="form-control" value={state.willMagicModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc. Modifier:</label>
										<input type="number" className="form-control" value={state.willMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Temp. Mod.:</label>
										<input type="number" className="form-control" value={state.willTempModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Conditional Modifier:</label>
										<input type="text" className="form-control" value={state.conditionalModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Base Attack Bonus:</label>
										<input type="number" className="form-control" value={state.babInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Spell Resistance:</label>
										<input type="number" className="form-control" value={state.spellResistInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Grapple Total:</label>
										<input type="number" className="form-control" value={state.grappleTotalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">BAB:</label>
										<input type="number" className="form-control" value={state.grappleBabInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Strength Mod.:</label>
										<input type="number" className="form-control" value={state.grappleStrModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Size Mod.:</label>
										<input type="number" className="form-control" value={state.grappleSizeModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc. Modifier:</label>
										<input type="number" className="form-control" value={state.grappleMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-4">
										<label className="form-control-label">Weapon 1 Name:</label>
										<input type="text" className="form-control" value={state.attackOneNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Attack Bonus:</label>
										<input type="number" className="form-control" value={state.attackOneBonusInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Damage:</label>
										<input type="number" className="form-control" value={state.attackOneDamageInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Critical:</label>
										<input type="number" className="form-control" value={state.attackOneCriticalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Range:</label>
										<input type="text" className="form-control" value={state.attackOneRangeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Type:</label>
										<input type="text" className="form-control" value={state.attackOneTypeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-9">
										<label className="form-control-label">Notes:</label>
										<input type="text" className="form-control" value={state.attackOneNoteInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-9">
										<label className="form-control-label">Ammunition:</label>
										<input type="text" className="form-control" value={state.attackOneAmmonameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-3">
										<label className="form-control-label">Amount of Ammo:</label>
										<input type="number" className="form-control" value={state.attackOneAmmocounterInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-4">
										<label className="form-control-label">Weapon 2 Name:</label>
										<input type="text" className="form-control" value={state.attackTwoNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Attack Bonus:</label>
										<input type="number" className="form-control" value={state.attackTwoBonusInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Damage:</label>
										<input type="number" className="form-control" value={state.attackTwoDamageInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Critical:</label>
										<input type="number" className="form-control" value={state.attackTwoCriticalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Range:</label>
										<input type="text" className="form-control" value={state.attackTwoRangeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Type:</label>
										<input type="text" className="form-control" value={state.attackTwoTypeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-9">
										<label className="form-control-label">Notes:</label>
										<input type="text" className="form-control" value={state.attackTwoNoteInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-9">
										<label className="form-control-label">Ammunition:</label>
										<input type="text" className="form-control" value={state.attackTwoAmmonameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-3">
										<label className="form-control-label">Amount of Ammo:</label>
										<input type="number" className="form-control" value={state.attackTwoAmmocounterInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-4">
										<label className="form-control-label">Weapon 3 Name:</label>
										<input type="text" className="form-control" value={state.attackThreeNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Attack Bonus:</label>
										<input type="number" className="form-control" value={state.attackThreeBonusInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Damage:</label>
										<input type="number" className="form-control" value={state.attackThreeDamageInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Critical:</label>
										<input type="number" className="form-control" value={state.attackThreeCriticalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Range:</label>
										<input type="text" className="form-control" value={state.attackThreeRangeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Type:</label>
										<input type="text" className="form-control" value={state.attackThreeTypeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-9">
										<label className="form-control-label">Notes:</label>
										<input type="text" className="form-control" value={state.attackThreeNoteInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-9">
										<label className="form-control-label">Ammunition:</label>
										<input type="text" className="form-control" value={state.attackThreeAmmonameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-3">
										<label className="form-control-label">Amount of Ammo:</label>
										<input type="number" className="form-control" value={state.attackThreeAmmocounterInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-4">
										<label className="form-control-label">Weapon 4 Name:</label>
										<input type="text" className="form-control" value={state.attackFourNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Attack Bonus:</label>
										<input type="number" className="form-control" value={state.attackFourBonusInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Damage:</label>
										<input type="number" className="form-control" value={state.attackFourDamageInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Critical:</label>
										<input type="number" className="form-control" value={state.attackFourCriticalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Range:</label>
										<input type="text" className="form-control" value={state.attackFourRangeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Type:</label>
										<input type="text" className="form-control" value={state.attackFourTypeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-9">
										<label className="form-control-label">Notes:</label>
										<input type="text" className="form-control" value={state.attackFourNoteInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-9">
										<label className="form-control-label">Ammunition:</label>
										<input type="text" className="form-control" value={state.attackFourAmmonameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-3">
										<label className="form-control-label">Amount of Ammo:</label>
										<input type="number" className="form-control" value={state.attackFourAmmocounterInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-4">
										<label className="form-control-label">Weapon 5 Name:</label>
										<input type="text" className="form-control" value={state.attackFiveNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Attack Bonus:</label>
										<input type="number" className="form-control" value={state.attackFiveBonusInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Damage:</label>
										<input type="number" className="form-control" value={state.attackFiveDamageInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Critical:</label>
										<input type="number" className="form-control" value={state.attackFiveCriticalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Range:</label>
										<input type="text" className="form-control" value={state.attackFiveRangeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Type:</label>
										<input type="text" className="form-control" value={state.attackFiveTypeInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-9">
										<label className="form-control-label">Notes:</label>
										<input type="text" className="form-control" value={state.attackFiveNoteInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-9">
										<label className="form-control-label">Ammunition:</label>
										<input type="text" className="form-control" value={state.attackFiveAmmonameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-3">
										<label className="form-control-label">Amount of Ammo:</label>
										<input type="number" className="form-control" value={state.attackFiveAmmocounterInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col">
										<label className="form-control-label">Max Number of Ranks:</label>
										<input type="number" className="form-control" value={state.maxClassRanksInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Current Number of Ranks:</label>
										<input type="number" className="form-control" value={state.maxCrossClassRanksInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.appraiseUsableInputValue ?
										<div className="form-group col align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.appraiseUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Appraise
												</label>
											</div>
										</div>
									:
										<div className="form-group col align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.appraiseUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Balance
												</label>
											</div>
										</div>
									}
									<div className="form-group col">
										<label className="form-control-label">Skill Mod.:</label>
										<input type="number" className="form-control" value={state.appraiseSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Ability Mod.:</label>
										<input type="number" className="form-control" value={state.appraiseAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank:</label>
										<input type="number" className="form-control" value={state.appraiseRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc. Mod.:</label>
										<input type="number" className="form-control" value={state.appraiseMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.balanceUsableInputValue ?
										<div className="form-group col align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.balanceUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Balance
												</label>
											</div>
										</div>
									:
										<div className="form-group col align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.balanceUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Balance
												</label>
											</div>
										</div>
									}
									<div className="form-group col">
										<label className="form-control-label">Skill Mod.:</label>
										<input type="number" className="form-control" value={state.balanceSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Ability Mod.:</label>
										<input type="number" className="form-control" value={state.balanceAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank:</label>
										<input type="number" className="form-control" value={state.balanceRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc. Mod.:</label>
										<input type="number" className="form-control" value={state.balanceMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row emptyFormSpace">
									<div className="col">
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