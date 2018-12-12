import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-tooltip-lite';
import cn from 'classnames';
import styles from './styles.css';

export default function DaonomicTooltip({ className, children, ...restProps }) {
  return (
    <Tooltip
      className={cn(styles.root, className)}
      hoverDelay={0}
      padding="8px"
      {...restProps}
    >
      {children}
    </Tooltip>
  );
}

DaonomicTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

DaonomicTooltip.defaultProps = {};
