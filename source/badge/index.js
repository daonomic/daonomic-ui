import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

const Badge = ({ className, children }) => (
  <span className={cn(className, styles.root)}>{children}</span>
);

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Badge.defaultProps = {
  className: '',
  children: null,
};

export default Badge;
