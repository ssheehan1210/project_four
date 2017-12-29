import React, { Component } from 'react';
import './App.css';
import {Login} from './Login/Login.js';
import {MainUsersPage} from './MainUsersPage/MainUsersPage.js';

const request = require('superagent');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: [],
      postData: [],
      goingToLogIn: false,
      goingToSignIn: false,
      isLoggedIn: false,
      currentUsername: '',
      currentPassword: ''
      // currentId: '',
      // currentPoster: '',
      // currentNumberId: ''
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'user data being pulled in');
        const state = this.state;
        state.userData = data;
        console.log(state.userData, 'this should be the same as the user data');
      })

    fetch('http://localhost:8080/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'post data being pulled in');
        const state = this.state;
        state.postData = data;
        console.log(state.postData, 'this should be the same as the post data');
        this.setState(state);
        console.log(this.state.userData, 'this is the resulting userData');
        console.log(this.state.postData, 'this is the resulting postData');
      })

    console.log(this.state, 'state after componentDidMount is done');
  }

  getCurrentData = () => {
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'user data being pulled in');
        const state = this.state;
        state.userData = data;
        console.log(state.userData, 'this should be the same as the user data');
      })

    fetch('http://localhost:8080/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'post data being pulled in');
        const state = this.state;
        state.postData = data;
        console.log(state.postData, 'this should be the same as the post data');
        this.setState(state);
        console.log(this.state.userData, 'this is the resulting userData');
        console.log(this.state.postData, 'this is the resulting postData');
      })
  }

  // getCurrentUserData = () => {
  //   fetch('http://localhost:8080/users')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data, 'new user data being pulled in');
  //       const state = this.state;
  //       state.userData = data;
  //       console.log(state.userData, 'new state of the user data');
  //       this.setState(state);
  //     })
  // }

  // getCurrentPostData = () => {
  //   fetch('http://localhost:8080/posts')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data, 'new post data being pulled in');
  //       const state = this.state;
  //       state.postData = data;
  //       console.log(state.postData, 'new state of the post data');
  //       this.setState(state);
  //     })
  // }

  getLoggedIn = (username, password) => {
    const state = this.state;
    state.currentUsername = username;
    state.currentPassword = password;
    for (let i = 0; i < state.userData.length; i++) {
      if (state.userData[i].name === state.currentUsername) {
        const foundData = state.userData.find(x => x.name === state.currentUsername);
        if (state.currentPassword === foundData.password) {
          console.log('User profile found!');
          state.currentId = foundData.id;
          state.isLoggedIn = true;
        } else {
          console.log('Incorrect password! Either the password you used does not match with the username, or the password not found in current data!');
          state.currentUsername = '';
          state.currentPassword = '';
          // state.currentId = '';
        }
      }
    }
    this.setState(state);
    if (state.isLoggedIn === false) {
      console.log('User was not found! Either try a different username or see if something went wrong with the password.');
    }
  }

  createNewUser = (newName, pw) => {
    console.log('createNewUser is using ' + newName + ' for its name parameter and ' + pw + ' as its password parameter');
    request.post('http://localhost:8080/users')
      .send({_method: 'POST'})
      .send({ name: newName, password: pw })
      .end((err, data) => {
        this.getCurrentData();
      })
    console.log('Congrats! You created a new User Profile! Username: ' + newName + ' Password: ' + pw);
  }

  // createNewPost = (nameOfUser, dungeonBool, postingId) => {
  //   console.log('CNDDS Log 4: nameOfUser = ' + nameOfUser + ', dungeonBool = ' + dungeonBool + ', and postingId = ' + postingId + '.');
  //   console.log('createNewPost is using ' + nameOfUser + ' as its author, ' + dungeonBool + ' as its boolean, and ' + postingId + ' as its user_id.');
  //   request.post('http://localhost:8080/posts')
  //     .send({_method: 'POST'})
  //     .send({ title: 'Title', author: nameOfUser, content: 'Character Description...', user_id: postingId, dungeons_and_dragons: dungeonBool, dadcharacter_name: 'Character Name', dadcharacter_player: 'Player Name', dadcharacter_class: 'Character Class(es)', dadcharacter_level: 0, dadcharacter_race: 'Ethnicity', dadcharacter_alignment: 'Moral Alignment', dadcharacter_deity: 'Deity Name', dadcharacter_size: 'S/M/L', dadcharacter_age: 0, dadcharacter_gender: 'Gender(s)', dadcharacter_height: 'Height', dadcharacter_weight: 'Weight', dadcharacter_eyes: 'Eye Color', dadcharacter_hair: 'Hair Color', dadcharacter_skin: 'Skin Color/Tone', dadcharacter_attr_str_base: 0, dadcharacter_attr_str_mod: 0, dadcharacter_attr_str_tempbase: 0, dadcharacter_attr_str_tempmod: 0, dadcharacter_attr_dex_base: 0, dadcharacter_attr_dex_mod: 0, dadcharacter_attr_dex_tempbase: 0, dadcharacter_attr_dex_tempmod: 0, dadcharacter_attr_con_base: 0, dadcharacter_attr_con_mod: 0, dadcharacter_attr_con_tempbase: 0, dadcharacter_attr_con_tempmod: 0, dadcharacter_attr_int_base: 0, dadcharacter_attr_int_mod: 0, dadcharacter_attr_int_tempbase: 0, dadcharacter_attr_int_tempmod: 0, dadcharacter_attr_wis_base: 0, dadcharacter_attr_wis_mod: 0, dadcharacter_attr_wis_tempbase: 0, dadcharacter_attr_wis_tempmod: 0, dadcharacter_attr_cha_base: 0, dadcharacter_attr_cha_mod: 0, dadcharacter_attr_cha_tempbase: 0, dadcharacter_attr_cha_tempmod: 0, dadcharacter_hp_max: 0, dadcharacter_hp_current: 0, dadcharacter_hp_nonlethaldamage: 0, dadcharacter_speed: 0, dadcharacter_ac_total: 0, dadcharacter_ac_armorbonus: 0, dadcharacter_ac_shieldbonus: 0, dadcharacter_ac_dexmod: 0, dadcharacter_ac_natarmor: 0, dadcharacter_ac_deflectmod: 0, dadcharacter_ac_miscmod: 0, dadcharacter_damagereduction: 0, dadcharacter_touch: 0, dadcharacter_flatfooted: 0, dadcharacter_initiative_total: 0, dadcharacter_initiative_dexmod: 0, dadcharacter_initiative_miscmod: 0, dadcharacter_fortitude_total: 0, dadcharacter_fortitude_base: 0, dadcharacter_fortitude_abilitymod: 0, dadcharacter_fortitude_magicmod: 0, dadcharacter_fortitude_miscmod: 0, dadcharacter_fortitude_tempmod: 0, dadcharacter_reflex_total: 0, dadcharacter_reflex_base: 0, dadcharacter_reflex_abilitymod: 0, dadcharacter_reflex_magicmod: 0, dadcharacter_reflex_miscmod: 0, dadcharacter_reflex_tempmod: 0, dadcharacter_will_total: 0, dadcharacter_will_base: 0, dadcharacter_will_abilitymod: 0, dadcharacter_will_magicmod: 0, dadcharacter_will_miscmod: 0, dadcharacter_will_tempmod: 0, dadcharacter_conditionalmod: 'None', dadcharacter_bab: 0, dadcharacter_spellresistance: 0, dadcharacter_grapple_total: 0, dadcharacter_grapple_bab: 0, dadcharacter_grapple_strmod: 0, dadcharacter_grapple_sizemod: 0, dadcharacter_grapple_miscmod: 0, dadcharacter_attackone_name: 'None', dadcharacter_attackone_bonus: 0, dadcharacter_attackone_damage: 0, dadcharacter_attackone_critical: 0, dadcharacter_attackone_range: 'N/A', dadcharacter_attackone_type: 'N/A', dadcharacter_attackone_note: 'N/A', dadcharacter_attackone_ammoname: 'N/A', dadcharacter_attackone_ammocounter: 0, dadcharacter_attacktwo_name: 'None', dadcharacter_attacktwo_bonus: 0, dadcharacter_attacktwo_damage: 0, dadcharacter_attacktwo_critical: 0, dadcharacter_attacktwo_range: 'N/A', dadcharacter_attacktwo_type: 'N/A', dadcharacter_attacktwo_note: 'N/A', dadcharacter_attacktwo_ammoname: 'N/A', dadcharacter_attacktwo_ammocounter: 0, dadcharacter_attackthree_name: 'None', dadcharacter_attackthree_bonus: 0, dadcharacter_attackthree_damage: 0, dadcharacter_attackthree_critical: 0, dadcharacter_attackthree_range: 'N/A', dadcharacter_attackthree_type: 'N/A', dadcharacter_attackthree_note: 'N/A', dadcharacter_attackthree_ammoname: 'N/A', dadcharacter_attackthree_ammocounter: 0, dadcharacter_attackfour_name: 'None', dadcharacter_attackfour_bonus: 0, dadcharacter_attackfour_damage: 0, dadcharacter_attackfour_critical: 0, dadcharacter_attackfour_range: 'N/A', dadcharacter_attackfour_type: 'N/A', dadcharacter_attackfour_note: 'N/A', dadcharacter_attackfour_ammoname: 'N/A', dadcharacter_attackfour_ammocounter: 0, dadcharacter_attackfive_name: 'None', dadcharacter_attackfive_bonus: 0, dadcharacter_attackfive_damage: 0, dadcharacter_attackfive_critical: 0, dadcharacter_attackfive_range: 'N/A', dadcharacter_attackfive_type: 'N/A', dadcharacter_attackfive_note: 'N/A', dadcharacter_attackfive_ammoname: 'N/A', dadcharacter_attackfive_ammocounter: 0, dadcharacter_skill_maxclassranks: 0, dadcharacter_skill_maxcrossclassranks: 0, dadcharacter_skill_appraise_usable: true, dadcharacter_skill_appraise_skillmod: 0, dadcharacter_skill_appraise_abilitymod: 0, dadcharacter_skill_appraise_rank: 0, dadcharacter_skill_appraise_miscmod: 0, dadcharacter_skill_balance_usable: true, dadcharacter_skill_balance_skillmod: 0, dadcharacter_skill_balance_abilitymod: 0, dadcharacter_skill_balance_rank: 0, dadcharacter_skill_balance_miscmod: 0, dadcharacter_skill_bluff_usable: true, dadcharacter_skill_bluff_skillmod: 0, dadcharacter_skill_bluff_abilitymod: 0, dadcharacter_skill_bluff_rank: 0, dadcharacter_skill_bluff_miscmod: 0, dadcharacter_skill_climb_usable: true, dadcharacter_skill_climb_skillmod: 0, dadcharacter_skill_climb_abilitymod: 0, dadcharacter_skill_climb_rank: 0, dadcharacter_skill_climb_miscmod: 0, dadcharacter_skill_concentration_usable: true, dadcharacter_skill_concentration_skillmod: 0, dadcharacter_skill_concentration_abilitymod: 0, dadcharacter_skill_concentration_rank: 0, dadcharacter_skill_concentration_miscmod: 0, dadcharacter_skill_craftone_usable: true, dadcharacter_skill_craftone_name: 'N/A', dadcharacter_skill_craftone_skillmod: 0, dadcharacter_skill_craftone_abilitymod: 0, dadcharacter_skill_craftone_rank: 0, dadcharacter_skill_craftone_miscmod: 0, dadcharacter_skill_crafttwo_usable: true, dadcharacter_skill_crafttwo_name: 'N/A', dadcharacter_skill_crafttwo_skillmod: 0, dadcharacter_skill_crafttwo_abilitymod: 0, dadcharacter_skill_crafttwo_rank: 0, dadcharacter_skill_crafttwo_miscmod: 0, dadcharacter_skill_craftthree_usable: true, dadcharacter_skill_craftthree_name: 'N/A', dadcharacter_skill_craftthree_skillmod: 0, dadcharacter_skill_craftthree_abilitymod: 0, dadcharacter_skill_craftthree_rank: 0, dadcharacter_skill_craftthree_miscmod: 0, dadcharacter_skill_decipherscript_usable: false, dadcharacter_skill_decipherscript_skillmod: 0, dadcharacter_skill_decipherscript_abilitymod: 0, dadcharacter_skill_decipherscript_rank: 0, dadcharacter_skill_decipherscript_miscmod: 0, dadcharacter_skill_diplomacy_usable: true, dadcharacter_skill_diplomacy_skillmod: 0, dadcharacter_skill_diplomacy_abilitymod: 0, dadcharacter_skill_diplomacy_rank: 0, dadcharacter_skill_diplomacy_miscmod: 0, dadcharacter_skill_disabledevice_usable: false, dadcharacter_skill_disabledevice_skillmod: 0, dadcharacter_skill_disabledevice_abilitymod: 0, dadcharacter_skill_disabledevice_rank: 0, dadcharacter_skill_disabledevice_miscmod: 0, dadcharacter_skill_disguise_usable: true, dadcharacter_skill_disguise_skillmod: 0, dadcharacter_skill_disguise_abilitymod: 0, dadcharacter_skill_disguise_rank: 0, dadcharacter_skill_disguise_miscmod: 0, dadcharacter_skill_escapeartist_usable: true, dadcharacter_skill_escapeartist_skillmod: 0, dadcharacter_skill_escapeartist_abilitymod: 0, dadcharacter_skill_escapeartist_rank: 0, dadcharacter_skill_escapeartist_miscmod: 0, dadcharacter_skill_forgery_usable: true, dadcharacter_skill_forgery_skillmod: 0, dadcharacter_skill_forgery_abilitymod: 0, dadcharacter_skill_forgery_rank: 0, dadcharacter_skill_forgery_miscmod: 0, dadcharacter_skill_gatherinfo_usable: true, dadcharacter_skill_gatherinfo_skillmod: 0, dadcharacter_skill_gatherinfo_abilitymod: 0, dadcharacter_skill_gatherinfo_rank: 0, dadcharacter_skill_gatherinfo_miscmod: 0, dadcharacter_skill_handleanimal_usable: false, dadcharacter_skill_handleanimal_skillmod: 0, dadcharacter_skill_handleanimal_abilitymod: 0, dadcharacter_skill_handleanimal_rank: 0, dadcharacter_skill_handleanimal_miscmod: 0, dadcharacter_skill_heal_usable: true, dadcharacter_skill_heal_skillmod: 0, dadcharacter_skill_heal_abilitymod: 0, dadcharacter_skill_heal_rank: 0, dadcharacter_skill_heal_miscmod: 0, dadcharacter_skill_hide_usable: true, dadcharacter_skill_hide_skillmod: 0, dadcharacter_skill_hide_abilitymod: 0, dadcharacter_skill_hide_rank: 0, dadcharacter_skill_hide_miscmod: 0, dadcharacter_skill_intimidate_usable: true, dadcharacter_skill_intimidate_skillmod: 0, dadcharacter_skill_intimidate_abilitymod: 0, dadcharacter_skill_intimidate_rank: 0, dadcharacter_skill_intimidate_miscmod: 0, dadcharacter_skill_jump_usable: true, dadcharacter_skill_jump_skillmod: 0, dadcharacter_skill_jump_abilitymod: 0, dadcharacter_skill_jump_rank: 0, dadcharacter_skill_jump_miscmod: 0, dadcharacter_skill_knowledgeone_usable: false, dadcharacter_skill_knowledgeone_name: 'N/A', dadcharacter_skill_knowledgeone_skillmod: 0, dadcharacter_skill_knowledgeone_abilitymod: 0, dadcharacter_skill_knowledgeone_rank: 0, dadcharacter_skill_knowledgeone_miscmod: 0, dadcharacter_skill_knowledgetwo_usable: false, dadcharacter_skill_knowledgetwo_name: 'N/A', dadcharacter_skill_knowledgetwo_skillmod: 0, dadcharacter_skill_knowledgetwo_abilitymod: 0, dadcharacter_skill_knowledgetwo_rank: 0, dadcharacter_skill_knowledgetwo_miscmod: 0, dadcharacter_skill_knowledgethree_usable: false, dadcharacter_skill_knowledgethree_name: 'N/A', dadcharacter_skill_knowledgethree_skillmod: 0, dadcharacter_skill_knowledgethree_abilitymod: 0, dadcharacter_skill_knowledgethree_rank: 0, dadcharacter_skill_knowledgethree_miscmod: 0, dadcharacter_skill_knowledgefour_usable: false, dadcharacter_skill_knowledgefour_name: 'N/A', dadcharacter_skill_knowledgefour_skillmod: 0, dadcharacter_skill_knowledgefour_abilitymod: 0, dadcharacter_skill_knowledgefour_rank: 0, dadcharacter_skill_knowledgefour_miscmod: 0, dadcharacter_skill_knowledgefive_usable: false, dadcharacter_skill_knowledgefive_name: 'N/A', dadcharacter_skill_knowledgefive_skillmod: 0, dadcharacter_skill_knowledgefive_abilitymod: 0, dadcharacter_skill_knowledgefive_rank: 0, dadcharacter_skill_knowledgefive_miscmod: 0, dadcharacter_skill_listen_usable: true, dadcharacter_skill_listen_skillmod: 0, dadcharacter_skill_listen_abilitymod: 0, dadcharacter_skill_listen_rank: 0, dadcharacter_skill_listen_miscmod: 0, dadcharacter_skill_movesilent_usable: true, dadcharacter_skill_movesilent_skillmod: 0, dadcharacter_skill_movesilent_abilitymod: 0, dadcharacter_skill_movesilent_rank: 0, dadcharacter_skill_movesilent_miscmod: 0, dadcharacter_skill_openlock_usable: false, dadcharacter_skill_openlock_skillmod: 0, dadcharacter_skill_openlock_abilitymod: 0, dadcharacter_skill_openlock_rank: 0, dadcharacter_skill_openlock_miscmod: 0, dadcharacter_skill_performone_usable: false, dadcharacter_skill_performone_name: 'N/A', dadcharacter_skill_performone_skillmod: 0, dadcharacter_skill_performone_abilitymod: 0, dadcharacter_skill_performone_rank: 0, dadcharacter_skill_performone_miscmod: 0, dadcharacter_skill_performtwo_usable: false, dadcharacter_skill_performtwo_name: 'N/A', dadcharacter_skill_performtwo_skillmod: 0, dadcharacter_skill_performtwo_abilitymod: 0, dadcharacter_skill_performtwo_rank: 0, dadcharacter_skill_performtwo_miscmod: 0, dadcharacter_skill_performthree_usable: false, dadcharacter_skill_performthree_name: 'N/A', dadcharacter_skill_performthree_skillmod: 0, dadcharacter_skill_performthree_abilitymod: 0, dadcharacter_skill_performthree_rank: 0, dadcharacter_skill_performthree_miscmod: 0, dadcharacter_skill_professionone_usable: false, dadcharacter_skill_professionone_name: 'N/A', dadcharacter_skill_professionone_skillmod: 0, dadcharacter_skill_professionone_abilitymod: 0, dadcharacter_skill_professionone_rank: 0, dadcharacter_skill_professionone_miscmod: 0, dadcharacter_skill_professiontwo_usable: false, dadcharacter_skill_professiontwo_name: 'N/A', dadcharacter_skill_professiontwo_skillmod: 0, dadcharacter_skill_professiontwo_abilitymod: 0, dadcharacter_skill_professiontwo_rank: 0, dadcharacter_skill_professiontwo_miscmod: 0, dadcharacter_skill_ride_usable: true, dadcharacter_skill_ride_skillmod: 0, dadcharacter_skill_ride_abilitymod: 0, dadcharacter_skill_ride_rank: 0, dadcharacter_skill_ride_miscmod: 0, dadcharacter_skill_search_usable: true, dadcharacter_skill_search_skillmod: 0, dadcharacter_skill_search_abilitymod: 0, dadcharacter_skill_search_rank: 0, dadcharacter_skill_search_miscmod: 0, dadcharacter_skill_sensemotive_usable: true, dadcharacter_skill_sensemotive_skillmod: 0, dadcharacter_skill_sensemotive_abilitymod: 0, dadcharacter_skill_sensemotive_rank: 0, dadcharacter_skill_sensemotive_miscmod: 0, dadcharacter_skill_sleightofhand_usable: false, dadcharacter_skill_sleightofhand_skillmod: 0, dadcharacter_skill_sleightofhand_abilitymod: 0, dadcharacter_skill_sleightofhand_rank: 0, dadcharacter_skill_sleightofhand_miscmod: 0, dadcharacter_skill_spellcraft_usable: false, dadcharacter_skill_spellcraft_skillmod: 0, dadcharacter_skill_spellcraft_abilitymod: 0, dadcharacter_skill_spellcraft_rank: 0, dadcharacter_skill_spellcraft_miscmod: 0, dadcharacter_skill_spot_usable: true, dadcharacter_skill_spot_skillmod: 0, dadcharacter_skill_spot_abilitymod: 0, dadcharacter_skill_spot_rank: 0, dadcharacter_skill_spot_miscmod: 0, dadcharacter_skill_survival_usable: true, dadcharacter_skill_survival_skillmod: 0, dadcharacter_skill_survival_abilitymod: 0, dadcharacter_skill_survival_rank: 0, dadcharacter_skill_survival_miscmod: 0, dadcharacter_skill_swim_usable: true, dadcharacter_skill_swim_skillmod: 0, dadcharacter_skill_swim_abilitymod: 0, dadcharacter_skill_swim_rank: 0, dadcharacter_skill_swim_miscmod: 0, dadcharacter_skill_tumble_usable: false, dadcharacter_skill_tumble_skillmod: 0, dadcharacter_skill_tumble_abilitymod: 0, dadcharacter_skill_tumble_rank: 0, dadcharacter_skill_tumble_miscmod: 0, dadcharacter_skill_usemagicdevice_usable: false, dadcharacter_skill_usemagicdevice_skillmod: 0, dadcharacter_skill_usemagicdevice_abilitymod: 0, dadcharacter_skill_usemagicdevice_rank: 0, dadcharacter_skill_usemagicdevice_miscmod: 0, dadcharacter_skill_userope_usable: true, dadcharacter_skill_userope_skillmod: 0, dadcharacter_skill_userope_abilitymod: 0, dadcharacter_skill_userope_rank: 0, dadcharacter_skill_userope_miscmod: 0, dadcharacter_skill_extraskillone_usable: false, dadcharacter_skill_extraskillone_name: 'N/A', dadcharacter_skill_extraskillone_keyability: 'N/A', dadcharacter_skill_extraskillone_skillmod: 0, dadcharacter_skill_extraskillone_abilitymod: 0, dadcharacter_skill_extraskillone_rank: 0, dadcharacter_skill_extraskillone_miscmod: 0, dadcharacter_skill_extraskilltwo_usable: false, dadcharacter_skill_extraskilltwo_name: 'N/A', dadcharacter_skill_extraskilltwo_keyability: 'N/A', dadcharacter_skill_extraskilltwo_skillmod: 0, dadcharacter_skill_extraskilltwo_abilitymod: 0, dadcharacter_skill_extraskilltwo_rank: 0, dadcharacter_skill_extraskilltwo_miscmod: 0, dadcharacter_skill_extraskillthree_usable: false, dadcharacter_skill_extraskillthree_name: 'N/A', dadcharacter_skill_extraskillthree_keyability: 'N/A', dadcharacter_skill_extraskillthree_skillmod: 0, dadcharacter_skill_extraskillthree_abilitymod: 0, dadcharacter_skill_extraskillthree_rank: 0, dadcharacter_skill_extraskillthree_miscmod: 0, dadcharacteracsizemod: 0 })
  //     .end((err, data) => {
  //       this.getCurrentData();
  //     })
  //   console.log('Finished creating new Dungeons and Dragons sheet! Author name should be visable.');
  // }

  megaJumpToLogin = (word) => {
    if (word === 'double') {
      const state = this.state;
      state.goingToSignIn = true;
      state.goingToLogIn = true;
      this.setState(state);
    } else if (word !== 'double') {
      alert('Error with megaJumpToLogin. Wrong word was used as input');
    }
  }

  jumpToLogin = (word) => {
    if (word === 'go') {
      const state = this.state;
      state.goingToLogIn = true;
      this.setState(state);
    } else if (word !== 'go') {
      alert('Error with jumpToLogin. Wrong word was used as input');
    }
  }

  jumpToSignin = (word) => {
    if (word === 'sign') {
      const state = this.state;
      state.goingToSignIn = true;
      this.setState(state);
    } else if (word !== 'sign') {
      alert('Error with jumpToSignin. Wrong word was used as input');
    }
  }

  // creatingNewDungeonDragonSheet = (thisUserName) => {
  //   const state = this.state;
  //   console.log('thisUserName = ', thisUserName);
  //   state.currentPoster = thisUserName;
  //   console.log('currentPoster = ', state.currentPoster);
  //   this.setState(state);
  //   let posterDungeonDragonData = [];
  //   // const posterData = [];
  //   // console.log('Initial posterData = ', posterData);

  //   // for (let i = 0; i < state.userData.length; i++) {
  //   //   if (state.userData[i].name === state.currentUsername) {
  //   //     const foundData = state.userData.find(x => x.name === state.currentUsername);
  //   //     if (state.currentPassword === foundData.password) {
  //   //       console.log('User profile found!');
  //   //       state.currentId = foundData.id;
  //   //     } else {
  //   //       console.log('Wrong password!');
  //   //     }
  //   //   }
  //   // }

  //   // console.log(state.userData.find(x => x.name === state.currentPoster));
  //   // const posterData = state.userData.find(x => x.name === state.currentPoster);
  //   // console.log('posterData = ', posterData);
  //   for (let f = 0; f < state.userData.length; f++) {
  //     console.log(state.userData[f], 'This is the data for user number ', (f + 1));
  //     if (state.userData[f].name === state.currentPoster) {
  //       const posterData = state.userData.find(x => x.name === state.currentPoster);
  //       console.log('posterData = ', posterData);
  //       state.currentNumberId = posterData.id;
  //       console.log('currentNumberId = ', state.currentNumberId);
  //       this.setState(state);
  //       for (let g = 0; g < state.postData.length; g++) {
  //         console.log(state.postData[g], 'This is the data for post number ', (g + 1));
  //         if (state.postData[g].user_id === state.currentNumberId && state.postData[g].dungeons_and_dragons === true) {
  //           console.log(state.postData[g], 'There is already a Dungeons and Dragons sheet for this profile');
  //           posterDungeonDragonData = state.postData[g];
  //           // this.setState(state);
  //         }
  //       }
  //     }
  //   }
  //   console.log('CNDDS Log 1.25: posterDungeonDragonData = ', posterDungeonDragonData);
  //   for (let s = 0; s < state.userData.length; s++) {
  //     if (state.userData[s].name === state.currentPoster) {
  //       const assigningId = state.userData.find(x => x.name === state.currentPoster);
  //       console.log('CNDDS Log 1.5: assigningId = ' + assigningId);
  //       state.currentId = assigningId.id;
  //     }
  //   }
  //   this.setState(state);
  //   console.log('CNDDS Log 2: currentId = ', state.currentId);
  //   if (posterDungeonDragonData === '') {
  //     console.log('No Dungeons and Dragons sheet was found for ' + state.currentPoster + '. Now creating a blank sheet.');
  //     console.log('CNDDS Log 3: currentPoster = ' + state.currentPoster + ', and state.currentId = ' + state.currentId + '.');
  //     this.createNewPost(state.currentPoster, true, state.currentId);
  //   } else {
  //     console.log(posterDungeonDragonData, 'No new sheet will be made because the above data exists.');
  //     // this.setState(state);
  //   }
  // }

  // MainUsersPage currentId={this.state.currentId} currentUsername={this.state.currentUsername} currentPassword={this.state.currentPassword} postData={this.state.postData} userData={this.state.userData} creatingNewDungeonDragonSheet={this.creatingNewDungeonDragonSheet} goingToLogIn={this.state.goingToLogIn} goingToSignIn={this.state.goingToSignIn}
  // Login createNewPost={this.createNewPost} creatingNewDungeonDragonSheet={this.creatingNewDungeonDragonSheet} megaJumpToLogin={this.megaJumpToLogin} jumpToSignin={this.jumpToSignin} jumpToLogin={this.jumpToLogin} currentId={this.state.currentId} currentUsername={this.state.currentUsername} currentPassword={this.state.currentPassword} getLoggedIn={this.getLoggedIn} createNewUser={this.createNewUser} getCurrentData={this.getCurrentData} postData={this.state.postData} userData={this.state.userData} goingToLogIn={this.state.goingToLogIn} goingToSignIn={this.state.goingToSignIn}


  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ?
          <MainUsersPage currentUsername={this.state.currentUsername} currentPassword={this.state.currentPassword} postData={this.state.postData} userData={this.state.userData} goingToLogIn={this.state.goingToLogIn} goingToSignIn={this.state.goingToSignIn} />
        :
          <Login megaJumpToLogin={this.megaJumpToLogin} jumpToSignin={this.jumpToSignin} jumpToLogin={this.jumpToLogin} currentUsername={this.state.currentUsername} currentPassword={this.state.currentPassword} getLoggedIn={this.getLoggedIn} createNewUser={this.createNewUser} getCurrentData={this.getCurrentData} postData={this.state.postData} userData={this.state.userData} goingToLogIn={this.state.goingToLogIn} goingToSignIn={this.state.goingToSignIn} />
        }
      </div>
    );
  }
}

export default App;
