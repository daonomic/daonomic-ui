import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './panel.css';

export default function PanelSeparator({ className }) {
  return (
    <div className={cn(className, styles.separator)} />
  );
}

PanelSeparator.propTypes = {
  className: PropTypes.string,
};

PanelSeparator.defaultProps = {
  className: '',
};
