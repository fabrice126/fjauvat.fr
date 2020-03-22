import React from 'react';
import './HamburgerIcon.css';
import PropTypes from 'prop-types';

function HamburgerIcon(props) {
	const { openMenu, onToggleMenu } = props;
	const openClass = openMenu ? 'HamburgerIcon--open' : 'HamburgerIcon--close';
	return (
		<div className={`HamburgerIcon ${openClass}`} onClick={onToggleMenu} tabIndex="0" role="button">
			<div className="HamburgerIcon__line" />
		</div>
	);
}
HamburgerIcon.propTypes = {
	openMenu     : PropTypes.bool.isRequired,
	onToggleMenu : PropTypes.func.isRequired,
};

export default HamburgerIcon;
