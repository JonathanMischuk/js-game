import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { store } from './state';

import Arena from './components/pages/Arena';
import Start from './components/pages/Start';

const Game = () => {
	return (
		<>
			<div>Game</div>

			<Switch>
				<Route exact path="/arena" component={Arena} />
				<Route exact path="/" component={Start} />
			</Switch>
		</>
	);
};

render(
	<Provider store={store}>
		<BrowserRouter>
			<Game />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
