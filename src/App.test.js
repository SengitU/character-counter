import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should not render "recurring-char-info" initially', () => {
    const component = shallow(<App />);
    expect(component.find('#recurring-char-info').length).toBe(0);
  });

  it('should render "recurring-char-info" after state changes', () => {
    const component = shallow(<App />);
    component.setState({recurringCount: 1});
    expect(component.find('#recurring-char-info').length).toBe(1);
  });
})