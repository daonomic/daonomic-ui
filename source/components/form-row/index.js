import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

const FormRow = ({ className, children }) => {
  return <div className={cn(className, styles.root)}>{children}</div>;
};

FormRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FormRow;
