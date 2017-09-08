import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<App />);
});

it('initializes with an empty state', () => {
	const wrapper = shallow(<App />);

	expect(wrapper.state()).toEqual({'characters': []});
});

it('adds a character', () => {
	const wrapper = shallow(<App />);
	const expectedState = { 
		'characters': [{
			'characterName': 'newCharacter',
			'hitPoints': '61',
			'initiative': '20'
		}]
	};

	wrapper.instance().handleSubmit('newCharacter', '20', '61');

	expect(wrapper.state()).toEqual(expectedState);
});

it('removes a character', () => {
	const wrapper = shallow(<App />);
	const initialState = {
		'characters': [{
			'characterName': 'character one',
			'hitPoints': '28',
			'initiative': '16'
		}, {
			'characterName': 'character two',
			'hitPoints': '23',
			'initiative': '18'
		}]
	};
	const expectedState = {
		'characters': [{
			'characterName': 'character two',
			'hitPoints': '23',
			'initiative': '18'
		}]
	};

	wrapper.setState(initialState);
	wrapper.instance().removeCharacter('0');
	expect(wrapper.state()).toEqual(expectedState);
});