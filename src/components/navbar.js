import React from 'react';
import { HashRouter  as Router, Link } from 'react-router-dom';
import { Image , LogoImage } from './navbarContainer';
import logo from '../img/KL_Logo.png';

export class Navbar extends React.Component {
	render() {
		return (
			<Router>
			    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			      <Link to="/" className="navbar-brand"> <LogoImage> <Image src={logo} /> </LogoImage></Link>
			      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
			      </button>
			      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
			        <ul className="navbar-nav mr-auto">
						  <li className="nav-item active">
					        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
					      </li>
					      <li className="nav-item">
					        <Link to="/projects" className="nav-link">Projects</Link>
					      </li>
					      <li className="nav-item">
					        <Link to="/about" className="nav-link">About Me</Link>
					      </li>
			        </ul>
			      </div>
			    </nav>	
			</Router>
		)
	}
}