import { atom } from 'recoil';
import { createUnit } from '../units';

export const actionsQueueState = atom({
	key: 'actionQueueState',
	default: [],
});

export const playerState = atom({
	key: 'playerState',
	default: createUnit(),
});

export const participantsState = atom({
	key: 'participantsState',
	default: [],
});
