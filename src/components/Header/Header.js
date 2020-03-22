// Node_modules
import React from 'react';
// Locals
import './Header.css';
import Logo from './Logo/Logo';
import NavDrawer from './NavDrawer/NavDrawer';

function Header() {
	return (
		<header className="Header">
			<NavDrawer />
			<Logo />
		</header>
	);
}

export default Header;
