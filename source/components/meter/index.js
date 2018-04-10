import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export default function Meter({ className, value }) {
  return (
    <div className={cn(className, styles.root)}>
      <div className={cn(styles.bar, styles.bar_background)} />

      <div
        className={cn(styles.bar, styles.bar_foreground)}
        style={{ width: `${Math.max(value * 100, 1)}%` }}
      />
    </div>
  );
}

Meter.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
};

Meter.defaultProps = {
  className: '',
  value: 0,
};
