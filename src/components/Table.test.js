import React from 'react';
import Table from './Table';
import TableRow from './TableRow';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<Table />);
});

it('creates a table row for each character', () => {
	const wrapper = shallow(<Table />);
	const initialState = {
		'characters': []
	};
	const newState = {
		'characters': [{
			'characterName': 'character one',
			'initiative': '14',
			'hitPoints': '23'
		}, {
			'characterName': 'character two',
			'initiative': '18',
			'hitPoints': '54'
		}, {
			'characterName': 'character three',
			'initiative': '4',
			'hitPoints': '67'
		},]
	};

	expect(wrapper.state()).toEqual(initialState);

	wrapper.setState(newState);
	expect(wrapper.find(TableRow)).toHaveLength(3);
});