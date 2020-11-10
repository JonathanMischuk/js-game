import React, { useEffect } from 'react';

import { updateActionsQueue } from '../../actions';
import Button from '../ui/Button';

const ActionsPanel = ({
	actionsQueue,
	participants,
	setActionsQueue,
	setParticipants,
	setInBattle,
}) => {
	const current = participants[actionsQueue[0]];

	// if (current.ai) {
	// 	const results = current.actions.attack(participants, actionsQueue);

	// 	setParticipants(results);
	// 	setActionsQueue(updateActionsQueue(actionsQueue));

	// 	if (!results[actionsQueue[1]].living) setInBattle(false);
	// 	return null;
	// }

	return Object.keys(current.actions).map((action) => {
		const onClick = () => {
			const results = current.actions[action](participants, actionsQueue);

			setParticipants(results);
			setActionsQueue(updateActionsQueue(actionsQueue));

			if (!results[actionsQueue[1]].living) setInBattle(false);
		};

		return (
			<Button onClick={onClick} key={action}>
				{action}
			</Button>
		);
	});
};

export default ActionsPanel;
