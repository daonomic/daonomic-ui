import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './meter.css';

export default function Meter({ className, value }) {
  return (
    <svg className={cn(className, styles.root)}>
      <rect
        className={cn(styles.bar, styles.bar_background)}
        x="0"
        y="0"
        width="100%"
        height="100%"
      />

      <rect
        className={cn(styles.bar, styles.bar_foreground)}
        x="0"
        y="0"
        width={`${value * 100}%`}
        height="100%"
      />
    </svg>
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
