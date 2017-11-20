import styled from 'styled-components';
import backgroundImage from './img/website-design-background.png';

export const Background = styled.div`
	position:fixed;
	width:100vw;
	height:100%;
	background-image:url(${backgroundImage});
	opacity:0.4;
	background-size:cover;
	background-repeat:no-repeat;
	background-position:center;
	z-index:-99;
	`;