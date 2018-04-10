import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function PageContent({ children, ...restProps }) {
  return (
    <main className={styles.content} {...restProps}>
      {children}
    </main>
  );
}

PageContent.propTypes = {
  children: PropTypes.node,
};

PageContent.defaultProps = {
  children: null,
};
