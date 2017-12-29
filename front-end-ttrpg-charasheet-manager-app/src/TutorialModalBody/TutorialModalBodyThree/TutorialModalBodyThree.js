import React, { Component } from 'react';
import './TutorialModalBodyThree.css';

export class TutorialModalBodyThree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInputValue: '',
			targetEditData: '',
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
		}
		this.setState(state);
	}

	render() {
		console.log(this.props.postData, 'this is the initial data being rendered for the post');
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
		state.bluffUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_bluff_usable;
		state.bluffSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_bluff_skillmod;
		state.bluffAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_bluff_abilitymod;
		state.bluffRankInputValue = state.targetCharacterInfo.dadcharacter_skill_bluff_rank;
		state.bluffMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_bluff_miscmod;
		state.climbUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_climb_usable;
		state.climbSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_climb_skillmod;
		state.climbAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_climb_abilitymod;
		state.climbRankInputValue = state.targetCharacterInfo.dadcharacter_skill_climb_rank;
		state.climbMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_climb_miscmod;
		state.concentrationUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_concentration_usable;
		state.concentrationSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_concentration_skillmod;
		state.concentrationAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_concentration_abilitymod;
		state.concentrationRankInputValue = state.targetCharacterInfo.dadcharacter_skill_concentration_rank;
		state.concentrationMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_concentration_miscmod;
		state.craftOneUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_craftone_usable;
		state.craftOneNameInputValue = state.targetCharacterInfo.dadcharacter_skill_craftone_name;
		state.craftOneSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_craftone_skillmod;
		state.craftOneAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_craftone_abilitymod;
		state.craftOneRankInputValue = state.targetCharacterInfo.dadcharacter_skill_craftone_rank;
		state.craftOneMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_craftone_miscmod;
		state.craftTwoUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_crafttwo_usable;
		state.craftTwoNameInputValue = state.targetCharacterInfo.dadcharacter_skill_crafttwo_name;
		state.craftTwoSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_crafttwo_skillmod;
		state.craftTwoAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_crafttwo_abilitymod;
		state.craftTwoRankInputValue = state.targetCharacterInfo.dadcharacter_skill_crafttwo_rank;
		state.craftTwoMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_crafttwo_miscmod;
		state.craftThreeUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_craftthree_usable;
		state.craftThreeNameInputValue = state.targetCharacterInfo.dadcharacter_skill_craftthree_name;
		state.craftThreeSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_craftthree_skillmod;
		state.craftThreeAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_craftthree_abilitymod;
		state.craftThreeRankInputValue = state.targetCharacterInfo.dadcharacter_skill_craftthree_rank;
		state.craftThreeMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_craftthree_miscmod;
		state.decipherScriptUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_decipherscript_usable;
		state.decipherScriptSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_decipherscript_skillmod;
		state.decipherScriptAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_decipherscript_abilitymod;
		state.decipherScriptRankInputValue = state.targetCharacterInfo.dadcharacter_skill_decipherscript_rank;
		state.decipherScriptMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_decipherscript_miscmod;
		state.diplomacyUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_diplomacy_usable;
		state.diplomacySkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_diplomacy_skillmod;
		state.diplomacyAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_diplomacy_abilitymod;
		state.diplomacyRankInputValue = state.targetCharacterInfo.dadcharacter_skill_diplomacy_rank;
		state.diplomacyMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_diplomacy_miscmod;
		state.disableDeviceUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_disabledevice_usable;
		state.disableDeviceSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_disabledevice_skillmod;
		state.disableDeviceAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_disabledevice_abilitymod;
		state.disableDeviceRankInputValue = state.targetCharacterInfo.dadcharacter_skill_disabledevice_rank;
		state.disableDeviceMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_disabledevice_miscmod;
		state.disguiseUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_disguise_usable;
		state.disguiseSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_disguise_skillmod;
		state.disguiseAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_disguise_abilitymod;
		state.disguiseRankInputValue = state.targetCharacterInfo.dadcharacter_skill_disguise_rank;
		state.disguiseMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_disguise_miscmod;
		state.escapeArtistUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_escapeartist_usable;
		state.escapeArtistSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_escapeartist_skillmod;
		state.escapeArtistAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_escapeartist_abilitymod;
		state.escapeArtistRankInputValue = state.targetCharacterInfo.dadcharacter_skill_escapeartist_rank;
		state.escapeArtistMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_escapeartist_miscmod;
		state.forgeryUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_forgery_usable;
		state.forgerySkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_forgery_skillmod;
		state.forgeryAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_forgery_abilitymod;
		state.forgeryRankInputValue = state.targetCharacterInfo.dadcharacter_skill_forgery_rank;
		state.forgeryMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_forgery_miscmod;
		state.gatherInformationUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_gatherinfo_usable;
		state.gatherInformationSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_gatherinfo_skillmod;
		state.gatherInformationAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_gatherinfo_abilitymod;
		state.gatherInformationRankInputValue = state.targetCharacterInfo.dadcharacter_skill_gatherinfo_rank;
		state.gatherInformationMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_gatherinfo_miscmod;
		state.handleAnimalUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_handleanimal_usable;
		state.handleAnimalSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_handleanimal_skillmod;
		state.handleAnimalAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_handleanimal_abilitymod;
		state.handleAnimalRankInputValue = state.targetCharacterInfo.dadcharacter_skill_handleanimal_rank;
		state.handleAnimalMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_handleanimal_miscmod;
		state.healUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_heal_usable;
		state.healSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_heal_skillmod;
		state.healAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_heal_abilitymod;
		state.healRankInputValue = state.targetCharacterInfo.dadcharacter_skill_heal_rank;
		state.healMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_heal_miscmod;
		state.hideUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_hide_usable;
		state.hideSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_hide_skillmod;
		state.hideAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_hide_abilitymod;
		state.hideRankInputValue = state.targetCharacterInfo.dadcharacter_skill_hide_rank;
		state.hideMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_hide_miscmod;
		state.intimidateUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_intimidate_usable;
		state.intimidateSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_intimidate_skillmod;
		state.intimidateAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_intimidate_abilitymod;
		state.intimidateRankInputValue = state.targetCharacterInfo.dadcharacter_skill_intimidate_rank;
		state.intimidateMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_intimidate_miscmod;
		state.jumpUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_jump_usable;
		state.jumpSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_jump_skillmod;
		state.jumpAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_jump_abilitymod;
		state.jumpRankInputValue = state.targetCharacterInfo.dadcharacter_skill_jump_rank;
		state.jumpMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_jump_miscmod;
		state.knowledgeOneUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgeone_usable;
		state.knowledgeOneNameInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgeone_name;
		state.knowledgeOneSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgeone_skillmod;
		state.knowledgeOneAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgeone_abilitymod;
		state.knowledgeOneRankInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgeone_rank;
		state.knowledgeOneMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgeone_miscmod;
		state.knowledgeTwoUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgetwo_usable;
		state.knowledgeTwoNameInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgetwo_name;
		state.knowledgeTwoSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgetwo_skillmod;
		state.knowledgeTwoAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgetwo_abilitymod;
		state.knowledgeTwoRankInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgetwo_rank;
		state.knowledgeTwoMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgetwo_miscmod;
		state.knowledgeThreeUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgethree_usable;
		state.knowledgeThreeNameInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgethree_name;
		state.knowledgeThreeSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgethree_skillmod;
		state.knowledgeThreeAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgethree_abilitymod;
		state.knowledgeThreeRankInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgethree_rank;
		state.knowledgeThreeMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgethree_miscmod;
		state.knowledgeFourUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefour_usable;
		state.knowledgeFourNameInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefour_name;
		state.knowledgeFourSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefour_skillmod;
		state.knowledgeFourAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefour_abilitymod;
		state.knowledgeFourRankInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefour_rank;
		state.knowledgeFourMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefour_miscmod;
		state.knowledgeFiveUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefive_usable;
		state.knowledgeFiveNameInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefive_name;
		state.knowledgeFiveSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefive_skillmod;
		state.knowledgeFiveAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefive_abilitymod;
		state.knowledgeFiveRankInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefive_rank;
		state.knowledgeFiveMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_knowledgefive_miscmod;
		state.listenUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_listen_usable;
		state.listenSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_listen_skillmod;
		state.listenAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_listen_abilitymod;
		state.listenRankInputValue = state.targetCharacterInfo.dadcharacter_skill_listen_rank;
		state.listenMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_listen_miscmod;
		state.moveSilentlyUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_movesilent_usable;
		state.moveSilentlySkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_movesilent_skillmod;
		state.moveSilentlyAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_movesilent_abilitymod;
		state.moveSilentlyRankInputValue = state.targetCharacterInfo.dadcharacter_skill_movesilent_rank;
		state.moveSilentlyMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_movesilent_miscmod;
		state.openLockUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_openlock_usable;
		state.openLockSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_openlock_skillmod;
		state.openLockAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_openlock_abilitymod;
		state.openLockRankInputValue = state.targetCharacterInfo.dadcharacter_skill_openlock_rank;
		state.openLockMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_openlock_miscmod;
		state.performOneUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_performone_usable;
		state.performOneNameInputValue = state.targetCharacterInfo.dadcharacter_skill_performone_name;
		state.performOneSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_performone_skillmod;
		state.performOneAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_performone_abilitymod;
		state.performOneRankInputValue = state.targetCharacterInfo.dadcharacter_skill_performone_rank;
		state.performOneMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_performone_miscmod;
		state.performTwoUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_performtwo_usable;
		state.performTwoNameInputValue = state.targetCharacterInfo.dadcharacter_skill_performtwo_name;
		state.performTwoSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_performtwo_skillmod;
		state.performTwoAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_performtwo_abilitymod;
		state.performTwoRankInputValue = state.targetCharacterInfo.dadcharacter_skill_performtwo_rank;
		state.performTwoMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_performtwo_miscmod;
		state.performThreeUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_performthree_usable;
		state.performThreeNameInputValue = state.targetCharacterInfo.dadcharacter_skill_performthree_name;
		state.performThreeSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_performthree_skillmod;
		state.performThreeAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_performthree_abilitymod;
		state.performThreeRankInputValue = state.targetCharacterInfo.dadcharacter_skill_performthree_rank;
		state.performThreeMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_performthree_miscmod;
		state.professionOneUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_professionone_usable;
		state.professionOneNameInputValue = state.targetCharacterInfo.dadcharacter_skill_professionone_name;
		state.professionOneSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_professionone_skillmod;
		state.professionOneAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_professionone_abilitymod;
		state.professionOneRankInputValue = state.targetCharacterInfo.dadcharacter_skill_professionone_rank;
		state.professionOneMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_professionone_miscmod;
		state.professionTwoUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_professiontwo_usable;
		state.professionTwoNameInputValue = state.targetCharacterInfo.dadcharacter_skill_professiontwo_name;
		state.professionTwoSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_professiontwo_skillmod;
		state.professionTwoAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_professiontwo_abilitymod;
		state.professionTwoRankInputValue = state.targetCharacterInfo.dadcharacter_skill_professiontwo_rank;
		state.professionTwoMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_professiontwo_miscmod;
		state.rideUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_ride_usable;
		state.rideSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_ride_skillmod;
		state.rideAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_ride_abilitymod;
		state.rideRankInputValue = state.targetCharacterInfo.dadcharacter_skill_ride_rank;
		state.rideMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_ride_miscmod;
		state.searchUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_search_usable;
		state.searchSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_search_skillmod;
		state.searchAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_search_abilitymod;
		state.searchRankInputValue = state.targetCharacterInfo.dadcharacter_skill_search_rank;
		state.searchMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_search_miscmod;
		state.senseMotiveUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_sensemotive_usable;
		state.senseMotiveSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_sensemotive_skillmod;
		state.senseMotiveAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_sensemotive_abilitymod;
		state.senseMotiveRankInputValue = state.targetCharacterInfo.dadcharacter_skill_sensemotive_rank;
		state.senseMotiveMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_sensemotive_miscmod;
		state.sleightOfHandUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_sleightofhand_usable;
		state.sleightOfHandSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_sleightofhand_skillmod;
		state.sleightOfHandAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_sleightofhand_abilitymod;
		state.sleightOfHandRankInputValue = state.targetCharacterInfo.dadcharacter_skill_sleightofhand_rank;
		state.sleightOfHandMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_sleightofhand_miscmod;
		state.spellcraftUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_spellcraft_usable;
		state.spellcraftSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_spellcraft_skillmod;
		state.spellcraftAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_spellcraft_abilitymod;
		state.spellcraftRankInputValue = state.targetCharacterInfo.dadcharacter_skill_spellcraft_rank;
		state.spellcraftMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_spellcraft_miscmod;
		state.spotUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_spot_usable;
		state.spotSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_spot_skillmod;
		state.spotAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_spot_abilitymod;
		state.spotRankInputValue = state.targetCharacterInfo.dadcharacter_skill_spot_rank;
		state.spotMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_spot_miscmod;
		state.survivalUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_survival_usable;
		state.survivalSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_survival_skillmod;
		state.survivalAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_survival_abilitymod;
		state.survivalRankInputValue = state.targetCharacterInfo.dadcharacter_skill_survival_rank;
		state.survivalMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_survival_miscmod;
		state.swimUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_swim_usable;
		state.swimSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_swim_skillmod;
		state.swimAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_swim_abilitymod;
		state.swimRankInputValue = state.targetCharacterInfo.dadcharacter_skill_swim_rank;
		state.swimMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_swim_miscmod;
		state.tumbleUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_tumble_usable;
		state.tumbleSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_tumble_skillmod;
		state.tumbleAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_tumble_abilitymod;
		state.tumbleRankInputValue = state.targetCharacterInfo.dadcharacter_skill_tumble_rank;
		state.tumbleMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_tumble_miscmod;
		state.useMagicDeviceUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_usemagicdevice_usable;
		state.useMagicDeviceSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_usemagicdevice_skillmod;
		state.useMagicDeviceAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_usemagicdevice_abilitymod;
		state.useMagicDeviceRankInputValue = state.targetCharacterInfo.dadcharacter_skill_usemagicdevice_rank;
		state.useMagicDeviceMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_usemagicdevice_miscmod;
		state.useRopeUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_userope_usable;
		state.useRopeSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_userope_skillmod;
		state.useRopeAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_userope_abilitymod;
		state.useRopeRankInputValue = state.targetCharacterInfo.dadcharacter_skill_userope_rank;
		state.useRopeMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_userope_miscmod;
		state.extraSkillOneUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillone_usable;
		state.extraSkillOneNameInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillone_name;
		state.extraSkillOneKeyAbilityInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillone_keyability;
		state.extraSkillOneSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillone_skillmod;
		state.extraSkillOneAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillone_abilitymod;
		state.extraSkillOneRankInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillone_rank;
		state.extraSkillOneMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillone_miscmod;
		state.extraSkillTwoUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskilltwo_usable;
		state.extraSkillTwoNameInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskilltwo_name;
		state.extraSkillTwoKeyAbilityInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskilltwo_keyability;
		state.extraSkillTwoSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskilltwo_skillmod;
		state.extraSkillTwoAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskilltwo_abilitymod;
		state.extraSkillTwoRankInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskilltwo_rank;
		state.extraSkillTwoMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskilltwo_miscmod;
		state.extraSkillThreeUsableInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillthree_usable;
		state.extraSkillThreeNameInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillthree_name;
		state.extraSkillThreeKeyAbilityInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillthree_keyability;
		state.extraSkillThreeSkillModInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillthree_skillmod;
		state.extraSkillThreeAbilityModInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillthree_abilitymod;
		state.extraSkillThreeRankInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillthree_rank;
		state.extraSkillThreeMiscModInputValue = state.targetCharacterInfo.dadcharacter_skill_extraskillthree_miscmod;

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
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.appraiseUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Appraise
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.appraiseUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Appraise
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.appraiseSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.appraiseAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.appraiseRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.appraiseMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.balanceUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.balanceUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Balance
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.balanceUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Balance
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="DEX" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.balanceSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Mod.</label>
										<input type="number" className="form-control" value={state.balanceAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.balanceRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.balanceMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.bluffUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.bluffUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Bluff
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.bluffUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Bluff
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CHA" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.bluffSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Mod.</label>
										<input type="number" className="form-control" value={state.bluffAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.bluffRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.bluffMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.climbUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.climbUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Climb
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.climbUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Climb
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="STR" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.climbSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">STR Mod.</label>
										<input type="number" className="form-control" value={state.climbAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.climbRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.climbMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.concentrationUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.concentrationUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Concentration
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.concentrationUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Concentration
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CON" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.concentrationSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CON Mod.</label>
										<input type="number" className="form-control" value={state.concentrationAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.concentrationRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.concentrationMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.craftOneUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.craftOneUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.craftOneUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Craft 1</label>
										<input type="text" className="form-control" value={state.craftOneNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.craftOneSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.craftOneAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.craftOneRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.craftOneMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.craftTwoUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.craftTwoUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.craftTwoUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Craft 2</label>
										<input type="text" className="form-control" value={state.craftTwoNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.craftTwoSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.craftTwoAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.craftTwoRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.craftTwoMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.craftThreeUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.craftThreeUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.craftThreeUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Craft 3</label>
										<input type="text" className="form-control" value={state.craftThreeNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.craftThreeSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.craftThreeAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.craftThreeRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.craftThreeMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.decipherScriptUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.decipherScriptUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Decipher Script
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.decipherScriptUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Decipher Script
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.decipherScriptSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.decipherScriptAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.decipherScriptRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.decipherScriptMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.diplomacyUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.diplomacyUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Diplomacy
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.diplomacyUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Diplomacy
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CHA" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.diplomacySkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Mod.</label>
										<input type="number" className="form-control" value={state.diplomacyAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.diplomacyRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.diplomacyMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.disableDeviceUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.disableDeviceUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Disable Device
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.disableDeviceUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Disable Device
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.disableDeviceSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.disableDeviceAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.disableDeviceRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.disableDeviceMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.disguiseUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.disguiseUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Disguise
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.disguiseUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Disguise
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CHA" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.disguiseSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Mod.</label>
										<input type="number" className="form-control" value={state.disguiseAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.disguiseRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.disguiseMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.escapeArtistUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.escapeArtistUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Escape Artist
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.escapeArtistUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Escape Artist
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="DEX" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.escapeArtistSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Mod.</label>
										<input type="number" className="form-control" value={state.escapeArtistAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.escapeArtistRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.escapeArtistMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.forgeryUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.forgeryUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Forgery
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.forgeryUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Forgery
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.forgerySkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.forgeryAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.forgeryRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.forgeryMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.gatherInformationUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.gatherInformationUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Gather Information
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.gatherInformationUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Gather Information
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CHA" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.gatherInformationSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Mod.</label>
										<input type="number" className="form-control" value={state.gatherInformationAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.gatherInformationRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.gatherInformationMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.handleAnimalUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.handleAnimalUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Handle Animal
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.handleAnimalUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Handle Animal
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CHA" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.handleAnimalSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Mod.</label>
										<input type="number" className="form-control" value={state.handleAnimalAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.handleAnimalRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.handleAnimalMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.healUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.healUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Heal
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.healUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Heal
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="WIS" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.healSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">WIS Mod.</label>
										<input type="number" className="form-control" value={state.healAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.healRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.healMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.hideUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.hideUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Hide
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.hideUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Hide
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="DEX" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.hideSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Mod.</label>
										<input type="number" className="form-control" value={state.hideAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.hideRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.hideMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.intimidateUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.intimidateUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Intimidate
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.intimidateUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Intimidate
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CHA" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.intimidateSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Mod.</label>
										<input type="number" className="form-control" value={state.intimidateAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.intimidateRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.intimidateMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.jumpUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.jumpUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Jump
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.jumpUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Jump
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="STR" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.jumpSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">STR Mod.</label>
										<input type="number" className="form-control" value={state.jumpAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.jumpRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.jumpMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.knowledgeOneUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.knowledgeOneUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.knowledgeOneUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Knowledge 1</label>
										<input type="text" className="form-control" value={state.knowledgeOneNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.knowledgeOneSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.knowledgeOneAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.knowledgeOneRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.knowledgeOneMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.knowledgeTwoUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.knowledgeTwoUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.knowledgeTwoUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Knowledge 2</label>
										<input type="text" className="form-control" value={state.knowledgeTwoNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.knowledgeTwoSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.knowledgeTwoAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.knowledgeTwoRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.knowledgeTwoMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.knowledgeThreeUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.knowledgeThreeUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.knowledgeThreeUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Knowledge 3</label>
										<input type="text" className="form-control" value={state.knowledgeThreeNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.knowledgeThreeSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.knowledgeThreeAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.knowledgeThreeRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.knowledgeThreeMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.knowledgeFourUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.knowledgeFourUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.knowledgeFourUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Knowledge 4</label>
										<input type="text" className="form-control" value={state.knowledgeFourNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.knowledgeFourSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.knowledgeFourAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.knowledgeFourRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.knowledgeFourMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.knowledgeFiveUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.knowledgeFiveUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.knowledgeFiveUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Knowledge 5</label>
										<input type="text" className="form-control" value={state.knowledgeFiveNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.knowledgeFiveSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.knowledgeFiveAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.knowledgeFiveRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.knowledgeFiveMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.listenUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.listenUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Listen
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.listenUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Listen
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="WIS" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.listenSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">WIS Mod.</label>
										<input type="number" className="form-control" value={state.listenAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.listenRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.listenMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.moveSilentlyUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.moveSilentlyUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Move Silently
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.moveSilentlyUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Move Silently
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="DEX" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.moveSilentlySkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Mod.</label>
										<input type="number" className="form-control" value={state.moveSilentlyAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.moveSilentlyRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.moveSilentlyMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.openLockUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.openLockUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Open Lock
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.openLockUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Open Lock
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="DEX" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.openLockSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Mod.</label>
										<input type="number" className="form-control" value={state.openLockAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.openLockRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.openLockMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.performOneUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.performOneUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.performOneUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Perform 1</label>
										<input type="text" className="form-control" value={state.performOneNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CHA" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.performOneSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Mod.</label>
										<input type="number" className="form-control" value={state.performOneAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.performOneRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.performOneMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.performTwoUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.performTwoUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.performTwoUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Perform 2</label>
										<input type="text" className="form-control" value={state.performTwoNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CHA" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.performTwoSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Mod.</label>
										<input type="number" className="form-control" value={state.performTwoAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.performTwoRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.performTwoMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.performThreeUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.performThreeUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.performThreeUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Perform 3</label>
										<input type="text" className="form-control" value={state.performThreeNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CHA" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.performThreeSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Mod.</label>
										<input type="number" className="form-control" value={state.performThreeAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.performThreeRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.performThreeMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.professionOneUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.professionOneUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.professionOneUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Profession 2</label>
										<input type="text" className="form-control" value={state.professionOneNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="WIS" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.professionOneSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">WIS Mod.</label>
										<input type="number" className="form-control" value={state.professionOneAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.professionOneRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.professionOneMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.professionTwoUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.professionTwoUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.professionTwoUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Profession 2</label>
										<input type="text" className="form-control" value={state.professionTwoNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="WIS" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.professionTwoSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">WIS Mod.</label>
										<input type="number" className="form-control" value={state.professionTwoAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.professionTwoRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.professionTwoMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.rideUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.rideUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Ride
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.rideUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Ride
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="DEX" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.rideSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Mod.</label>
										<input type="number" className="form-control" value={state.rideAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.rideRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.rideMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.searchUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.searchUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Search
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.searchUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Search
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.searchSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.searchAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.searchRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.searchMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.senseMotiveUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.senseMotiveUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Sense Motive
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.senseMotiveUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Sense Motive
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="WIS" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.senseMotiveSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">WIS Mod.</label>
										<input type="number" className="form-control" value={state.senseMotiveAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.senseMotiveRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.senseMotiveMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.sleightOfHandUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.sleightOfHandUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Sleight of Hand
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.sleightOfHandUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Sleight of Hand
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="DEX" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.sleightOfHandSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Mod.</label>
										<input type="number" className="form-control" value={state.sleightOfHandAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.sleightOfHandRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.sleightOfHandMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.spellcraftUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.spellcraftUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Spellcraft
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.spellcraftUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Spellcraft
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="INT" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.spellcraftSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">INT Mod.</label>
										<input type="number" className="form-control" value={state.spellcraftAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.spellcraftRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.spellcraftMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.spotUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.spotUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Spot
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.spotUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Spot
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="WIS" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.spotSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">WIS Mod.</label>
										<input type="number" className="form-control" value={state.spotAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.spotRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.spotMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.survivalUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.survivalUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Survival
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.survivalUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Survival
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="WIS" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.survivalSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">WIS Mod.</label>
										<input type="number" className="form-control" value={state.survivalAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.survivalRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.survivalMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.swimUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.swimUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Swim
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.swimUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Swim
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="STR" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.swimSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">STR Mod.</label>
										<input type="number" className="form-control" value={state.swimAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.swimRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.swimMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.tumbleUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.tumbleUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Tumble
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.tumbleUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Tumble
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="DEX" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.tumbleSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Mod.</label>
										<input type="number" className="form-control" value={state.tumbleAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.tumbleRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.tumbleMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.useMagicDeviceUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.useMagicDeviceUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Use Magic Device
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.useMagicDeviceUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Use Magic Device
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="CHA" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.useMagicDeviceSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">CHA Mod.</label>
										<input type="number" className="form-control" value={state.useMagicDeviceAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.useMagicDeviceRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.useMagicDeviceMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.useRopeUsableInputValue ?
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.useRopeUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked /> Use Rope
												</label>
											</div>
										</div>
									:
										<div className="form-group col-3 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input" value={state.useRopeUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} /> Use Rope
												</label>
											</div>
										</div>
									}
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" readOnly className="form-control-plaintext abilName" value="DEX" />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.useRopeSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">DEX Mod.</label>
										<input type="number" className="form-control" value={state.useRopeAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.useRopeRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.useRopeMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.extraSkillOneUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input className="form-check-input position-static" type="checkbox" id="blankCheckboxExOneTrue" value={state.extraSkillOneUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" id="blankCheckboxExOneFalse" value={state.extraSkillOneUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Skill Name</label>
										<input type="text" className="form-control" value={state.extraSkillOneNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" className="form-control exSkillName" value={state.extraSkillOneKeyAbilityInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.extraSkillOneSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Ab. Mod.</label>
										<input type="number" className="form-control" value={state.extraSkillOneAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.extraSkillOneRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.extraSkillOneMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.extraSkillTwoUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.extraSkillTwoUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.extraSkillTwoUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Skill Name</label>
										<input type="text" className="form-control" value={state.extraSkillTwoNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" className="form-control exSkillName" value={state.extraSkillTwoKeyAbilityInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.extraSkillTwoSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Ab. Mod.</label>
										<input type="number" className="form-control" value={state.extraSkillTwoAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.extraSkillTwoRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.extraSkillTwoMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</div>
								<div className="form-row">
									{this.state.extraSkillThreeUsableInputValue ?
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.extraSkillThreeUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} checked />
												</label>
											</div>
										</div>
									:
										<div className="form-group col-1 align-self-center emptyMar">
											<div className="form-check emptyMar">
												<label className="form-check-label">
													<input type="checkbox" className="form-check-input position-static" value={state.extraSkillThreeUsableInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
												</label>
											</div>
										</div>
									}
									<div className="form-group col-2">
										<label className="form-control-label">Skill Name</label>
										<input type="text" className="form-control" value={state.extraSkillThreeNameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col-1">
										<label className="form-control-label">Ability</label>
										<input type="text" className="form-control exSkillName" value={state.extraSkillThreeKeyAbilityInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Skill</label>
										<input type="number" className="form-control" value={state.extraSkillThreeSkillModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Ab. Mod.</label>
										<input type="number" className="form-control" value={state.extraSkillThreeAbilityModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Rank</label>
										<input type="number" className="form-control" value={state.extraSkillThreeRankInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group col">
										<label className="form-control-label">Misc.</label>
										<input type="number" className="form-control" value={state.extraSkillThreeMiscModInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
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