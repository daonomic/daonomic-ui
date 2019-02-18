import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export function PageContent({ children, className, ...restProps }) {
  return (
    <main {...restProps} className={cn(className, styles.content)}>
      {children}
    </main>
  );
}

PageContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

PageContent.defaultProps = {
  children: null,
};
