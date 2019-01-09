import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import PageContent from './page-content';
import styles from './styles.css';

export default function Page({ children, className, ...restProps }) {
  return (
    <div {...restProps} className={cn(className, styles.root)}>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Page.defaultProps = {
  children: null,
};

Page.Header = PageHeader;
Page.Footer = PageFooter;
Page.Content = PageContent;
