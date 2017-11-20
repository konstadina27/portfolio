import React from 'react';
import {Title,FootCont,FootCont2,FootContainer,FootContainer2} from './FooterContainer';
import facebook from '../img/facebook.png';
import twitter from '../img/icon-twitter-30x30.png';
import linkedin from '../img/linkedin-icon-30x30.jpg';



export class Footer extends React.Component {
	render(){
		return (
			<div className = "container-fluid footer">
				<div className = "row">
					<ul className = "col-md-4"> 
						<FootContainer>
						<Title>Follow Me at: </Title>
							<FootCont> <a href="https://www.facebook.com/konstadina.laiou" target="_blank"> <img src={facebook} /></a> </FootCont>
							<FootCont ><a href="https://twitter.com/Konstadina19" target="_blank"> <img src={twitter} /></a> </FootCont> 
							<FootCont><a href="https://www.linkedin.com/in/konstadina-laiou-55722713b/" target="_blank"> <img src={linkedin} /></a></FootCont>
						</FootContainer>
					</ul>
					<ul className ="col-md-8">
						<FootContainer2>
							<Title>Contact Me at: </Title>
							<FootCont2> Email: konstadina.laiou@gmail.com </FootCont2>
							<FootCont2> Phone number: 6988454564 </FootCont2>
							<FootCont2> Home address: Peloponnisou 8,Thessaloniki </FootCont2>
						</FootContainer2>
					</ul>
				</div>

			</div>	
		);
	}
}