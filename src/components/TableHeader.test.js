import React from 'react';
import TableHeader from './TableHeader';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<TableHeader />);
});

it('renders the appropriate text', () => {
  const wrapper = shallow(<TableHeader />);

  expect(
    wrapper
      .find('span')
      .at(0)
      .text()
  ).toEqual('Character Name');
  expect(
    wrapper
      .find('span')
      .at(1)
      .text()
  ).toEqual('Initiative');
  expect(
    wrapper
      .find('span')
      .at(2)
      .text()
  ).toEqual('Hit Points');
  expect(
    wrapper
      .find('span')
      .at(3)
      .text()
  ).toEqual('Remove');
});
