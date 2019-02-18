import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export class BaseSelect extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
  };

  render = () => {
    const {
      className,
      children,
      value,
      invalid,
      disabled,
      ...restProps
    } = this.props;

    return (
      <div className={cn(className, styles.root)}>
        <select
          disabled={disabled}
          className={cn(styles.select, {
            [styles.select_invalid]: invalid,
            [styles.select_disabled]: disabled,
          })}
          value={value || ''}
          {...restProps}
        >
          {children}
        </select>
      </div>
    );
  };
}
