import { attack } from './attack';
import { defend } from './defend';

export const createActionsQueue = (participants = []) => {
	return participants.sort((a, b) => b.speed - a.speed).map((participant, i) => i);
};

export const updateActionsQueue = (actionsQueue) => {
	return [actionsQueue[1], actionsQueue[0]];
};

export const actions = { attack, defend };
