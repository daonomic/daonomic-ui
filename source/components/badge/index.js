import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export function Badge({
  className,
  children,
  size,
  color,
  isUppercase,
  ...restProps
}) {
  return (
    <span
      className={cn(
        className,
        styles.root,
        styles[`root_color_${color}`],
        styles[`root_size_${size}`],
        {
          [styles.root_uppercase]: isUppercase,
        },
      )}
      {...restProps}
    >
      {children}
    </span>
  );
}

export const colors = ['primary', 'warning', 'danger', 'success'];
export const sizes = ['s', 'm'];

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
  isUppercase: PropTypes.bool,
};

Badge.defaultProps = {
  className: '',
  children: null,
  size: 'm',
  color: 'primary',
};
