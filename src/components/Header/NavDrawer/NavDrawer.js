import React from 'react';
import './NavDrawer.css';
import MenuList from '../MenuList/MenuList';
import HamburgerIcon from './HamburgerIcon/HamburgerIcon';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

class NavDrawer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen : false,
		};
	}

	handleCloseMenu = () => {
		this.setState({ isOpen: false });
	}

	handleToggleMenu = () => {
		const { isOpen } = this.state;
		this.setState({ isOpen: !isOpen });
	}

	render() {
		const { isOpen } = this.state;
		const drawerClass = isOpen ? 'NavDrawerMenu--open' : '';
		const shadowClass = isOpen ? 'NavDrawer__shadow--open' : '';
		return (
			<ErrorBoundary>
				<div className="NavDrawer">
					<HamburgerIcon openMenu={isOpen} onToggleMenu={this.handleToggleMenu} />
					<div className={`NavDrawerMenu ${drawerClass}`}>
						<MenuList onCloseMenu={this.handleCloseMenu} />
					</div>
					<div className={`NavDrawer__shadow ${shadowClass}`} onClick={this.handleCloseMenu} role="button" tabIndex="0" />
				</div>
			</ErrorBoundary>
		);
	}
}

export default NavDrawer;
