import React from 'react';
import PropTypes from 'prop-types';
import styles from './page.css';

export default function PageFooter({ children, ...restProps }) {
  return (
    <footer className={styles.footer} {...restProps}>
      {children}
    </footer>
  );
}

PageFooter.propTypes = {
  children: PropTypes.node,
};

PageFooter.defaultProps = {
  children: null,
};
