// Node_modules
import React from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Locals
import './Projects.css';
// Components

class Projects extends React.Component {
	constructor() {
		super();
		this.imagesLeft = [
			'html',
			'css',
			'javascript',
			'react',
		];
		this.imagesRight = [
			'graphql',
			'nodejs',
			'java',
			'mongodb',
		];
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<ul>
					<li>
						<a href="">DNA</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Projects;
