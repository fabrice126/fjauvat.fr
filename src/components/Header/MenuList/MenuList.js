import React from 'react';
import './MenuList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuList(props) {
	const { t, i18n } = useTranslation();
	const { onCloseMenu } = props;
	const datas = [
		{
			id    : 1,
			label : t('nav-drawer.home'),
			icon  : faHome,
			link  : '/',
		},
		{
			id    : 2,
			label : t('nav-drawer.cv'),
			icon  : faFilePdf,
			link  : '/resume',
		},
		{
			id    : 3,
			label : t('nav-drawer.projects'),
			icon  : faLaptopCode,
			link  : '/projects',
		},
		{
			id    : 4,
			label : t('nav-drawer.github'),
			icon  : faGithub,
			link  : 'https://github.com/fabrice126',
		},
		{
			id    : 5,
			label : t('nav-drawer.contact'),
			icon  : faEnvelope,
			link  : '/contact',
		},
	];
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<ul className="MenuList">
			{datas.map(data => (
				<li key={data.id} className="MenuList__item" onClick={onCloseMenu}>
					<NavLink
						exact
						className="MenuList__item-nav"
						activeClassName="MenuList__item-nav--selected"
						to={data.link}
					>
						<span className="MenuList__item-icon">
							<FontAwesomeIcon icon={data.icon} />
						</span>
						<span className="MenuList__item-label">{data.label}</span>
					</NavLink>
				</li>
			))}
			<li className="MenuList__item-lang">
				<button
					className="MenuList__item-icon MenuList__item-icon-lang"
					type="button"
					onClick={() => changeLanguage('en')}
				>
					<img src="/img/france.svg" alt="en" />
				</button>
				<button
					className="MenuList__item-icon MenuList__item-icon-lang"
					type="button"
					onClick={() => changeLanguage('fr')}
				>
					<img src="/img/united-kingdom.svg" alt="fr" />
				</button>
			</li>
		</ul>
	);
}
MenuList.propTypes = {
	onCloseMenu : PropTypes.func.isRequired,
};
export default MenuList;
