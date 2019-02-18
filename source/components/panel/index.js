import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';
import { PanelSeparator } from './separator';

export function Panel({ className, children, ...restProps }) {
  return (
    <section {...restProps} className={cn(className, styles.root)}>
      {children}
    </section>
  );
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Panel.defaultProps = {
  className: '',
  children: null,
};

Panel.Separator = PanelSeparator;
