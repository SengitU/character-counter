import React from 'react';
import { shallow, configure } from 'enzyme';
import Text from './index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Text component', () => {
  it('should render', () => {
    const content = "test";
    const component = shallow(<Text content={content} />);
    expect(component.contains(content)).toBe(true);
  });
})