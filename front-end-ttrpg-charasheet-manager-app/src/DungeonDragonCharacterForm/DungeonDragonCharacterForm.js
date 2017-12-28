import React, { Component } from 'react';
import './DungeonDragonCharacterForm.css';

export class DungeonDragonCharacterForm extends Component {
	render() {
		return (
			<div>
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="DEX" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CHA" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="STR" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CON" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CHA" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CHA" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="DEX" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CHA" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CHA" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="WIS" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="DEX" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CHA" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="STR" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="WIS" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="DEX" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="DEX" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CHA" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CHA" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CHA" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="WIS" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="WIS" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="DEX" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="WIS" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="DEX" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="INT" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="WIS" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="WIS" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="STR" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="DEX" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="CHA" />
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
							<input type="text" readonly className="form-control-plaintext abilName" value="DEX" />
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
		)
	}
}