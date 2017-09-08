import React from 'react';
import TableRow from './TableRow';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<TableRow />);
});

it('initializes with character info', () => {
	const wrapper = shallow(
		<TableRow 
			index="0"
			characterName="character one"
			initiative="11"
			hitPoints="14" />);
	const expectedState = {
		index: '0',
		characterName: 'character one',
		initiative: '11',
		hitPoints: '14'
	};

	expect(wrapper.state()).toEqual(expectedState);
});
