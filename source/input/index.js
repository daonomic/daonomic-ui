import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import { defaultTheme } from '../theme';

const inputHeight = 40;
const labelHeight = 17;

const Root = styled.div`
  ${ifProp('isDisabled', css`
    opacity: .5;
  `)}
`;

const Field = styled.div`
  box-sizing: border-box;
  position: relative;
  height: ${inputHeight + labelHeight}px;
  padding-top: ${labelHeight}px;
`;

const Input = styled.input`
  box-sizing: border-box;
  appearance: none;
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: ${inputHeight}px;
  line-height: 1;
  font-size: 16px;
  line-height: 1.125;
  outline: 0;
  border: 0;
  border-bottom: 1px solid ${prop('theme.borders')};
  background-color: transparent;
  transition: border .2s;

  &:-webkit-autofill {
    /* this prevents autofilled input background-color change in Chrome */
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    border-bottom-color: ${prop('theme.primary')};
    box-shadow: 0 1px 0 ${prop('theme.primary')};
  }

  ${ifProp('disabled', css`
    cursor: not-allowed;
  `)}

  ${ifProp('isInvalid', css`
    border-bottom-color: ${prop('theme.danger')};
  `)}
`;

Input.defaultProps = {
  theme: defaultTheme,
};

const Label = styled.label`
  box-sizing: border-box;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  font-size: 18px;
  transform: translateY(${(labelHeight / 2) + (inputHeight / 2)}px);
  line-height: ${labelHeight}px;
  color: ${prop('theme.placeholders')};
  transition: all .2s;
  cursor: pointer;

  ${ifProp('isFixed', css`
    transform: translateY(0);
    font-size: 12px;
  `)}

  ${ifProp('isInvalid', css`
    color: ${prop('theme.danger')};
  `)}

  ${ifProp('isDisabled', css`
    cursor: not-allowed;
  `)}

  ${Input}:focus ~ & {
    color: ${prop('theme.primary')};
  }
`;

Label.defaultProps = {
  theme: defaultTheme,
};

const Error = styled.p`
  margin: 0;
  padding-top: 5px;
  font-size: 12px;
  line-height: 1.5;
  color: ${prop('theme.danger')};
`;

Error.defaultProps = {
  theme: defaultTheme,
};

export default class StyledInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    type: 'text',
    className: '',
    error: '',
    disabled: false,
    onFocus: () => {},
    onBlur: () => {},
  };

  constructor(props) {
    super(props);
    this.id = Math.random().toString(16);
    this.state = {
      isFocused: false,
    };
  }

  handleFocus = (event) => {
    this.setState({
      isFocused: true,
    });
    this.props.onFocus(event);
  };

  handleBlur = (event) => {
    this.setState({
      isFocused: false,
    });
    this.props.onBlur(event);
  };

  renderError = () => {
    const { error } = this.props;

    if (!error) {
      return null;
    }

    return (
      <Error>
        {error}
      </Error>
    );
  };

  renderField = () => {
    const { id } = this;
    const { isFocused } = this.state;
    const {
      label,
      value,
      error,
      disabled,
      ...restProps
    } = this.props;
    const isInvalid = Boolean(error);

    return (
      <Field>
        <Input
          {...restProps}
          id={id}
          value={value}
          disabled={disabled}
          isInvalid={isInvalid}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />

        <Label
          htmlFor={id}
          isInvalid={isInvalid}
          isFixed={isFocused || value !== ''}
          isDisabled={disabled}
        >
          {label}
        </Label>
      </Field>
    );
  };

  render = () => {
    const { disabled } = this.props;

    return (
      <Root isDisabled={disabled}>
        {this.renderField()}
        {this.renderError()}
      </Root>
    );
  };
}
