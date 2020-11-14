import { combineReducers } from 'redux';

import { actionsQueue, player, participants, inBattle } from './reducers';

export const rootReducer = combineReducers({
	actionsQueue,
	player,
	participants,
	inBattle,
});
