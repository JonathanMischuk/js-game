import { actions } from '../actions';

export const base = {
	name: 'Cecil',
	hp: 10,
	strength: 3,
	defense: 2,
	speed: 3,
	living: true,
	ai: true,
	actions: ['attack', 'defend'],
};

const createUnitActions = (props) => {
	return props.actions.reduce((acc, val) => {
		return {
			...acc,
			[val]: actions[val],
		};
	}, {});
};

export const createUnit = (unit = {}) => {
	const props = { ...base, ...unit };
	return { ...props, actions: createUnitActions(props) };
};
