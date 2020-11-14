import { SET_ACTIONS_QUEUE, SET_PLAYER, SET_PARTICIPANTS, SET_IN_BATTLE } from '../constants';

export const setActionsQueue = (actionsQueue) => ({
	type: SET_ACTIONS_QUEUE,
	payload: { actionsQueue },
});

export const setPlayer = (player) => ({
	type: SET_PLAYER,
	payload: { player },
});

export const setParticipants = (participants) => ({
	type: SET_PARTICIPANTS,
	payload: { participants },
});

export const setInBattle = (inBattle) => ({
	type: SET_IN_BATTLE,
	payload: { inBattle },
});
