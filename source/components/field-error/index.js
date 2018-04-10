import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

const FieldError = ({ className, children }) => {
  if (!children) {
    return null;
  }

  return <p className={cn(className, styles.root)}>{children}</p>;
};

FieldError.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FieldError;
