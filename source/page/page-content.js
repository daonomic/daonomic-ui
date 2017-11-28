import React from 'react';
import PropTypes from 'prop-types';
import styles from './page.css';

export default function PageContent({ children, ...restProps }) {
  return (
    <footer className={styles.content} {...restProps}>
      {children}
    </footer>
  );
}

PageContent.propTypes = {
  children: PropTypes.node,
};

PageContent.defaultProps = {
  children: null,
};
