import React from 'react';
import { useSelector } from 'react-redux';

const Stats = () => {
	const participants = useSelector((state) => state.participants);

	return participants.map((participant) => {
		return (
			<div key={participant.name}>
				<p>{participant.name}</p>
				<p>HP: {participant.hp}</p>
			</div>
		);
	});
};

export default Stats;
