import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BaseIcon } from '../base-icon';

export class IconArrowPopout extends Component {
  static propTypes = {
    fill: PropTypes.string,
  };

  static defaultProps = {
    fill: '#4786ff',
  };

  render() {
    const { fill, ...restProps } = this.props;

    return (
      <BaseIcon {...restProps}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.1893 6.75H9V5.25H18H18.75V6V15H17.25V7.81066L6.53033 18.5303L5.46967 17.4697L16.1893 6.75Z"
          fill={fill}
        />
      </BaseIcon>
    );
  }
}
