import React from 'react';
import {HomeText,Parallax,ParallaxText,ProjImg,ProjText} from './HomeContainer';
import { HashRouter  as Router, Link } from 'react-router-dom';
import ProjectImg1 from '../img/proj1.jpg';
import ProjectImg2 from '../img/proj2.jpg';


export class Home extends React.Component {
	render(){
		return (
			<div>
				<Parallax> <ParallaxText>Hello! Nice to meet you!This is my Portfolio </ParallaxText></Parallax>
				<HomeText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</HomeText>
				<Router>
					<div>
						<div className = "container-fluid">
							<div className ="row">
									<Link to='/projects' className = "col-md-6"> <ProjImg src={ProjectImg1}/><ProjText>Projects</ProjText></Link>
									<Link to='/projects' className = "col-md-6"> <ProjImg src={ProjectImg2}/><ProjText>Projects</ProjText></Link>
							</div>
						</div>
					</div>
				</Router>

			</div>
		);
	}
}
