import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import Stats from '../features/Stats';
import ActionsPanel from '../features/ActionsPanel';

const BattleUI = () => {
	return (
		<>
			<ActionsPanel />
			<Stats />
		</>
	);
};

const WinUI = () => {
	const participants = useSelector((state) => state.participants);

	return <>{participants[0].living ? <h1>You won!</h1> : <h1>You lost...</h1>}</>;
};

const Arena = () => {
	const inBattle = useSelector((state) => state.inBattle);
	const participants = useSelector((state) => state.participants);

	if (!participants.length) return <Redirect to="/" />;

	return (
		<>
			{inBattle ? <BattleUI /> : <WinUI />}

			<NavLink exact to="/">
				Reset
			</NavLink>
		</>
	);
};

export default Arena;
