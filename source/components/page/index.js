import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import PageContent from './page-content';

export default function Page({ children, ...restProps }) {
  return (
    <div {...restProps} className={styles.root}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

Page.Header = PageHeader;
Page.Footer = PageFooter;
Page.Content = PageContent;
