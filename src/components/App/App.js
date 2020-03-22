// Node_modules
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
// Locals
import routes from '../../routes';
import './App.css';
import i18n from '../../i18n';
// Components
import Header from '../Header/Header';

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<BrowserRouter>
				<div>
					<Header />
					<main id="Main">
						<Switch>
							{routes.map(route => (
								<Route {...route} key={route.key} />
							))}
						</Switch>
					</main>
				</div>
			</BrowserRouter>
		</I18nextProvider>
	);
}

export default App;
