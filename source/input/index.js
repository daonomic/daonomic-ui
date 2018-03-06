import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import nanoid from 'nanoid';
import FieldError from '../field-error';
import styles from './styles.css';
import Uncontrolled from './uncontrolled';

export default class Input extends PureComponent {
  static Uncontrolled = Uncontrolled;

  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    type: 'text',
  };

  id = nanoid(15);

  render() {
    const { id } = this;
    const {
      label,
      className,
      value,
      error,
      disabled,
      ...restProps
    } = this.props;

    return (
      <div
        className={cn(styles.root, {
          [styles.root_invalid]: Boolean(error),
          [styles.root_disabled]: disabled,
        })}
      >
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>

        <input
          {...restProps}
          value={value}
          id={id}
          disabled={disabled}
          className={cn(className, styles.input)}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <FieldError>{error}</FieldError>
      </div>
    );
  }
}
