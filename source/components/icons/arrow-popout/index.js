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
          d="M17.9728 6.00042C17.9356 6.00159 17.8985 6.00484 17.8616 6.01015H12.0025C11.6425 6.00507 11.3076 6.19388 11.1262 6.5043C10.9446 6.81472 10.9446 7.19863 11.1262 7.50905C11.3076 7.81947 11.6425 8.00827 12.0025 8.0032H15.5824L5.30696 18.2604C5.04617 18.5103 4.94111 18.8815 5.03231 19.2307C5.12351 19.5799 5.39672 19.8527 5.74656 19.9437C6.09641 20.0347 6.46821 19.9299 6.71861 19.6695L16.994 9.41235V12.9858C16.9889 13.3452 17.1781 13.6795 17.489 13.8607C17.8 14.0418 18.1846 14.0418 18.4955 13.8607C18.8065 13.6795 18.9957 13.3452 18.9906 12.9858V7.13318C19.0308 6.84279 18.9409 6.54943 18.7448 6.33119C18.5487 6.11295 18.2663 5.99196 17.9728 6.00042Z"
          fill={fill}
        />
      </BaseIcon>
    );
  }
}
