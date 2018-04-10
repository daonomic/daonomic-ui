import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export default function Button(props) {
  const { element, className, size, ...attrs } = props;
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

  attrs.className = cn(className, styles.root, {
    [styles.root_disabled]: attrs.disabled,
    [styles[`root_size_${size}`]]: size,
  });

  return React.createElement(element, attrs);
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'normal']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Button.defaultProps = {
  size: 'normal',
  className: '',
  element: 'button',
};
