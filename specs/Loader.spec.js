import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../src/components/Loader';

describe('Loader', () => {
  it('should render correctly', () => {
    const component = shallow(<Loader loading={true} />);
    expect(component).toMatchSnapshot();
  });
  it('should not render', () => {
    const component = shallow(<Loader />);
    expect(component.get(0)).toEqual(null);
  });
  it('should render for promiseTracker', () => {
    const component = shallow(<Loader promiseTracker={() => ({ promiseInProgress: true })} />);
    expect(component).toExist();
  });
});
