import React from 'react';

export class AboutSkills extends React.Component {
	render(){
		return (
			<div className="container">
			    <div className="row">
			        <div className="col-md-3 col-sm-6">
			            <div className="progress blue">
			                <span className="progress-left">
			                    <span className="progress-bar"></span>
			                </span>
			                <span className="progress-right">
			                    <span className="progress-bar"></span>
			                </span>
			                <div className="progress-value">40%</div>
			            </div>
			            <div className="text-value">Html & Css</div>
			        </div>
			        <div className="col-md-3 col-sm-6">
			            <div className="progress yellow">
			                <span className="progress-left">
			                    <span className="progress-bar"></span>
			                </span>
			                <span className="progress-right">
			                    <span className="progress-bar"></span>
			                </span>
			                <div className="progress-value">25%</div>
			            </div>
			            <div className="text-value">Js & React Js</div>
			        </div>
			        <div className="col-md-3 col-sm-6">
			            <div className="progress pink">
			                <span className="progress-left">
			                    <span className="progress-bar"></span>
			                </span>
			                <span className="progress-right">
			                    <span className="progress-bar"></span>
			                </span>
			                <div className="progress-value">30%</div>
			            </div>
			             <div className="text-value">PHP & MYSQL</div>
			        </div>
			        <div className="col-md-3 col-sm-6">
			            <div className="progress green">
			                <span className="progress-left">
			                    <span className="progress-bar"></span>
			                </span>
			                <span className="progress-right">
			                    <span className="progress-bar"></span>
			                </span>
			                <div className="progress-value">50%</div>
			            </div>
			             <div className="text-value">ADOBE SUITE</div>
			        </div>			        
			    </div>
			</div>
		);
	}
}
