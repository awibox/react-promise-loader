import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../src/components/Loader';

describe('Loader', () => {
  it('should render correctly', () => {
    const component = shallow(<Loader />);
    expect(component).toMatchSnapshot();
  });
});
