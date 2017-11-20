import React from 'react';
import {Image,Title,ProjCont} from './ProjectsContainer';

export class Projects extends React.Component {

	render(){
		let proj = [
			{
				"id":"1",
				"title":"Matalo"
			},
			{
				"id":"2",
				"title":"Corpix"
			},
			{
				"id":"3",
				"title":"Call of Duty"
			},
			{
				"id":"4",
				"title":"Fisher"
			},
			{
				"id":"5",
				"title":"Stationary"
			},

		]
		let images = proj.map(image => {
			return  <ProjCont key={image.id} className = "col-md-6"> <img src={require(`../img/${image.id}.jpg`)} /> <p>{image.title}</p></ProjCont>
		});
		return (
			<div>
				<Title>My Projects</Title>
				<div className = "container-fluid">
					<div className = "row">
						<ul> {images} </ul>
					</div>
				</div>
			</div>
		);
	}
}
