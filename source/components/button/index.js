import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export default function Button(props) {
  const { element, className, size, design, ...attrs } = props;
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
    },
  );

  return React.createElement(element, attrs);
}

export const sizes = ['s', 'm', 'l'];
export const designs = ['primary', 'secondary'];

Button.propTypes = {
  size: PropTypes.oneOf(sizes),
  design: PropTypes.oneOf(designs),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Button.defaultProps = {
  size: 'm',
  design: 'primary',
  className: '',
  element: 'button',
};
