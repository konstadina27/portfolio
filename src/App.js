import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from './components/navbar';
import {Home} from './pages/Home';
import {Projects} from './pages/Projects';
import {About} from './pages/About';
import { HashRouter as Router, Route} from 'react-router-dom';
import {Background} from './AppContainer';
import {Footer} from './components/Footer';


ReactDOM.render(
	<div>
		<div className = "container-fluid">
			<div className ="row about">
				<Background />
				<Navbar />	
				<Router> 
					<div>
						<Route exact path ="/" component={Home} />
						<Route path="/projects" component={Projects} />
						<Route path="/about" component={About} />				
					</div> 
				</Router>
				<Footer />	
			</div>
		</div>
		
	</div>, document.getElementById('react-container'));

