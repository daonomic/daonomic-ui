import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function PageHeader({ children, ...restProps }) {
  return (
    <header className={styles.header} {...restProps}>
      {children}
    </header>
  );
}

PageHeader.propTypes = {
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  children: null,
};
