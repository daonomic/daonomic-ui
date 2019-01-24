import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import spinner from './resources/spinner.svg';
import style from './style.css';

export default class Spinner extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
  };

  render() {
    const { className, size = 40, ...restProps } = this.props;

    return (
      <img
        {...restProps}
        className={cn(className, style.root)}
        src={spinner}
        alt="Loading..."
        style={{ maxWidth: size, maxHeight: size }}
      />
    );
  }
}
