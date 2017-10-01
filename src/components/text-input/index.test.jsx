import React from 'react';
import { shallow, configure } from 'enzyme';
import TextInput from './index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('TextInput component', () => {

  it('should not render an error initially', () => {
    const component = shallow(
      <TextInput textBoxStyle='word-input'
        id='word'
        placeHolder='Please enter some text'/>
    );
    expect(component.find('.error').length).toBe(0);
  });

  it('should fire onChange event on value change', () => {
    const onChange = jest.fn();
    const id = 'word';
    const value = 'test';
    const component = shallow(
      <TextInput textBoxStyle='word-input'
        id={id}
        onChange={onChange}
        placeHolder='Please enter some text' />
    );
    component.find('input').simulate('change', {target: {value}});
    jest.runOnlyPendingTimers();

    expect(onChange.mock.calls.length).toBe(1);
    // first parameter of first call
    expect(onChange.mock.calls[0][0]).toBe(value);
  });

  it('should render error if validation fails', () => {
    const id = 'word';
    const value = 'test';
    const component = shallow(
      <TextInput textBoxStyle='word-input'
        id={id}
        validator={() => false}
        placeHolder='Please enter some text' />
    );
    component.find('input').simulate('change', {target: {value}});
    jest.runOnlyPendingTimers();

    expect(component.find('.error').length).toBe(1);
  });

  it('should not render error if validation success', () => {
    const id = 'word';
    const value = 'test';
    const component = shallow(
      <TextInput textBoxStyle='word-input'
        id={id}
        validator={() => true}
        placeHolder='Please enter some text' />
    );
    component.find('input').simulate('change', {target: {value}});
    jest.runOnlyPendingTimers();

    expect(component.find('.error').length).toBe(0);
  });

  it('should render label if label text provided', () => {
    const id = 'word';
    const label = 'test';
    const component = shallow(
      <TextInput textBoxStyle='word-input'
        id={id}
        label={label}
        placeHolder='Please enter some text' />
    );
    expect(component.find('label').text()).toBe(label);
  });
})