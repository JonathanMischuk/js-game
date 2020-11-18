import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { createSelector } from 'reselect';

import Stats from '../features/Stats';
import ActionsPanel from '../features/ActionsPanel';
import CharacterSection from '../sections/CharacterSection';

const participantsSelector = (state) => state.participants;
const participantsLengthSelector = createSelector(
	participantsSelector,
	(participants) => participants.length
);

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
	const participantsLength = useSelector(participantsLengthSelector);

	if (!participantsLength) return <Redirect to="/" />;

	return (
		<>
			<CharacterSection />

			{inBattle ? <BattleUI /> : <WinUI />}

			<NavLink exact to="/">
				Reset
			</NavLink>
		</>
	);
};

export default Arena;
