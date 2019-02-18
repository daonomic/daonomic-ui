import React from 'react';
import PropTypes from 'prop-types';
import RcTooltip from 'rc-tooltip';
import './styles.css';

export function Tooltip(props) {
  return <RcTooltip {...props} transitionName="rc-tooltip-shift" />;
}

Tooltip.propTypes = {
  overlay: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']).isRequired,
  trigger: PropTypes.arrayOf(PropTypes.string).isRequired,
};
