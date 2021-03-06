import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './style.css';

export class BaseIcon extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.number,
  };

  render() {
    const { children, className, size = 24, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={cn(className, style.root)}
        style={{ maxWidth: size, maxHeight: size }}
      >
        <div className={style.inner}>
          <svg
            className={style.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            {children}
          </svg>
        </div>
      </div>
    );
  }
}
