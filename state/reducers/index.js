import { SET_ACTIONS_QUEUE, SET_PLAYER, SET_PARTICIPANTS, SET_IN_BATTLE } from '../constants';
import { createUnit } from '../../units';

export const actionsQueue = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_ACTIONS_QUEUE: {
			const { actionsQueue } = payload;
			return actionsQueue;
		}

		default: {
			return state;
		}
	}
};

export const player = (state = createUnit(), action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_PLAYER: {
			const { player } = payload;
			return player;
		}

		default: {
			return state;
		}
	}
};

export const participants = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_PARTICIPANTS: {
			const { participants } = payload;
			return participants;
		}

		default: {
			return state;
		}
	}
};

export const inBattle = (state = false, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_IN_BATTLE: {
			const { inBattle } = payload;
			return inBattle;
		}

		default: {
			return state;
		}
	}
};
