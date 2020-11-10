import React from 'react'

const Stats = ({ participants }) => {
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