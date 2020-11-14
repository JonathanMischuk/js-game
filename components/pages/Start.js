import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { setPlayer, setActionsQueue, setParticipants, setInBattle } from '../../state/actions';
import { createActionsQueue } from '../../actions';
import { createUnit } from '../../units';

const Start = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const enemy = createUnit({ name: 'Kefka' });
		const player = createUnit({ speed: 4, name: 'Cecil', ai: false });

		dispatch(setPlayer(player));
		dispatch(setActionsQueue(createActionsQueue([player, enemy])));
		dispatch(setParticipants([player, enemy]));
		dispatch(setInBattle(true));
	}, []);

	return (
		<NavLink exact to="/arena">
			Start
		</NavLink>
	);
};

export default Start;
