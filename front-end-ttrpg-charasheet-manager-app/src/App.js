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
      hasCharacterSheet: true,
      currentUsername: '',
      currentPassword: '',
      currentId: ''
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



  // GET method for both users and posts
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



  // The method for the log-in process
  getLoggedIn = (username, password) => {
    const state = this.state;
    state.currentUsername = username;
    state.currentPassword = password;

    // Go through each user in the database
    for (let i = 0; i < state.userData.length; i++) {
      // Check each user for a name that matches with currentUsername
      if (state.userData[i].name === state.currentUsername) {
        const foundData = state.userData.find(x => x.name === state.currentUsername);
        console.log(foundData, 'this is the foundData for the getLoggedIn function');

        // Make sure the currentPassword matches with the foundData password
        if (state.currentPassword === foundData.password) {
          console.log('User profile found!');
          state.currentId = foundData.id;
          console.log(foundData.id, 'this is the ID from the foundData');
          state.isLoggedIn = true;

          // Find out if the user has a character sheet in postData
          const foundPost = state.postData.find(x => x.user_id === foundData.id);
          console.log(foundPost, 'this is the foundPost for the getLoggedIn function');

          // If there is no post, then post a blank character sheet
          if (foundPost === undefined) {
            console.log('The user_id value is undefined, meaning there is no post for the user');
            this.createNewPost(state.currentUsername, state.currentId);
            console.log('There should be a new post for the user!');
          // If there is a post by the user, let the user log in
          } else if (foundPost.user_id === foundData.id) {
            console.log('A post was matched up for the user');
          // If the above conditions didn't return, be sure to say so
          } else {
            console.log('ERROR: A post was not found for the user, but not because of an undefined foundPost. Find out what happened.');
          } // End of foundPost if else statement

        // If the currentPassword doesn't match with the foundData password
        } else {
          console.log('Incorrect password! Either the password you used does not match with the username, or the password not found in current data!');
          state.currentUsername = '';
          state.currentPassword = '';
          state.currentId = '';
        } // End of currentPassword and foundData password if else statement
      } // End of currentUsername and userData name if else statement
    } // End of userData for loop
    this.setState(state);

    // Let user know if the log in attempt failed
    if (state.isLoggedIn === false) {
      console.log('User was not found! Either try a different username or see if something went wrong with the password.');
    } // End of the failed log-in attempt if statement
  } // End of getLoggedIn function



  // POST method for users
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



  // POST method for posts
  createNewPost = (loggedName, loggedId) => {
    console.log('createNewPost is using ' + loggedName + ' for its author parameter and ' + loggedId + ' as its user_id parameter');
    request.post('http://localhost:8080/posts')
      .send({_method: 'POST'})
      .send({ title: 'Title...', author: loggedName, content: 'Character Description...', user_id: loggedId, dungeons_and_dragons: true, dadcharacter_name: 'Character Name', dadcharacter_player: 'Player Name', dadcharacter_class: 'Character Class(es)', dadcharacter_level: 0, dadcharacter_race: 'Ethnicity', dadcharacter_alignment: 'Moral Alignment', dadcharacter_deity: 'Deity Name', dadcharacter_size: 'S/M/L', dadcharacter_age: 0, dadcharacter_gender: 'Gender(s)', dadcharacter_height: 'Height', dadcharacter_weight: 'Weight', dadcharacter_eyes: 'Eye Color', dadcharacter_hair: 'Hair Color', dadcharacter_skin: 'Skin Color/Tone', dadcharacter_attr_str_base: 0, dadcharacter_attr_str_mod: 0, dadcharacter_attr_str_tempbase: 0, dadcharacter_attr_str_tempmod: 0, dadcharacter_attr_dex_base: 0, dadcharacter_attr_dex_mod: 0, dadcharacter_attr_dex_tempbase: 0, dadcharacter_attr_dex_tempmod: 0, dadcharacter_attr_con_base: 0, dadcharacter_attr_con_mod: 0, dadcharacter_attr_con_tempbase: 0, dadcharacter_attr_con_tempmod: 0, dadcharacter_attr_int_base: 0, dadcharacter_attr_int_mod: 0, dadcharacter_attr_int_tempbase: 0, dadcharacter_attr_int_tempmod: 0, dadcharacter_attr_wis_base: 0, dadcharacter_attr_wis_mod: 0, dadcharacter_attr_wis_tempbase: 0, dadcharacter_attr_wis_tempmod: 0, dadcharacter_attr_cha_base: 0, dadcharacter_attr_cha_mod: 0, dadcharacter_attr_cha_tempbase: 0, dadcharacter_attr_cha_tempmod: 0, dadcharacter_hp_max: 0, dadcharacter_hp_current: 0, dadcharacter_hp_nonlethaldamage: 0, dadcharacter_speed: 0, dadcharacter_ac_total: 0, dadcharacter_ac_armorbonus: 0, dadcharacter_ac_shieldbonus: 0, dadcharacter_ac_dexmod: 0, dadcharacter_ac_natarmor: 0, dadcharacter_ac_deflectmod: 0, dadcharacter_ac_miscmod: 0, dadcharacter_damagereduction: 0, dadcharacter_touch: 0, dadcharacter_flatfooted: 0, dadcharacter_initiative_total: 0, dadcharacter_initiative_dexmod: 0, dadcharacter_initiative_miscmod: 0, dadcharacter_fortitude_total: 0, dadcharacter_fortitude_base: 0, dadcharacter_fortitude_abilitymod: 0, dadcharacter_fortitude_magicmod: 0, dadcharacter_fortitude_miscmod: 0, dadcharacter_fortitude_tempmod: 0, dadcharacter_reflex_total: 0, dadcharacter_reflex_base: 0, dadcharacter_reflex_abilitymod: 0, dadcharacter_reflex_magicmod: 0, dadcharacter_reflex_miscmod: 0, dadcharacter_reflex_tempmod: 0, dadcharacter_will_total: 0, dadcharacter_will_base: 0, dadcharacter_will_abilitymod: 0, dadcharacter_will_magicmod: 0, dadcharacter_will_miscmod: 0, dadcharacter_will_tempmod: 0, dadcharacter_conditionalmod: 'None', dadcharacter_bab: 0, dadcharacter_spellresistance: 0, dadcharacter_grapple_total: 0, dadcharacter_grapple_bab: 0, dadcharacter_grapple_strmod: 0, dadcharacter_grapple_sizemod: 0, dadcharacter_grapple_miscmod: 0, dadcharacter_attackone_name: 'None', dadcharacter_attackone_bonus: 0, dadcharacter_attackone_damage: 0, dadcharacter_attackone_critical: 0, dadcharacter_attackone_range: 'N/A', dadcharacter_attackone_type: 'N/A', dadcharacter_attackone_note: 'N/A', dadcharacter_attackone_ammoname: 'N/A', dadcharacter_attackone_ammocounter: 0, dadcharacter_attacktwo_name: 'None', dadcharacter_attacktwo_bonus: 0, dadcharacter_attacktwo_damage: 0, dadcharacter_attacktwo_critical: 0, dadcharacter_attacktwo_range: 'N/A', dadcharacter_attacktwo_type: 'N/A', dadcharacter_attacktwo_note: 'N/A', dadcharacter_attacktwo_ammoname: 'N/A', dadcharacter_attacktwo_ammocounter: 0, dadcharacter_attackthree_name: 'None', dadcharacter_attackthree_bonus: 0, dadcharacter_attackthree_damage: 0, dadcharacter_attackthree_critical: 0, dadcharacter_attackthree_range: 'N/A', dadcharacter_attackthree_type: 'N/A', dadcharacter_attackthree_note: 'N/A', dadcharacter_attackthree_ammoname: 'N/A', dadcharacter_attackthree_ammocounter: 0, dadcharacter_attackfour_name: 'None', dadcharacter_attackfour_bonus: 0, dadcharacter_attackfour_damage: 0, dadcharacter_attackfour_critical: 0, dadcharacter_attackfour_range: 'N/A', dadcharacter_attackfour_type: 'N/A', dadcharacter_attackfour_note: 'N/A', dadcharacter_attackfour_ammoname: 'N/A', dadcharacter_attackfour_ammocounter: 0, dadcharacter_attackfive_name: 'None', dadcharacter_attackfive_bonus: 0, dadcharacter_attackfive_damage: 0, dadcharacter_attackfive_critical: 0, dadcharacter_attackfive_range: 'N/A', dadcharacter_attackfive_type: 'N/A', dadcharacter_attackfive_note: 'N/A', dadcharacter_attackfive_ammoname: 'N/A', dadcharacter_attackfive_ammocounter: 0, dadcharacter_skill_maxclassranks: 0, dadcharacter_skill_maxcrossclassranks: 0, dadcharacter_skill_appraise_usable: true, dadcharacter_skill_appraise_skillmod: 0, dadcharacter_skill_appraise_abilitymod: 0, dadcharacter_skill_appraise_rank: 0, dadcharacter_skill_appraise_miscmod: 0, dadcharacter_skill_balance_usable: true, dadcharacter_skill_balance_skillmod: 0, dadcharacter_skill_balance_abilitymod: 0, dadcharacter_skill_balance_rank: 0, dadcharacter_skill_balance_miscmod: 0, dadcharacter_skill_bluff_usable: true, dadcharacter_skill_bluff_skillmod: 0, dadcharacter_skill_bluff_abilitymod: 0, dadcharacter_skill_bluff_rank: 0, dadcharacter_skill_bluff_miscmod: 0, dadcharacter_skill_climb_usable: true, dadcharacter_skill_climb_skillmod: 0, dadcharacter_skill_climb_abilitymod: 0, dadcharacter_skill_climb_rank: 0, dadcharacter_skill_climb_miscmod: 0, dadcharacter_skill_concentration_usable: true, dadcharacter_skill_concentration_skillmod: 0, dadcharacter_skill_concentration_abilitymod: 0, dadcharacter_skill_concentration_rank: 0, dadcharacter_skill_concentration_miscmod: 0, dadcharacter_skill_craftone_usable: true, dadcharacter_skill_craftone_name: 'N/A', dadcharacter_skill_craftone_skillmod: 0, dadcharacter_skill_craftone_abilitymod: 0, dadcharacter_skill_craftone_rank: 0, dadcharacter_skill_craftone_miscmod: 0, dadcharacter_skill_crafttwo_usable: true, dadcharacter_skill_crafttwo_name: 'N/A', dadcharacter_skill_crafttwo_skillmod: 0, dadcharacter_skill_crafttwo_abilitymod: 0, dadcharacter_skill_crafttwo_rank: 0, dadcharacter_skill_crafttwo_miscmod: 0, dadcharacter_skill_craftthree_usable: true, dadcharacter_skill_craftthree_name: 'N/A', dadcharacter_skill_craftthree_skillmod: 0, dadcharacter_skill_craftthree_abilitymod: 0, dadcharacter_skill_craftthree_rank: 0, dadcharacter_skill_craftthree_miscmod: 0, dadcharacter_skill_decipherscript_usable: false, dadcharacter_skill_decipherscript_skillmod: 0, dadcharacter_skill_decipherscript_abilitymod: 0, dadcharacter_skill_decipherscript_rank: 0, dadcharacter_skill_decipherscript_miscmod: 0, dadcharacter_skill_diplomacy_usable: true, dadcharacter_skill_diplomacy_skillmod: 0, dadcharacter_skill_diplomacy_abilitymod: 0, dadcharacter_skill_diplomacy_rank: 0, dadcharacter_skill_diplomacy_miscmod: 0, dadcharacter_skill_disabledevice_usable: false, dadcharacter_skill_disabledevice_skillmod: 0, dadcharacter_skill_disabledevice_abilitymod: 0, dadcharacter_skill_disabledevice_rank: 0, dadcharacter_skill_disabledevice_miscmod: 0, dadcharacter_skill_disguise_usable: true, dadcharacter_skill_disguise_skillmod: 0, dadcharacter_skill_disguise_abilitymod: 0, dadcharacter_skill_disguise_rank: 0, dadcharacter_skill_disguise_miscmod: 0, dadcharacter_skill_escapeartist_usable: true, dadcharacter_skill_escapeartist_skillmod: 0, dadcharacter_skill_escapeartist_abilitymod: 0, dadcharacter_skill_escapeartist_rank: 0, dadcharacter_skill_escapeartist_miscmod: 0, dadcharacter_skill_forgery_usable: true, dadcharacter_skill_forgery_skillmod: 0, dadcharacter_skill_forgery_abilitymod: 0, dadcharacter_skill_forgery_rank: 0, dadcharacter_skill_forgery_miscmod: 0, dadcharacter_skill_gatherinfo_usable: true, dadcharacter_skill_gatherinfo_skillmod: 0, dadcharacter_skill_gatherinfo_abilitymod: 0, dadcharacter_skill_gatherinfo_rank: 0, dadcharacter_skill_gatherinfo_miscmod: 0, dadcharacter_skill_handleanimal_usable: false, dadcharacter_skill_handleanimal_skillmod: 0, dadcharacter_skill_handleanimal_abilitymod: 0, dadcharacter_skill_handleanimal_rank: 0, dadcharacter_skill_handleanimal_miscmod: 0, dadcharacter_skill_heal_usable: true, dadcharacter_skill_heal_skillmod: 0, dadcharacter_skill_heal_abilitymod: 0, dadcharacter_skill_heal_rank: 0, dadcharacter_skill_heal_miscmod: 0, dadcharacter_skill_hide_usable: true, dadcharacter_skill_hide_skillmod: 0, dadcharacter_skill_hide_abilitymod: 0, dadcharacter_skill_hide_rank: 0, dadcharacter_skill_hide_miscmod: 0, dadcharacter_skill_intimidate_usable: true, dadcharacter_skill_intimidate_skillmod: 0, dadcharacter_skill_intimidate_abilitymod: 0, dadcharacter_skill_intimidate_rank: 0, dadcharacter_skill_intimidate_miscmod: 0, dadcharacter_skill_jump_usable: true, dadcharacter_skill_jump_skillmod: 0, dadcharacter_skill_jump_abilitymod: 0, dadcharacter_skill_jump_rank: 0, dadcharacter_skill_jump_miscmod: 0, dadcharacter_skill_knowledgeone_usable: false, dadcharacter_skill_knowledgeone_name: 'N/A', dadcharacter_skill_knowledgeone_skillmod: 0, dadcharacter_skill_knowledgeone_abilitymod: 0, dadcharacter_skill_knowledgeone_rank: 0, dadcharacter_skill_knowledgeone_miscmod: 0, dadcharacter_skill_knowledgetwo_usable: false, dadcharacter_skill_knowledgetwo_name: 'N/A', dadcharacter_skill_knowledgetwo_skillmod: 0, dadcharacter_skill_knowledgetwo_abilitymod: 0, dadcharacter_skill_knowledgetwo_rank: 0, dadcharacter_skill_knowledgetwo_miscmod: 0, dadcharacter_skill_knowledgethree_usable: false, dadcharacter_skill_knowledgethree_name: 'N/A', dadcharacter_skill_knowledgethree_skillmod: 0, dadcharacter_skill_knowledgethree_abilitymod: 0, dadcharacter_skill_knowledgethree_rank: 0, dadcharacter_skill_knowledgethree_miscmod: 0, dadcharacter_skill_knowledgefour_usable: false, dadcharacter_skill_knowledgefour_name: 'N/A', dadcharacter_skill_knowledgefour_skillmod: 0, dadcharacter_skill_knowledgefour_abilitymod: 0, dadcharacter_skill_knowledgefour_rank: 0, dadcharacter_skill_knowledgefour_miscmod: 0, dadcharacter_skill_knowledgefive_usable: false, dadcharacter_skill_knowledgefive_name: 'N/A', dadcharacter_skill_knowledgefive_skillmod: 0, dadcharacter_skill_knowledgefive_abilitymod: 0, dadcharacter_skill_knowledgefive_rank: 0, dadcharacter_skill_knowledgefive_miscmod: 0, dadcharacter_skill_listen_usable: true, dadcharacter_skill_listen_skillmod: 0, dadcharacter_skill_listen_abilitymod: 0, dadcharacter_skill_listen_rank: 0, dadcharacter_skill_listen_miscmod: 0, dadcharacter_skill_movesilent_usable: true, dadcharacter_skill_movesilent_skillmod: 0, dadcharacter_skill_movesilent_abilitymod: 0, dadcharacter_skill_movesilent_rank: 0, dadcharacter_skill_movesilent_miscmod: 0, dadcharacter_skill_openlock_usable: false, dadcharacter_skill_openlock_skillmod: 0, dadcharacter_skill_openlock_abilitymod: 0, dadcharacter_skill_openlock_rank: 0, dadcharacter_skill_openlock_miscmod: 0, dadcharacter_skill_performone_usable: false, dadcharacter_skill_performone_name: 'N/A', dadcharacter_skill_performone_skillmod: 0, dadcharacter_skill_performone_abilitymod: 0, dadcharacter_skill_performone_rank: 0, dadcharacter_skill_performone_miscmod: 0, dadcharacter_skill_performtwo_usable: false, dadcharacter_skill_performtwo_name: 'N/A', dadcharacter_skill_performtwo_skillmod: 0, dadcharacter_skill_performtwo_abilitymod: 0, dadcharacter_skill_performtwo_rank: 0, dadcharacter_skill_performtwo_miscmod: 0, dadcharacter_skill_performthree_usable: false, dadcharacter_skill_performthree_name: 'N/A', dadcharacter_skill_performthree_skillmod: 0, dadcharacter_skill_performthree_abilitymod: 0, dadcharacter_skill_performthree_rank: 0, dadcharacter_skill_performthree_miscmod: 0, dadcharacter_skill_professionone_usable: false, dadcharacter_skill_professionone_name: 'N/A', dadcharacter_skill_professionone_skillmod: 0, dadcharacter_skill_professionone_abilitymod: 0, dadcharacter_skill_professionone_rank: 0, dadcharacter_skill_professionone_miscmod: 0, dadcharacter_skill_professiontwo_usable: false, dadcharacter_skill_professiontwo_name: 'N/A', dadcharacter_skill_professiontwo_skillmod: 0, dadcharacter_skill_professiontwo_abilitymod: 0, dadcharacter_skill_professiontwo_rank: 0, dadcharacter_skill_professiontwo_miscmod: 0, dadcharacter_skill_ride_usable: true, dadcharacter_skill_ride_skillmod: 0, dadcharacter_skill_ride_abilitymod: 0, dadcharacter_skill_ride_rank: 0, dadcharacter_skill_ride_miscmod: 0, dadcharacter_skill_search_usable: true, dadcharacter_skill_search_skillmod: 0, dadcharacter_skill_search_abilitymod: 0, dadcharacter_skill_search_rank: 0, dadcharacter_skill_search_miscmod: 0, dadcharacter_skill_sensemotive_usable: true, dadcharacter_skill_sensemotive_skillmod: 0, dadcharacter_skill_sensemotive_abilitymod: 0, dadcharacter_skill_sensemotive_rank: 0, dadcharacter_skill_sensemotive_miscmod: 0, dadcharacter_skill_sleightofhand_usable: false, dadcharacter_skill_sleightofhand_skillmod: 0, dadcharacter_skill_sleightofhand_abilitymod: 0, dadcharacter_skill_sleightofhand_rank: 0, dadcharacter_skill_sleightofhand_miscmod: 0, dadcharacter_skill_spellcraft_usable: false, dadcharacter_skill_spellcraft_skillmod: 0, dadcharacter_skill_spellcraft_abilitymod: 0, dadcharacter_skill_spellcraft_rank: 0, dadcharacter_skill_spellcraft_miscmod: 0, dadcharacter_skill_spot_usable: true, dadcharacter_skill_spot_skillmod: 0, dadcharacter_skill_spot_abilitymod: 0, dadcharacter_skill_spot_rank: 0, dadcharacter_skill_spot_miscmod: 0, dadcharacter_skill_survival_usable: true, dadcharacter_skill_survival_skillmod: 0, dadcharacter_skill_survival_abilitymod: 0, dadcharacter_skill_survival_rank: 0, dadcharacter_skill_survival_miscmod: 0, dadcharacter_skill_swim_usable: true, dadcharacter_skill_swim_skillmod: 0, dadcharacter_skill_swim_abilitymod: 0, dadcharacter_skill_swim_rank: 0, dadcharacter_skill_swim_miscmod: 0, dadcharacter_skill_tumble_usable: false, dadcharacter_skill_tumble_skillmod: 0, dadcharacter_skill_tumble_abilitymod: 0, dadcharacter_skill_tumble_rank: 0, dadcharacter_skill_tumble_miscmod: 0, dadcharacter_skill_usemagicdevice_usable: false, dadcharacter_skill_usemagicdevice_skillmod: 0, dadcharacter_skill_usemagicdevice_abilitymod: 0, dadcharacter_skill_usemagicdevice_rank: 0, dadcharacter_skill_usemagicdevice_miscmod: 0, dadcharacter_skill_userope_usable: true, dadcharacter_skill_userope_skillmod: 0, dadcharacter_skill_userope_abilitymod: 0, dadcharacter_skill_userope_rank: 0, dadcharacter_skill_userope_miscmod: 0, dadcharacter_skill_extraskillone_usable: false, dadcharacter_skill_extraskillone_name: 'N/A', dadcharacter_skill_extraskillone_keyability: 'N/A', dadcharacter_skill_extraskillone_skillmod: 0, dadcharacter_skill_extraskillone_abilitymod: 0, dadcharacter_skill_extraskillone_rank: 0, dadcharacter_skill_extraskillone_miscmod: 0, dadcharacter_skill_extraskilltwo_usable: false, dadcharacter_skill_extraskilltwo_name: 'N/A', dadcharacter_skill_extraskilltwo_keyability: 'N/A', dadcharacter_skill_extraskilltwo_skillmod: 0, dadcharacter_skill_extraskilltwo_abilitymod: 0, dadcharacter_skill_extraskilltwo_rank: 0, dadcharacter_skill_extraskilltwo_miscmod: 0, dadcharacter_skill_extraskillthree_usable: false, dadcharacter_skill_extraskillthree_name: 'N/A', dadcharacter_skill_extraskillthree_keyability: 'N/A', dadcharacter_skill_extraskillthree_skillmod: 0, dadcharacter_skill_extraskillthree_abilitymod: 0, dadcharacter_skill_extraskillthree_rank: 0, dadcharacter_skill_extraskillthree_miscmod: 0, dadcharacteracsizemod: 0 })
      .end((err, data) => {
        this.getCurrentData();
      })
    console.log('Congrats, ' + loggedName + '! You should now have a blank character sheet for you to edit.');
  }



  // PUT method for posts
  updateCharacterSheet = (newPostData, postId) => {
    console.log('updateCharacterSheet is updating your character sheet now.');
    const state = this.state;
    request.put('http://localhost:8080/posts/' + postId)
      .send({ title: newPostData.title })
      .send({ author: newPostData.author })
      .send({ content: newPostData.content })
      .send({ user_id: newPostData.user_id })
      .send({ dungeons_and_dragons: newPostData.dungeons_and_dragons })
      .send({ dadcharacter_name: newPostData.dadcharacter_name })
      .send({ dadcharacter_player: newPostData.dadcharacter_player })
      .send({ dadcharacter_class: newPostData.dadcharacter_class })
      .send({ dadcharacter_level: newPostData.dadcharacter_level })
      .send({ dadcharacter_race: newPostData.dadcharacter_race })
      .send({ dadcharacter_alignment: newPostData.dadcharacter_alignment })
      .send({ dadcharacter_deity: newPostData.dadcharacter_deity })
      .send({ dadcharacter_size: newPostData.dadcharacter_size })
      .send({ dadcharacter_age: newPostData.dadcharacter_age })
      .send({ dadcharacter_gender: newPostData.dadcharacter_gender })
      .send({ dadcharacter_height: newPostData.dadcharacter_height })
      .send({ dadcharacter_weight: newPostData.dadcharacter_weight })
      .send({ dadcharacter_eyes: newPostData.dadcharacter_eyes })
      .send({ dadcharacter_hair: newPostData.dadcharacter_hair })
      .send({ dadcharacter_skin: newPostData.dadcharacter_skin })
      .send({ dadcharacter_attr_str_base: newPostData.dadcharacter_attr_str_base })
      .send({ dadcharacter_attr_str_mod: newPostData.dadcharacter_attr_str_mod })
      .send({ dadcharacter_attr_str_tempbase: newPostData.dadcharacter_attr_str_tempbase })
      .send({ dadcharacter_attr_str_tempmod: newPostData.dadcharacter_attr_str_tempmod })
      .send({ dadcharacter_attr_dex_base: newPostData.dadcharacter_attr_dex_base })
      .send({ dadcharacter_attr_dex_mod: newPostData.dadcharacter_attr_dex_mod })
      .send({ dadcharacter_attr_dex_tempbase: newPostData.dadcharacter_attr_dex_tempbase })
      .send({ dadcharacter_attr_dex_tempmod: newPostData.dadcharacter_attr_dex_tempmod })
      .send({ dadcharacter_attr_con_base: newPostData.dadcharacter_attr_con_base })
      .send({ dadcharacter_attr_con_mod: newPostData.dadcharacter_attr_con_mod })
      .send({ dadcharacter_attr_con_tempbase: newPostData.dadcharacter_attr_con_tempbase })
      .send({ dadcharacter_attr_con_tempmod: newPostData.dadcharacter_attr_con_tempmod })
      .send({ dadcharacter_attr_int_base: newPostData.dadcharacter_attr_int_base })
      .send({ dadcharacter_attr_int_mod: newPostData.dadcharacter_attr_int_mod })
      .send({ dadcharacter_attr_int_tempbase: newPostData.dadcharacter_attr_int_tempbase })
      .send({ dadcharacter_attr_int_tempmod: newPostData.dadcharacter_attr_int_tempmod })
      .send({ dadcharacter_attr_wis_base: newPostData.dadcharacter_attr_wis_base })
      .send({ dadcharacter_attr_wis_mod: newPostData.dadcharacter_attr_wis_mod })
      .send({ dadcharacter_attr_wis_tempbase: newPostData.dadcharacter_attr_wis_tempbase })
      .send({ dadcharacter_attr_wis_tempmod: newPostData.dadcharacter_attr_wis_tempmod })
      .send({ dadcharacter_attr_cha_base: newPostData.dadcharacter_attr_cha_base })
      .send({ dadcharacter_attr_cha_mod: newPostData.dadcharacter_attr_cha_mod })
      .send({ dadcharacter_attr_cha_tempbase: newPostData.dadcharacter_attr_cha_tempbase })
      .send({ dadcharacter_attr_cha_tempmod: newPostData.dadcharacter_attr_cha_tempmod })
      .send({ dadcharacter_hp_max: newPostData.dadcharacter_hp_max })
      .send({ dadcharacter_hp_current: newPostData.dadcharacter_hp_current })
      .send({ dadcharacter_hp_nonlethaldamage: newPostData.dadcharacter_hp_nonlethaldamage })
      .send({ dadcharacter_speed: newPostData.dadcharacter_speed })
      .send({ dadcharacter_ac_total: newPostData.dadcharacter_ac_total })
      .send({ dadcharacter_ac_armorbonus: newPostData.dadcharacter_ac_armorbonus })
      .send({ dadcharacter_ac_shieldbonus: newPostData.dadcharacter_ac_shieldbonus })
      .send({ dadcharacter_ac_dexmod: newPostData.dadcharacter_ac_dexmod })
      .send({ dadcharacter_ac_natarmor: newPostData.dadcharacter_ac_natarmor })
      .send({ dadcharacter_ac_deflectmod: newPostData.dadcharacter_ac_deflectmod })
      .send({ dadcharacter_ac_miscmod: newPostData.dadcharacter_ac_miscmod })
      .send({ dadcharacter_damagereduction: newPostData.dadcharacter_damagereduction })
      .send({ dadcharacter_touch: newPostData.dadcharacter_touch })
      .send({ dadcharacter_flatfooted: newPostData.dadcharacter_flatfooted })
      .send({ dadcharacter_initiative_total: newPostData.dadcharacter_initiative_total })
      .send({ dadcharacter_initiative_dexmod: newPostData.dadcharacter_initiative_dexmod })
      .send({ dadcharacter_initiative_miscmod: newPostData.dadcharacter_initiative_miscmod })
      .send({ dadcharacter_fortitude_total: newPostData.dadcharacter_fortitude_total })
      .send({ dadcharacter_fortitude_base: newPostData.dadcharacter_fortitude_base })
      .send({ dadcharacter_fortitude_abilitymod: newPostData.dadcharacter_fortitude_abilitymod })
      .send({ dadcharacter_fortitude_magicmod: newPostData.dadcharacter_fortitude_magicmod })
      .send({ dadcharacter_fortitude_miscmod: newPostData.dadcharacter_fortitude_miscmod })
      .send({ dadcharacter_fortitude_tempmod: newPostData.dadcharacter_fortitude_tempmod })
      .send({ dadcharacter_reflex_total: newPostData.dadcharacter_reflex_total })
      .send({ dadcharacter_reflex_base: newPostData.dadcharacter_reflex_base })
      .send({ dadcharacter_reflex_abilitymod: newPostData.dadcharacter_reflex_abilitymod })
      .send({ dadcharacter_reflex_magicmod: newPostData.dadcharacter_reflex_magicmod })
      .send({ dadcharacter_reflex_miscmod: newPostData.dadcharacter_reflex_miscmod })
      .send({ dadcharacter_reflex_tempmod: newPostData.dadcharacter_reflex_tempmod })
      .send({ dadcharacter_will_total: newPostData.dadcharacter_will_total })
      .send({ dadcharacter_will_base: newPostData.dadcharacter_will_base })
      .send({ dadcharacter_will_abilitymod: newPostData.dadcharacter_will_abilitymod })
      .send({ dadcharacter_will_magicmod: newPostData.dadcharacter_will_magicmod })
      .send({ dadcharacter_will_miscmod: newPostData.dadcharacter_will_miscmod })
      .send({ dadcharacter_will_tempmod: newPostData.dadcharacter_will_tempmod })
      .send({ dadcharacter_conditionalmod: newPostData.dadcharacter_conditionalmod })
      .send({ dadcharacter_bab: newPostData.dadcharacter_bab })
      .send({ dadcharacter_spellresistance: newPostData.dadcharacter_spellresistance })
      .send({ dadcharacter_grapple_total: newPostData.dadcharacter_grapple_total })
      .send({ dadcharacter_grapple_bab: newPostData.dadcharacter_grapple_bab })
      .send({ dadcharacter_grapple_strmod: newPostData.dadcharacter_grapple_strmod })
      .send({ dadcharacter_grapple_sizemod: newPostData.dadcharacter_grapple_sizemod })
      .send({ dadcharacter_grapple_miscmod: newPostData.dadcharacter_grapple_miscmod })
      .send({ dadcharacter_attackone_name: newPostData.dadcharacter_attackone_name })
      .send({ dadcharacter_attackone_bonus: newPostData.dadcharacter_attackone_bonus })
      .send({ dadcharacter_attackone_damage: newPostData.dadcharacter_attackone_damage })
      .send({ dadcharacter_attackone_critical: newPostData.dadcharacter_attackone_critical })
      .send({ dadcharacter_attackone_range: newPostData.dadcharacter_attackone_range })
      .send({ dadcharacter_attackone_type: newPostData.dadcharacter_attackone_type })
      .send({ dadcharacter_attackone_note: newPostData.dadcharacter_attackone_note })
      .send({ dadcharacter_attackone_ammoname: newPostData.dadcharacter_attackone_ammoname })
      .send({ dadcharacter_attackone_ammocounter: newPostData.dadcharacter_attackone_ammocounter })
      .send({ dadcharacter_attacktwo_name: newPostData.dadcharacter_attacktwo_name })
      .send({ dadcharacter_attacktwo_bonus: newPostData.dadcharacter_attacktwo_bonus })
      .send({ dadcharacter_attacktwo_damage: newPostData.dadcharacter_attacktwo_damage })
      .send({ dadcharacter_attacktwo_critical: newPostData.dadcharacter_attacktwo_critical })
      .send({ dadcharacter_attacktwo_range: newPostData.dadcharacter_attacktwo_range })
      .send({ dadcharacter_attacktwo_type: newPostData.dadcharacter_attacktwo_type })
      .send({ dadcharacter_attacktwo_note: newPostData.dadcharacter_attacktwo_note })
      .send({ dadcharacter_attacktwo_ammoname: newPostData.dadcharacter_attacktwo_ammoname })
      .send({ dadcharacter_attacktwo_ammocounter: newPostData.dadcharacter_attacktwo_ammocounter })
      .send({ dadcharacter_attackthree_name: newPostData.dadcharacter_attackthree_name })
      .send({ dadcharacter_attackthree_bonus: newPostData.dadcharacter_attackthree_bonus })
      .send({ dadcharacter_attackthree_damage: newPostData.dadcharacter_attackthree_damage })
      .send({ dadcharacter_attackthree_critical: newPostData.dadcharacter_attackthree_critical })
      .send({ dadcharacter_attackthree_range: newPostData.dadcharacter_attackthree_range })
      .send({ dadcharacter_attackthree_type: newPostData.dadcharacter_attackthree_type })
      .send({ dadcharacter_attackthree_note: newPostData.dadcharacter_attackthree_note })
      .send({ dadcharacter_attackthree_ammoname: newPostData.dadcharacter_attackthree_ammoname })
      .send({ dadcharacter_attackthree_ammocounter: newPostData.dadcharacter_attackthree_ammocounter })
      .send({ dadcharacter_attackfour_name: newPostData.dadcharacter_attackfour_name })
      .send({ dadcharacter_attackfour_bonus: newPostData.dadcharacter_attackfour_bonus })
      .send({ dadcharacter_attackfour_damage: newPostData.dadcharacter_attackfour_damage })
      .send({ dadcharacter_attackfour_critical: newPostData.dadcharacter_attackfour_critical })
      .send({ dadcharacter_attackfour_range: newPostData.dadcharacter_attackfour_range })
      .send({ dadcharacter_attackfour_type: newPostData.dadcharacter_attackfour_type })
      .send({ dadcharacter_attackfour_note: newPostData.dadcharacter_attackfour_note })
      .send({ dadcharacter_attackfour_ammoname: newPostData.dadcharacter_attackfour_ammoname })
      .send({ dadcharacter_attackfour_ammocounter: newPostData.dadcharacter_attackfour_ammocounter })
      .send({ dadcharacter_attackfive_name: newPostData.dadcharacter_attackfive_name })
      .send({ dadcharacter_attackfive_bonus: newPostData.dadcharacter_attackfive_bonus })
      .send({ dadcharacter_attackfive_damage: newPostData.dadcharacter_attackfive_damage })
      .send({ dadcharacter_attackfive_critical: newPostData.dadcharacter_attackfive_critical })
      .send({ dadcharacter_attackfive_range: newPostData.dadcharacter_attackfive_range })
      .send({ dadcharacter_attackfive_type: newPostData.dadcharacter_attackfive_type })
      .send({ dadcharacter_attackfive_note: newPostData.dadcharacter_attackfive_note })
      .send({ dadcharacter_attackfive_ammoname: newPostData.dadcharacter_attackfive_ammoname })
      .send({ dadcharacter_attackfive_ammocounter: newPostData.dadcharacter_attackfive_ammocounter })
      .send({ dadcharacter_skill_maxclassranks: newPostData.dadcharacter_skill_maxclassranks })
      .send({ dadcharacter_skill_maxcrossclassranks: newPostData.dadcharacter_skill_maxcrossclassranks })
      .send({ dadcharacter_skill_appraise_usable: newPostData.dadcharacter_skill_appraise_usable })
      .send({ dadcharacter_skill_appraise_skillmod: newPostData.dadcharacter_skill_appraise_skillmod })
      .send({ dadcharacter_skill_appraise_abilitymod: newPostData.dadcharacter_skill_appraise_abilitymod })
      .send({ dadcharacter_skill_appraise_rank: newPostData.dadcharacter_skill_appraise_rank })
      .send({ dadcharacter_skill_appraise_miscmod: newPostData.dadcharacter_skill_appraise_miscmod })
      .send({ dadcharacter_skill_balance_usable: newPostData.dadcharacter_skill_balance_usable })
      .send({ dadcharacter_skill_balance_skillmod: newPostData.dadcharacter_skill_balance_skillmod })
      .send({ dadcharacter_skill_balance_abilitymod: newPostData.dadcharacter_skill_balance_abilitymod })
      .send({ dadcharacter_skill_balance_rank: newPostData.dadcharacter_skill_balance_rank })
      .send({ dadcharacter_skill_balance_miscmod: newPostData.dadcharacter_skill_balance_miscmod })
      .send({ dadcharacter_skill_bluff_usable: newPostData.dadcharacter_skill_bluff_usable })
      .send({ dadcharacter_skill_bluff_skillmod: newPostData.dadcharacter_skill_bluff_skillmod })
      .send({ dadcharacter_skill_bluff_abilitymod: newPostData.dadcharacter_skill_bluff_abilitymod })
      .send({ dadcharacter_skill_bluff_rank: newPostData.dadcharacter_skill_bluff_rank })
      .send({ dadcharacter_skill_bluff_miscmod: newPostData.dadcharacter_skill_bluff_miscmod })
      .send({ dadcharacter_skill_climb_usable: newPostData.dadcharacter_skill_climb_usable })
      .send({ dadcharacter_skill_climb_skillmod: newPostData.dadcharacter_skill_knowledgeone_skillmod })
      .send({ dadcharacter_skill_climb_abilitymod: newPostData.dadcharacter_skill_climb_abilitymod })
      .send({ dadcharacter_skill_climb_rank: newPostData.dadcharacter_skill_climb_rank })
      .send({ dadcharacter_skill_climb_miscmod: newPostData.dadcharacter_skill_climb_miscmod })
      .send({ dadcharacter_skill_concentration_usable: newPostData.dadcharacter_skill_concentration_usable })
      .send({ dadcharacter_skill_concentration_skillmod: newPostData.dadcharacter_skill_concentration_skillmod })
      .send({ dadcharacter_skill_concentration_abilitymod: newPostData.dadcharacter_skill_concentration_abilitymod })
      .send({ dadcharacter_skill_concentration_rank: newPostData.dadcharacter_skill_concentration_rank })
      .send({ dadcharacter_skill_concentration_miscmod: newPostData.dadcharacter_skill_concentration_miscmod })
      .send({ dadcharacter_skill_craftone_usable: newPostData.dadcharacter_skill_craftone_usable })
      .send({ dadcharacter_skill_craftone_name: newPostData.dadcharacter_skill_craftone_name })
      .send({ dadcharacter_skill_craftone_skillmod: newPostData.dadcharacter_skill_craftone_skillmod })
      .send({ dadcharacter_skill_craftone_abilitymod: newPostData.dadcharacter_skill_craftone_abilitymod })
      .send({ dadcharacter_skill_craftone_rank: newPostData.dadcharacter_skill_craftone_rank })
      .send({ dadcharacter_skill_craftone_miscmod: newPostData.dadcharacter_skill_craftone_miscmod })
      .send({ dadcharacter_skill_crafttwo_usable: newPostData.dadcharacter_skill_crafttwo_usable })
      .send({ dadcharacter_skill_crafttwo_name: newPostData.dadcharacter_skill_crafttwo_name })
      .send({ dadcharacter_skill_crafttwo_skillmod: newPostData.dadcharacter_skill_crafttwo_skillmod })
      .send({ dadcharacter_skill_crafttwo_abilitymod: newPostData.dadcharacter_skill_crafttwo_abilitymod })
      .send({ dadcharacter_skill_crafttwo_rank: newPostData.dadcharacter_skill_crafttwo_rank })
      .send({ dadcharacter_skill_crafttwo_miscmod: newPostData.dadcharacter_skill_crafttwo_miscmod })
      .send({ dadcharacter_skill_craftthree_usable: newPostData.dadcharacter_skill_craftthree_usable })
      .send({ dadcharacter_skill_craftthree_name: newPostData.dadcharacter_skill_craftthree_name })
      .send({ dadcharacter_skill_craftthree_skillmod: newPostData.dadcharacter_skill_craftthree_skillmod })
      .send({ dadcharacter_skill_craftthree_abilitymod: newPostData.dadcharacter_skill_craftthree_abilitymod })
      .send({ dadcharacter_skill_craftthree_rank: newPostData.dadcharacter_skill_craftthree_rank })
      .send({ dadcharacter_skill_craftthree_miscmod: newPostData.dadcharacter_skill_craftthree_miscmod })
      .send({ dadcharacter_skill_decipherscript_usable: newPostData.dadcharacter_skill_decipherscript_usable })
      .send({ dadcharacter_skill_decipherscript_skillmod: newPostData.dadcharacter_skill_decipherscript_skillmod })
      .send({ dadcharacter_skill_decipherscript_abilitymod: newPostData.dadcharacter_skill_decipherscript_abilitymod })
      .send({ dadcharacter_skill_decipherscript_rank: newPostData.dadcharacter_skill_decipherscript_rank })
      .send({ dadcharacter_skill_decipherscript_miscmod: newPostData.dadcharacter_skill_decipherscript_miscmod })
      .send({ dadcharacter_skill_diplomacy_usable: newPostData.dadcharacter_skill_diplomacy_usable })
      .send({ dadcharacter_skill_diplomacy_skillmod: newPostData.dadcharacter_skill_diplomacy_skillmod })
      .send({ dadcharacter_skill_diplomacy_abilitymod: newPostData.dadcharacter_skill_diplomacy_abilitymod })
      .send({ dadcharacter_skill_diplomacy_rank: newPostData.dadcharacter_skill_diplomacy_rank })
      .send({ dadcharacter_skill_diplomacy_miscmod: newPostData.dadcharacter_skill_diplomacy_miscmod })
      .send({ dadcharacter_skill_disabledevice_usable: newPostData.dadcharacter_skill_disabledevice_usable })
      .send({ dadcharacter_skill_disabledevice_skillmod: newPostData.dadcharacter_skill_disabledevice_skillmod })
      .send({ dadcharacter_skill_disabledevice_abilitymod: newPostData.dadcharacter_skill_disabledevice_abilitymod })
      .send({ dadcharacter_skill_disabledevice_rank: newPostData.dadcharacter_skill_disabledevice_rank })
      .send({ dadcharacter_skill_disabledevice_miscmod: newPostData.dadcharacter_skill_disabledevice_miscmod })
      .send({ dadcharacter_skill_disguise_usable: newPostData.dadcharacter_skill_disguise_usable })
      .send({ dadcharacter_skill_disguise_skillmod: newPostData.dadcharacter_skill_disguise_skillmod })
      .send({ dadcharacter_skill_disguise_abilitymod: newPostData.dadcharacter_skill_disguise_abilitymod })
      .send({ dadcharacter_skill_disguise_rank: newPostData.dadcharacter_skill_disguise_rank })
      .send({ dadcharacter_skill_disguise_miscmod: newPostData.dadcharacter_skill_disguise_miscmod })
      .send({ dadcharacter_skill_escapeartist_usable: newPostData.dadcharacter_skill_escapeartist_usable })
      .send({ dadcharacter_skill_escapeartist_skillmod: newPostData.dadcharacter_skill_escapeartist_skillmod })
      .send({ dadcharacter_skill_escapeartist_abilitymod: newPostData.dadcharacter_skill_escapeartist_abilitymod })
      .send({ dadcharacter_skill_escapeartist_rank: newPostData.dadcharacter_skill_escapeartist_rank })
      .send({ dadcharacter_skill_escapeartist_miscmod: newPostData.dadcharacter_skill_escapeartist_miscmod })
      .send({ dadcharacter_skill_forgery_usable: newPostData.dadcharacter_skill_forgery_usable })
      .send({ dadcharacter_skill_forgery_skillmod: newPostData.dadcharacter_skill_forgery_skillmod })
      .send({ dadcharacter_skill_forgery_abilitymod: newPostData.dadcharacter_skill_forgery_abilitymod })
      .send({ dadcharacter_skill_forgery_rank: newPostData.dadcharacter_skill_forgery_rank })
      .send({ dadcharacter_skill_forgery_miscmod: newPostData.dadcharacter_skill_forgery_miscmod })
      .send({ dadcharacter_skill_gatherinfo_usable: newPostData.dadcharacter_skill_gatherinfo_usable })
      .send({ dadcharacter_skill_gatherinfo_skillmod: newPostData.dadcharacter_skill_gatherinfo_skillmod })
      .send({ dadcharacter_skill_gatherinfo_abilitymod: newPostData.dadcharacter_skill_gatherinfo_abilitymod })
      .send({ dadcharacter_skill_gatherinfo_rank: newPostData.dadcharacter_skill_gatherinfo_rank })
      .send({ dadcharacter_skill_gatherinfo_miscmod: newPostData.dadcharacter_skill_gatherinfo_miscmod })
      .send({ dadcharacter_skill_handleanimal_usable: newPostData.dadcharacter_skill_handleanimal_usable })
      .send({ dadcharacter_skill_handleanimal_skillmod: newPostData.dadcharacter_skill_handleanimal_skillmod })
      .send({ dadcharacter_skill_handleanimal_abilitymod: newPostData.dadcharacter_skill_handleanimal_abilitymod })
      .send({ dadcharacter_skill_handleanimal_rank: newPostData.dadcharacter_skill_handleanimal_rank })
      .send({ dadcharacter_skill_handleanimal_miscmod: newPostData.dadcharacter_skill_handleanimal_miscmod })
      .send({ dadcharacter_skill_heal_usable: newPostData.dadcharacter_skill_heal_usable })
      .send({ dadcharacter_skill_heal_skillmod: newPostData.dadcharacter_skill_heal_skillmod })
      .send({ dadcharacter_skill_heal_abilitymod: newPostData.dadcharacter_skill_heal_abilitymod })
      .send({ dadcharacter_skill_heal_rank: newPostData.dadcharacter_skill_heal_rank })
      .send({ dadcharacter_skill_heal_miscmod: newPostData.dadcharacter_skill_heal_miscmod })
      .send({ dadcharacter_skill_hide_usable: newPostData.dadcharacter_skill_hide_usable })
      .send({ dadcharacter_skill_hide_skillmod: newPostData.dadcharacter_skill_hide_skillmod })
      .send({ dadcharacter_skill_hide_abilitymod: newPostData.dadcharacter_skill_hide_abilitymod })
      .send({ dadcharacter_skill_hide_rank: newPostData.dadcharacter_skill_hide_rank })
      .send({ dadcharacter_skill_hide_miscmod: newPostData.dadcharacter_skill_hide_miscmod })
      .send({ dadcharacter_skill_intimidate_usable: newPostData.dadcharacter_skill_intimidate_usable })
      .send({ dadcharacter_skill_intimidate_skillmod: newPostData.dadcharacter_skill_intimidate_skillmod })
      .send({ dadcharacter_skill_intimidate_abilitymod: newPostData.dadcharacter_skill_intimidate_abilitymod })
      .send({ dadcharacter_skill_intimidate_rank: newPostData.dadcharacter_skill_intimidate_rank })
      .send({ dadcharacter_skill_intimidate_miscmod: newPostData.dadcharacter_skill_intimidate_miscmod })
      .send({ dadcharacter_skill_jump_usable: newPostData.dadcharacter_skill_jump_usable })
      .send({ dadcharacter_skill_jump_skillmod: newPostData.dadcharacter_skill_jump_skillmod })
      .send({ dadcharacter_skill_jump_abilitymod: newPostData.dadcharacter_skill_jump_abilitymod })
      .send({ dadcharacter_skill_jump_rank: newPostData.dadcharacter_skill_jump_rank })
      .send({ dadcharacter_skill_jump_miscmod: newPostData.dadcharacter_skill_jump_miscmod })
      .send({ dadcharacter_skill_knowledgeone_usable: newPostData.dadcharacter_skill_knowledgeone_usable })
      .send({ dadcharacter_skill_knowledgeone_name: newPostData.dadcharacter_skill_knowledgeone_name })
      .send({ dadcharacter_skill_knowledgeone_skillmod: newPostData.dadcharacter_skill_knowledgeone_skillmod })
      .send({ dadcharacter_skill_knowledgeone_abilitymod: newPostData.dadcharacter_skill_knowledgeone_abilitymod })
      .send({ dadcharacter_skill_knowledgeone_rank: newPostData.dadcharacter_skill_knowledgeone_rank })
      .send({ dadcharacter_skill_knowledgeone_miscmod: newPostData.dadcharacter_skill_knowledgeone_miscmod })
      .send({ dadcharacter_skill_knowledgetwo_usable: newPostData.dadcharacter_skill_knowledgetwo_usable })
      .send({ dadcharacter_skill_knowledgetwo_name: newPostData.dadcharacter_skill_knowledgetwo_name })
      .send({ dadcharacter_skill_knowledgetwo_skillmod: newPostData.dadcharacter_skill_knowledgetwo_skillmod })
      .send({ dadcharacter_skill_knowledgetwo_abilitymod: newPostData.dadcharacter_skill_knowledgetwo_abilitymod })
      .send({ dadcharacter_skill_knowledgetwo_rank: newPostData.dadcharacter_skill_knowledgetwo_rank })
      .send({ dadcharacter_skill_knowledgetwo_miscmod: newPostData.dadcharacter_skill_knowledgetwo_miscmod })
      .send({ dadcharacter_skill_knowledgethree_usable: newPostData.dadcharacter_skill_knowledgethree_usable })
      .send({ dadcharacter_skill_knowledgethree_name: newPostData.dadcharacter_skill_knowledgethree_name })
      .send({ dadcharacter_skill_knowledgethree_skillmod: newPostData.dadcharacter_skill_knowledgethree_skillmod })
      .send({ dadcharacter_skill_knowledgethree_abilitymod: newPostData.dadcharacter_skill_knowledgethree_abilitymod })
      .send({ dadcharacter_skill_knowledgethree_rank: newPostData.dadcharacter_skill_knowledgethree_rank })
      .send({ dadcharacter_skill_knowledgethree_miscmod: newPostData.dadcharacter_skill_knowledgethree_miscmod })
      .send({ dadcharacter_skill_knowledgefour_usable: newPostData.dadcharacter_skill_knowledgefour_usable })
      .send({ dadcharacter_skill_knowledgefour_name: newPostData.dadcharacter_skill_knowledgefour_name })
      .send({ dadcharacter_skill_knowledgefour_skillmod: newPostData.dadcharacter_skill_knowledgefour_skillmod })
      .send({ dadcharacter_skill_knowledgefour_abilitymod: newPostData.dadcharacter_skill_knowledgefour_abilitymod })
      .send({ dadcharacter_skill_knowledgefour_rank: newPostData.dadcharacter_skill_knowledgefour_rank })
      .send({ dadcharacter_skill_knowledgefour_miscmod: newPostData.dadcharacter_skill_knowledgefour_miscmod })
      .send({ dadcharacter_skill_knowledgefive_usable: newPostData.dadcharacter_skill_knowledgefive_usable })
      .send({ dadcharacter_skill_knowledgefive_name: newPostData.dadcharacter_skill_knowledgefive_name })
      .send({ dadcharacter_skill_knowledgefive_skillmod: newPostData.dadcharacter_skill_knowledgefive_skillmod })
      .send({ dadcharacter_skill_knowledgefive_abilitymod: newPostData.dadcharacter_skill_knowledgefive_abilitymod })
      .send({ dadcharacter_skill_knowledgefive_rank: newPostData.dadcharacter_skill_knowledgefive_rank })
      .send({ dadcharacter_skill_knowledgefive_miscmod: newPostData.dadcharacter_skill_knowledgefive_miscmod })
      .send({ dadcharacter_skill_listen_usable: newPostData.dadcharacter_skill_listen_usable })
      .send({ dadcharacter_skill_listen_skillmod: newPostData.dadcharacter_skill_listen_skillmod })
      .send({ dadcharacter_skill_listen_abilitymod: newPostData.dadcharacter_skill_listen_abilitymod })
      .send({ dadcharacter_skill_listen_rank: newPostData.dadcharacter_skill_listen_rank })
      .send({ dadcharacter_skill_listen_miscmod: newPostData.dadcharacter_skill_listen_miscmod })
      .send({ dadcharacter_skill_movesilent_usable: newPostData.dadcharacter_skill_movesilent_usable })
      .send({ dadcharacter_skill_movesilent_skillmod: newPostData.dadcharacter_skill_movesilent_skillmod })
      .send({ dadcharacter_skill_movesilent_abilitymod: newPostData.dadcharacter_skill_movesilent_abilitymod })
      .send({ dadcharacter_skill_movesilent_rank: newPostData.dadcharacter_skill_movesilent_rank })
      .send({ dadcharacter_skill_movesilent_miscmod: newPostData.dadcharacter_skill_movesilent_miscmod })
      .send({ dadcharacter_skill_openlock_usable: newPostData.dadcharacter_skill_openlock_usable })
      .send({ dadcharacter_skill_openlock_skillmod: newPostData.dadcharacter_skill_openlock_skillmod })
      .send({ dadcharacter_skill_openlock_abilitymod: newPostData.dadcharacter_skill_openlock_abilitymod })
      .send({ dadcharacter_skill_openlock_rank: newPostData.dadcharacter_skill_openlock_rank })
      .send({ dadcharacter_skill_openlock_miscmod: newPostData.dadcharacter_skill_openlock_miscmod })
      .send({ dadcharacter_skill_performone_usable: newPostData.dadcharacter_skill_performone_usable })
      .send({ dadcharacter_skill_performone_name: newPostData.dadcharacter_skill_performone_name })
      .send({ dadcharacter_skill_performone_skillmod: newPostData.dadcharacter_skill_performone_skillmod })
      .send({ dadcharacter_skill_performone_abilitymod: newPostData.dadcharacter_skill_performone_abilitymod })
      .send({ dadcharacter_skill_performone_rank: newPostData.dadcharacter_skill_performone_rank })
      .send({ dadcharacter_skill_performone_miscmod: newPostData.dadcharacter_skill_performone_miscmod })
      .send({ dadcharacter_skill_performtwo_usable: newPostData.dadcharacter_skill_performtwo_usable })
      .send({ dadcharacter_skill_performtwo_name: newPostData.dadcharacter_skill_performtwo_name })
      .send({ dadcharacter_skill_performtwo_skillmod: newPostData.dadcharacter_skill_performtwo_skillmod })
      .send({ dadcharacter_skill_performtwo_abilitymod: newPostData.dadcharacter_skill_performtwo_abilitymod })
      .send({ dadcharacter_skill_performtwo_rank: newPostData.dadcharacter_skill_performtwo_rank })
      .send({ dadcharacter_skill_performtwo_miscmod: newPostData.dadcharacter_skill_performtwo_miscmod })
      .send({ dadcharacter_skill_performthree_usable: newPostData.dadcharacter_skill_performthree_usable })
      .send({ dadcharacter_skill_performthree_name: newPostData.dadcharacter_skill_performthree_name })
      .send({ dadcharacter_skill_performthree_skillmod: newPostData.dadcharacter_skill_performthree_skillmod })
      .send({ dadcharacter_skill_performthree_abilitymod: newPostData.dadcharacter_skill_performthree_abilitymod })
      .send({ dadcharacter_skill_performthree_rank: newPostData.dadcharacter_skill_performthree_rank })
      .send({ dadcharacter_skill_performthree_miscmod: newPostData.dadcharacter_skill_performthree_miscmod })
      .send({ dadcharacter_skill_professionone_usable: newPostData.dadcharacter_skill_professionone_usable })
      .send({ dadcharacter_skill_professionone_name: newPostData.dadcharacter_skill_professionone_name })
      .send({ dadcharacter_skill_professionone_skillmod: newPostData.dadcharacter_skill_professionone_skillmod })
      .send({ dadcharacter_skill_professionone_abilitymod: newPostData.dadcharacter_skill_professionone_abilitymod })
      .send({ dadcharacter_skill_professionone_rank: newPostData.dadcharacter_skill_professionone_rank })
      .send({ dadcharacter_skill_professionone_miscmod: newPostData.dadcharacter_skill_professionone_miscmod })
      .send({ dadcharacter_skill_professiontwo_usable: newPostData.dadcharacter_skill_professiontwo_usable })
      .send({ dadcharacter_skill_professiontwo_name: newPostData.dadcharacter_skill_professiontwo_name })
      .send({ dadcharacter_skill_professiontwo_skillmod: newPostData.dadcharacter_skill_professiontwo_skillmod })
      .send({ dadcharacter_skill_professiontwo_abilitymod: newPostData.dadcharacter_skill_professiontwo_abilitymod })
      .send({ dadcharacter_skill_professiontwo_rank: newPostData.dadcharacter_skill_professiontwo_rank })
      .send({ dadcharacter_skill_professiontwo_miscmod: newPostData.dadcharacter_skill_professiontwo_miscmod })
      .send({ dadcharacter_skill_ride_usable: newPostData.dadcharacter_skill_ride_usable })
      .send({ dadcharacter_skill_ride_skillmod: newPostData.dadcharacter_skill_ride_skillmod })
      .send({ dadcharacter_skill_ride_abilitymod: newPostData.dadcharacter_skill_ride_abilitymod })
      .send({ dadcharacter_skill_ride_rank: newPostData.dadcharacter_skill_ride_rank })
      .send({ dadcharacter_skill_ride_miscmod: newPostData.dadcharacter_skill_ride_miscmod })
      .send({ dadcharacter_skill_search_usable: newPostData.dadcharacter_skill_search_usable })
      .send({ dadcharacter_skill_search_skillmod: newPostData.dadcharacter_skill_search_skillmod })
      .send({ dadcharacter_skill_search_abilitymod: newPostData.dadcharacter_skill_search_abilitymod })
      .send({ dadcharacter_skill_search_rank: newPostData.dadcharacter_skill_search_rank })
      .send({ dadcharacter_skill_search_miscmod: newPostData.dadcharacter_skill_search_miscmod })
      .send({ dadcharacter_skill_sensemotive_usable: newPostData.dadcharacter_skill_sensemotive_usable })
      .send({ dadcharacter_skill_sensemotive_skillmod: newPostData.dadcharacter_skill_sensemotive_skillmod })
      .send({ dadcharacter_skill_sensemotive_abilitymod: newPostData.dadcharacter_skill_sensemotive_abilitymod })
      .send({ dadcharacter_skill_sensemotive_rank: newPostData.dadcharacter_skill_sensemotive_rank })
      .send({ dadcharacter_skill_sensemotive_miscmod: newPostData.dadcharacter_skill_sensemotive_miscmod })
      .send({ dadcharacter_skill_sleightofhand_usable: newPostData.dadcharacter_skill_sleightofhand_usable })
      .send({ dadcharacter_skill_sleightofhand_skillmod: newPostData.dadcharacter_skill_sleightofhand_skillmod })
      .send({ dadcharacter_skill_sleightofhand_abilitymod: newPostData.dadcharacter_skill_sleightofhand_abilitymod })
      .send({ dadcharacter_skill_sleightofhand_rank: newPostData.dadcharacter_skill_sleightofhand_rank })
      .send({ dadcharacter_skill_sleightofhand_miscmod: newPostData.dadcharacter_skill_sleightofhand_miscmod })
      .send({ dadcharacter_skill_spellcraft_usable: newPostData.dadcharacter_skill_spellcraft_usable })
      .send({ dadcharacter_skill_spellcraft_skillmod: newPostData.dadcharacter_skill_spellcraft_skillmod })
      .send({ dadcharacter_skill_spellcraft_abilitymod: newPostData.dadcharacter_skill_spellcraft_abilitymod })
      .send({ dadcharacter_skill_spellcraft_rank: newPostData.dadcharacter_skill_spellcraft_rank })
      .send({ dadcharacter_skill_spellcraft_miscmod: newPostData.dadcharacter_skill_spellcraft_miscmod })
      .send({ dadcharacter_skill_spot_usable: newPostData.dadcharacter_skill_spot_usable })
      .send({ dadcharacter_skill_spot_skillmod: newPostData.dadcharacter_skill_spot_skillmod })
      .send({ dadcharacter_skill_spot_abilitymod: newPostData.dadcharacter_skill_spot_abilitymod })
      .send({ dadcharacter_skill_spot_rank: newPostData.dadcharacter_skill_spot_rank })
      .send({ dadcharacter_skill_spot_miscmod: newPostData.dadcharacter_skill_spot_miscmod })
      .send({ dadcharacter_skill_survival_usable: newPostData.dadcharacter_skill_survival_usable })
      .send({ dadcharacter_skill_survival_skillmod: newPostData.dadcharacter_skill_survival_skillmod })
      .send({ dadcharacter_skill_survival_abilitymod: newPostData.dadcharacter_skill_survival_abilitymod })
      .send({ dadcharacter_skill_survival_rank: newPostData.dadcharacter_skill_survival_rank })
      .send({ dadcharacter_skill_survival_miscmod: newPostData.dadcharacter_skill_survival_miscmod })
      .send({ dadcharacter_skill_swim_usable: newPostData.dadcharacter_skill_swim_usable })
      .send({ dadcharacter_skill_swim_skillmod: newPostData.dadcharacter_skill_swim_skillmod })
      .send({ dadcharacter_skill_swim_abilitymod: newPostData.dadcharacter_skill_swim_abilitymod })
      .send({ dadcharacter_skill_swim_rank: newPostData.dadcharacter_skill_swim_rank })
      .send({ dadcharacter_skill_swim_miscmod: newPostData.dadcharacter_skill_swim_miscmod })
      .send({ dadcharacter_skill_tumble_usable: newPostData.dadcharacter_skill_tumble_usable })
      .send({ dadcharacter_skill_tumble_skillmod: newPostData.dadcharacter_skill_tumble_skillmod })
      .send({ dadcharacter_skill_tumble_abilitymod: newPostData.dadcharacter_skill_tumble_abilitymod })
      .send({ dadcharacter_skill_tumble_rank: newPostData.dadcharacter_skill_tumble_rank })
      .send({ dadcharacter_skill_tumble_miscmod: newPostData.dadcharacter_skill_tumble_miscmod })
      .send({ dadcharacter_skill_usemagicdevice_usable: newPostData.dadcharacter_skill_usemagicdevice_usable })
      .send({ dadcharacter_skill_usemagicdevice_skillmod: newPostData.dadcharacter_skill_usemagicdevice_skillmod })
      .send({ dadcharacter_skill_usemagicdevice_abilitymod: newPostData.dadcharacter_skill_usemagicdevice_abilitymod })
      .send({ dadcharacter_skill_usemagicdevice_rank: newPostData.dadcharacter_skill_usemagicdevice_rank })
      .send({ dadcharacter_skill_usemagicdevice_miscmod: newPostData.dadcharacter_skill_usemagicdevice_miscmod })
      .send({ dadcharacter_skill_userope_usable: newPostData.dadcharacter_skill_userope_usable })
      .send({ dadcharacter_skill_userope_skillmod: newPostData.dadcharacter_skill_userope_skillmod })
      .send({ dadcharacter_skill_userope_abilitymod: newPostData.dadcharacter_skill_userope_abilitymod })
      .send({ dadcharacter_skill_userope_rank: newPostData.dadcharacter_skill_userope_rank })
      .send({ dadcharacter_skill_userope_miscmod: newPostData.dadcharacter_skill_userope_miscmod })
      .send({ dadcharacter_skill_extraskillone_usable: newPostData.dadcharacter_skill_extraskillone_usable })
      .send({ dadcharacter_skill_extraskillone_name: newPostData.dadcharacter_skill_extraskillone_name })
      .send({ dadcharacter_skill_extraskillone_keyability: newPostData.dadcharacter_skill_extraskillone_keyability })
      .send({ dadcharacter_skill_extraskillone_skillmod: newPostData.dadcharacter_skill_extraskillone_skillmod })
      .send({ dadcharacter_skill_extraskillone_abilitymod: newPostData.dadcharacter_skill_extraskillone_abilitymod })
      .send({ dadcharacter_skill_extraskillone_rank: newPostData.dadcharacter_skill_extraskillone_rank })
      .send({ dadcharacter_skill_extraskillone_miscmod: newPostData.dadcharacter_skill_extraskillone_miscmod })
      .send({ dadcharacter_skill_extraskilltwo_usable: newPostData.dadcharacter_skill_extraskilltwo_usable })
      .send({ dadcharacter_skill_extraskilltwo_name: newPostData.dadcharacter_skill_extraskilltwo_name })
      .send({ dadcharacter_skill_extraskilltwo_keyability: newPostData.dadcharacter_skill_extraskilltwo_keyability })
      .send({ dadcharacter_skill_extraskilltwo_skillmod: newPostData.dadcharacter_skill_extraskilltwo_skillmod })
      .send({ dadcharacter_skill_extraskilltwo_abilitymod: newPostData.dadcharacter_skill_extraskilltwo_abilitymod })
      .send({ dadcharacter_skill_extraskilltwo_rank: newPostData.dadcharacter_skill_extraskilltwo_rank })
      .send({ dadcharacter_skill_extraskilltwo_miscmod: newPostData.dadcharacter_skill_extraskilltwo_miscmod })
      .send({ dadcharacter_skill_extraskillthree_usable: newPostData.dadcharacter_skill_extraskillthree_usable })
      .send({ dadcharacter_skill_extraskillthree_name: newPostData.dadcharacter_skill_extraskillthree_name })
      .send({ dadcharacter_skill_extraskillthree_keyability: newPostData.dadcharacter_skill_extraskillthree_keyability })
      .send({ dadcharacter_skill_extraskillthree_skillmod: newPostData.dadcharacter_skill_extraskillthree_skillmod })
      .send({ dadcharacter_skill_extraskillthree_abilitymod: newPostData.dadcharacter_skill_extraskillthree_abilitymod })
      .send({ dadcharacter_skill_extraskillthree_rank: newPostData.dadcharacter_skill_extraskillthree_rank })
      .send({ dadcharacter_skill_extraskillthree_miscmod: newPostData.dadcharacter_skill_extraskillthree_miscmod })
      .send({ dadcharacteracsizemod: newPostData.dadcharacteracsizemod })
      .end((err, data) => {
        this.getCurrentData();
      })
    console.log('Congrats, ' + state.currentUsername + '! Your character sheet should be updated now.');
  }



  // DELETE method for posts
  deletingCharacterSheet = () => {
    console.log('deletingCharacterSheet is now deleting your character sheet now.');
    const state = this.state;
    console.log('Alright then, ' + state.currentUsername + '. Your sheet should be gone now. Relog in to get a new sheet');
  }



  // Changes FirstPage screen into the Login screen
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



  // Changes Signin screen into the Login screen
  jumpToLogin = (word) => {
    if (word === 'go') {
      const state = this.state;
      state.goingToLogIn = true;
      this.setState(state);
    } else if (word !== 'go') {
      alert('Error with jumpToLogin. Wrong word was used as input');
    }
  }
  


  // Changes FrontPage screen into the Signin screen
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
          <MainUsersPage updateCharacterSheet={this.updateCharacterSheet} deletingCharacterSheet={this.deletingCharacterSheet} currentId={this.state.currentId} currentUsername={this.state.currentUsername} currentPassword={this.state.currentPassword} postData={this.state.postData} userData={this.state.userData} goingToLogIn={this.state.goingToLogIn} goingToSignIn={this.state.goingToSignIn} />
        :
          <Login megaJumpToLogin={this.megaJumpToLogin} jumpToSignin={this.jumpToSignin} jumpToLogin={this.jumpToLogin} currentId={this.state.currentId} currentUsername={this.state.currentUsername} currentPassword={this.state.currentPassword} getLoggedIn={this.getLoggedIn} createNewUser={this.createNewUser} getCurrentData={this.getCurrentData} postData={this.state.postData} userData={this.state.userData} goingToLogIn={this.state.goingToLogIn} goingToSignIn={this.state.goingToSignIn} />
        }
      </div>
    );
  }
}

export default App;
