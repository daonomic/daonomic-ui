import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export function PageHeader({ children, className, ...restProps }) {
  return (
    <header {...restProps} className={cn(className, styles.header)}>
      {children}
    </header>
  );
}

PageHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

PageHeader.defaultProps = {
  children: null,
};
