import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';
import PanelSeparator from './separator';

export default function Panel({ className, children }) {
  return <section className={cn(className, styles.root)}>{children}</section>;
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
