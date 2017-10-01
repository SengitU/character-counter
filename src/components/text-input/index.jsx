import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { debounce } from '../../utils/debounce';

import Text from '../text';

import './styles.css';

export default class TextBox extends React.Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    if (props.onChange) {
      this.onValueChanged = debounce(props.onChange, 800);
    }
    this.state = {
      value: props.value,
      isTouched: false,
      isValid: true
    }
  }

  static propTypes = {
    textBoxStyle: PropTypes.string,
    inputLabelStyle: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    placeHolder: PropTypes.string,
    onValueChanged: PropTypes.func,
    // This should be array of validators in future
    validator: PropTypes.func
  };

  onChange(event){
    const { validator } = this.props;
    let { value } = event.target;

    if (validator) {
      if (validator(value)) {
        this.setState({...this.state, value, isTouched: true, isValid: true});
      } else {
        this.setState({...this.state, value, isTouched: true, isValid: false});
      }
    } else {
      this.setState({...this.state, value, isTouched: true, isValid: true});
    }
    if (this.onValueChanged) {
      this.onValueChanged(value);
    }
  }

  render() {
    const { textBoxStyle, id, label, placeHolder, labelStyle } = this.props,
      { value, isTouched, isValid } = this.state,
      inputStyle = cx({[textBoxStyle]: !!textBoxStyle}, "input"),
      inputLabelStyle = cx("label", {
        [labelStyle]: !!labelStyle
      });

    return (
      <div>
        { label && <label className={inputLabelStyle} key={`${id}-label`} htmlFor={id}>{label}</label> }
        <input
          id={`${id}-input`}
          key={`${id}-input`}
          className={inputStyle}
          defaultValue={value}
          placeholder={placeHolder}
          onChange={this.onChange} />
        { isTouched && !isValid && <Text key={`${id}-error`} element="p" className="error" content="Input must be alphanumeric" /> }
      </div>
    )
  }
}
