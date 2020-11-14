import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { createUnit } from '../../units';
import { playerState, actionsQueueState, participantsState, inBattleState } from '../../atoms';

const StartGame = () => {
	const [player, setPlayer] = useRecoilState(playerState);
	const [actionsQueue, setActionsQueue] = useRecoilState(actionsQueueState);
	const [participants, setParticipants] = useRecoilState(participantsState);
	const [battleState, setInBattle] = useRecoilState(inBattleState);

	useEffect(() => {
		const enemy = createUnit({ name: 'Kefka' });
		const player = createUnit({ speed: 4, name: 'Cecil', ai: false });

		setPlayer(player);
		setActionsQueue(createActionsQueue([player, enemy]));
		setParticipants([player, enemy]);
		setInBattle(true);
	}, []);

	return null;
};

export default StartGame;
