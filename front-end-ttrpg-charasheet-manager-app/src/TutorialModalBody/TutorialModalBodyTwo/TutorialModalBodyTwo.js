import React, { Component } from 'react';
import './TutorialModalBodyTwo.css';

export class TutorialModalBodyTwo extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12'>
						<h5>Part 1: Your Character's Personal Info</h5>
						<p>The first (and arguably the most important) step in creating your character is the personal information listed at the top of the sheet. These relatively few, simple text lines are where you will be stating what your character's name is, what your character looks like, and where your character lies in regards to moral alignment, ethnicity, and combat level. This is where you will need your creative juices flowing the most, as these entries will be what other player-characters and non-player-characters (NPCs) will view you as in the world of the game!</p><br/>
						<p>For this part, we will be covering each of these aspects about your character:</p>
						<ul id='chara-info-categories'>
							<li>Character Name</li>
							<li>Player Name</li>
							<li>Class</li>
							<li>Level</li>
							<li>Race</li>
							<li>Alignment</li>
							<li>Deity (optional)</li>
							<li>Size</li>
							<li>Age</li>
							<li>Gender</li>
							<li>Height</li>
							<li>Weight</li>
							<li>Eyes</li>
							<li>Hair</li>
							<li>Skin</li>
						</ul>
						<p>While many of these traits may have very little statistical effect on your character's abilities and attributes, it's critical that you set at least some time to really think about what sort of character you are making during this stage of creation, as some characteristics could potentially have beneficial or detrimental effects on your character's capabilities and/or interactions with others (depending on how your Game Master sets up your game's setting). Also, for all you first-time players our there, now is as good a time as any to have a general idea of how you want your character to start out. Doing so will help you better decide where to allocate your ability/skill points in later parts.</p><br/>
						<p>If you're ready, hit the 'Next Page' button and let's knock each of these entries as we go!</p>
					</div>
				</div>
			</div>
		)
	}
}