import React from 'react';
import PropTypes from 'prop-types';
import standardLogo from './resources/standard.svg';
import whiteLogo from './resources/white.svg';
import gradientLogo from './resources/gradient.svg';

export default class Logo extends React.Component {
  static propTypes = {
    design: PropTypes.oneOf(['standard', 'gradient', 'white']),
  };

  static defaultProps = {
    design: 'standard',
  };

  render = () => {
    let logoImage;

    switch (this.props.design) {
      case 'gradient': {
        logoImage = gradientLogo;
        break;
      }

      case 'white': {
        logoImage = whiteLogo;
        break;
      }

      default: {
        logoImage = standardLogo;
      }
    }

    return <img alt="Daonomic logo" {...this.props} src={logoImage} />;
  };
}