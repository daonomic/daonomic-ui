import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './button.css';

export default function Button(props) {
  const {
    tagName,
    className,
    size,
    ...attrs
  } = props;
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

  attrs.className = cn(className, styles.root);

  return React.createElement(tagName, attrs);
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'normal']),
  className: PropTypes.string,
  tagName: PropTypes.string,
};

Button.defaultProps = {
  size: 'normal',
  className: '',
  tagName: 'button',
};
