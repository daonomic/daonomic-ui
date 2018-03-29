import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

const Badge = ({ className, children, color, ...restProps }) => (
  <span
    className={cn(className, styles.root, styles[`root_color_${color}`])}
    {...restProps}
  >
    {children}
  </span>
);

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'warning', 'danger', 'success']),
};

Badge.defaultProps = {
  className: '',
  children: null,
  color: 'primary',
};

export default Badge;
