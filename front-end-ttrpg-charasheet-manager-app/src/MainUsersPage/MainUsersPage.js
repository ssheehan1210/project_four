import React, { Component } from 'react';
import './MainUsersPage.css';

export class MainUsersPage extends Component {
	render() {
		return (
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h1>Table-Top RPG Character Sheet Manager</h1>
						</div>
					</div>



					<div className="row">
						<div className="col-12">
							<h4>Click here to start the tutorial:</h4><br/>
							<button className="btn btn-primary" type="button">Start Tutorial</button>
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