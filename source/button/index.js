import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop, switchProp } from 'styled-tools';
import defaultTheme from '../theme';

const propTypes = {
  theme: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  size: PropTypes.oneOf(['small', 'normal']),
  tagName: PropTypes.string,
};

const defaultProps = {
  theme: defaultTheme,
  size: 'normal',
  tagName: 'button',
};

class Button extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render = () => {
    const {
      tagName,
      theme,
      size,
      ...attrs
    } = this.props;
    const isNotButtonOrLink = !['button', 'a'].includes(tagName);

    if (!attrs.type && tagName === 'button') {
      attrs.type = 'button';
    }

    if (!attrs.role && isNotButtonOrLink && !attrs.disabled) {
      attrs.role = 'button';
    }

    if (!attrs.tabIndex && isNotButtonOrLink) {
      attrs.tabIndex = attrs.disabled ? '-1' : '0';
    }

    return React.createElement(tagName, attrs);
  };
}

const StyledButton = styled(Button)`
  appearance: none;
  display: table;
  padding: 0;
  padding-left: 1.25em;
  padding-right: 1.25em;
  height: 2.75em;
  font-family: inherit;
  font-size: ${switchProp('size', {
    normal: '16px',
    small: '14px',
  })};
  line-height: 2.75em;
  text-decoration: none;
  color: ${prop('theme.button.text')};
  background: none;
  border: none;
  background-color: ${prop('theme.button.background')};
  border-radius: .25em;
  cursor: pointer;
  transition: box-shadow .2s;

  &:hover,
  &:focus {
    transition: none;
    outline: none;
    box-shadow: 0 0 0 .075rem #fff, 0 0 0 .2rem ${prop('theme.button.active.background')};
  }

  &:active {
    background-color: ${prop('theme.button.active.background')};
  }

  &:disabled {
    box-shadow: none;
    background-color: ${prop('theme.button.disabled.background')};
    color: ${prop('theme.button.disabled.text')};
    cursor: default;
  }
`;

StyledButton.propTypes = propTypes;
StyledButton.defaultProps = defaultProps;

export default StyledButton;
