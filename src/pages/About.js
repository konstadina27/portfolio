import React from 'react';
import {AboutSkills} from './AboutSkills';
import {Image , AboutText , AboutTitle , ImageCont, AboutSkill, ParallaxImg } from './AboutContainer';
import aboutPhoto from '../img/cv-f.jpg';


export class About extends React.Component {
	render(){
		return (
			<div className = "container-fluid">
				<div className ="row about">
					<AboutTitle className = "col-sm-3"> About Me </AboutTitle>
					<AboutText className = "col-md-6 ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Fusce in velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas ultricies porttitor est, 
						sit amet eleifend sem egestas ut. Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec. 
						Praesent nec libero accumsan turpis molestie dapibus. Mauris scelerisque ligula sed felis ultricies,
						ut efficitur orci dignissim. Nam eleifend ligula sit amet congue dapibus. 
						Vestibulum ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque finibus sapien quis convallis. 
						Donec at interdum mi. Sed finibus sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia. 
						Integer commodo blandit quam, ut blandit quam pretium eget.
					</AboutText>
					
					<ImageCont className="col-md-3">
						 <Image src={aboutPhoto} alt="my test logo" /> 
					</ImageCont>
				</div>
				<div className ="row">
					<AboutTitle className = "col-sm-3"> My skills </AboutTitle>
					<AboutSkill className = "col-md-8"> <AboutSkills /> </AboutSkill>
				</div>
			</div>
		);
	}
}
