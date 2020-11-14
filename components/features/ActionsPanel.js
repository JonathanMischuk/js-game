import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActionsQueue, setParticipants, setInBattle } from '../../state/actions';
import { updateActionsQueue } from '../../actions';
import Button from '../ui/Button';

const ActionsPanel = () => {
	const dispatch = useDispatch();
	const actionsQueue = useSelector((state) => state.actionsQueue);
	const participants = useSelector((state) => state.participants);

	if (actionsQueue.length > 0) {
		const current = participants[actionsQueue[0]];

		return Object.keys(current.actions).map((action) => {
			const onClick = () => {
				const results = current.actions[action](participants, actionsQueue);

				dispatch(setParticipants(results));
				dispatch(setActionsQueue(updateActionsQueue(actionsQueue)));

				if (!results[actionsQueue[1]].living) dispatch(setInBattle(false));
			};

			return (
				<Button onClick={onClick} key={action}>
					{action}
				</Button>
			);
		});
	}

	return null;
};

export default ActionsPanel;
