import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { createActionsQueue } from '../../actions';
import { createUnit } from '../../units';
import { playerState, actionsQueueState, participantsState } from '../../atoms';

const Start = () => {
	const [, setPlayer] = useRecoilState(playerState);
	const [, setActionsQueue] = useRecoilState(actionsQueueState);
	const [, setParticipants] = useRecoilState(participantsState);

	// start: events that happen only once
	useEffect(() => {
		const enemy = createUnit({ name: 'Kefka' });
		const player = createUnit({ speed: 4, name: 'Cecil', ai: false });

		setPlayer(player);
		setActionsQueue(createActionsQueue([player, enemy]));
		setParticipants([player, enemy]);
	}, []);

	return (
		<NavLink exact to="/arena">
			Start
		</NavLink>
	);
};

export default Start;
