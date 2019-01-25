import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export default function Button(props) {
  const { element, className, size, design, fullWidth, ...attrs } = props;
  const isNotButtonOrLink = !['button', 'a'].includes(element);

  if (!attrs.type && element === 'button') {
    attrs.type = 'button';
  }

  if (!attrs.tabIndex && isNotButtonOrLink) {
    attrs.tabIndex = attrs.disabled ? '-1' : '0';
  }

  if (attrs.disabled) {
    attrs.onClick = undefined;
  }

  attrs.className = cn(
    className,
    styles.root,
    styles[`root_size_${size}`],
    styles[`root_design_${design}`],
    {
      [styles.root_disabled]: attrs.disabled,
      [styles.root_fullwidth]: fullWidth,
    },
  );

  return React.createElement(element, attrs);
}

export const sizes = ['s', 'm'];
export const designs = ['primary', 'secondary', 'secondary-inverse'];

Button.propTypes = {
  size: PropTypes.oneOf(sizes),
  design: PropTypes.oneOf(designs),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Button.defaultProps = {
  size: 'm',
  design: 'secondary',
  className: '',
  element: 'button',
};
