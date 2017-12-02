import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './select.css';

export default function Select({ className, children, ...restProps }) {
  return (
    <div className={cn(className, styles.root)}>
      <select {...restProps}>
        {children}
      </select>
    </div>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Select.defaultProps = {
  className: '',
  children: null,
};
