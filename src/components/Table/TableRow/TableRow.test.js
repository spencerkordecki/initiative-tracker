import React from 'react';
import TableRow from '../TableRow';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<TableRow />);
});

it('renders the provided information', () => {
  const wrapper = shallow(
    <TableRow
      index="0"
      characterName="character one"
      initiative="11"
      hitPoints="14"
    />
  );

  expect(
    wrapper
      .find('span')
      .at(0)
      .text()
  ).toEqual('character one');
  expect(
    wrapper
      .find('span')
      .at(1)
      .text()
  ).toEqual('11');
  expect(
    wrapper
      .find('span')
      .at(2)
      .text()
  ).toEqual('14');
});
