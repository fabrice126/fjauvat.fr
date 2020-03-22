import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {
	return (
		<Link className="Logo__link" to="/">
			<div className="Logo">
				<span className="Logo__letter">F</span>
				<span className="Logo__letter">J</span>
			</div>
		</Link>
	);
}

export default Logo;
