import styled from 'styled-components';
import parallaxImage from '../img/para.jpg'

export const HomeText = styled.div`
	font-size:1.8em;
	text-align:center;
	width:100%;
	height:150px;
	color:white;
	background-color: rgba(0,0,0,0.7);
	padding-top:15px;
`;

export const Parallax = styled.div`
	background-image: url(${parallaxImage});
    min-height: 600px; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
export const ParallaxText = styled.div`
	font-size:2em;
	color:white;
	text-align:center;
	padding-top:200px;

`;

export const ProjImg = styled.img`
	display:inline-block;
	width:90%;
	height:90%;
	margin-top:30px;
	margin-left:40px;
`;

export const ProjText = styled.p`
	text-align:center;
	text-decoration:none;
	color:black;
	font-size:1.5em;
`;