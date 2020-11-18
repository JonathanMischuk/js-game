export const attack = (participants, actionsQueue) => {
	return participants.map((participant, i) => {
		if (i === actionsQueue[1]) {
			const hp = participant.hp - participants[actionsQueue[0]].strength;
			return {
				...participant,
				hp,
				living: hp > 0,
			};
		}

		return participant;
	});
};

const meta = {
	name: 'attack',
	action: attack,
};
