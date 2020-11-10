import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { actionsQueueState, participantsState } from '../../atoms';

import Stats from '../features/Stats';
import ActionsPanel from '../features/ActionsPanel';

const Arena = () => {
	const [inBattle, setInBattle] = useState(true);
	const [actionsQueue, setActionsQueue] = useRecoilState(actionsQueueState);
	const [participants, setParticipants] = useRecoilState(participantsState);

	// useEffect(() => {
	// 	if (actionsQueue.length > 0) {
	// 		const current = participants[actionsQueue[0]];

	// 		if (current.ai) {
	// 			const results = current.actions.attack(participants, actionsQueue);

	// 			setParticipants(results);
	// 			setActionsQueue(updateActionsQueue(actionsQueue));

	// 			if (!results[actionsQueue[1]].living) setInBattle(false);
	// 		}
	// 	}
	// }, [actionsQueue]);

	return (
		<>
			{actionsQueue.length > 0 && inBattle && (
				<ActionsPanel
					actionsQueue={actionsQueue}
					participants={participants}
					setActionsQueue={setActionsQueue}
					setParticipants={setParticipants}
					setInBattle={setInBattle}
				/>
			)}

			<Stats participants={participants} />

			<NavLink exact to="/">
				Reset
			</NavLink>
		</>
	);
};

export default Arena;
