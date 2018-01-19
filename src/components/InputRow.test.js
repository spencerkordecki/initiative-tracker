import React from 'react';
import InputRow from './InputRow';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<InputRow />);
});

it('initializes with an empty state', () => {
  const wrapper = shallow(<InputRow />);
  const expectedState = {
    characterName: '',
    initiative: '',
    hitPoints: ''
  };

  expect(wrapper.state()).toEqual(expectedState);
});

it('resets its state', () => {
  const wrapper = shallow(<InputRow />);
  const initialState = {
    characterName: 'character one',
    initiative: '11',
    hitPoints: '15'
  };
  const expectedState = {
    characterName: '',
    initiative: '',
    hitPoints: ''
  };

  wrapper.setState(initialState);
  wrapper.instance().reset();
  expect(wrapper.state()).toEqual(expectedState);
});

it('accepts a character name', () => {
  const wrapper = shallow(<InputRow />);

  wrapper.find('input[name="characterName"]').simulate('change', {
    target: {
      name: 'characterName',
      value: 'new character'
    }
  });

  expect(wrapper.state().characterName).toEqual('new character');
});

it('accepts a character intiative', () => {
  const wrapper = shallow(<InputRow />);

  wrapper.find('input[name="initiative"]').simulate('change', {
    target: {
      name: 'initiative',
      value: '12'
    }
  });

  expect(wrapper.state().initiative).toEqual('12');
});

it('accepts a character health pool', () => {
  const wrapper = shallow(<InputRow />);

  wrapper.find('input[name="hitPoints"]').simulate('change', {
    target: {
      name: 'hitPoints',
      value: '16'
    }
  });

  expect(wrapper.state().hitPoints).toEqual('16');
});

it('is not completed until all fields are filled out', () => {
  const wrapper = shallow(<InputRow />);

  wrapper.find('input[name="characterName"]').simulate('change', {
    target: {
      name: 'characterName',
      value: 'new character'
    }
  });

  expect(wrapper.instance().validate()).toEqual(false);
});

it('accepts all inputs and updates state', () => {
  const wrapper = shallow(<InputRow />);
  const expectedState = {
    characterName: 'character one',
    initiative: '11',
    hitPoints: '15'
  };

  wrapper.find('input[name="characterName"]').simulate('change', {
    target: {
      name: 'characterName',
      value: 'character one'
    }
  });
  wrapper.find('input[name="initiative"]').simulate('change', {
    target: {
      name: 'initiative',
      value: '11'
    }
  });
  wrapper.find('input[name="hitPoints"]').simulate('change', {
    target: {
      name: 'hitPoints',
      value: '15'
    }
  });

  expect(wrapper.instance().validate()).toEqual(true);
  expect(wrapper.state()).toEqual(expectedState);
});
