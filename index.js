import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Arena from './components/pages/Arena';
import Start from './components/pages/Start';

const App = () => {
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
	<RecoilRoot>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</RecoilRoot>,
	document.getElementById('root')
);
