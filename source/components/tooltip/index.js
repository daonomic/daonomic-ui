import React from 'react';
import PropTypes from 'prop-types';
import RcTooltip from 'rc-tooltip';
import './styles.css';

export default class Tooltip extends React.Component {
  static propTypes = {
    overlay: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']).isRequired,
    trigger: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    return <RcTooltip {...this.props} transitionName="rc-tooltip-shift" />;
  }
}
