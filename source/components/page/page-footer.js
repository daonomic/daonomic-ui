import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export function PageFooter({ children, className, ...restProps }) {
  return (
    <footer {...restProps} className={cn(className, styles.footer)}>
      {children}
    </footer>
  );
}

PageFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

PageFooter.defaultProps = {
  children: null,
};
