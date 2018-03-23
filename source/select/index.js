import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import FieldError from '../field-error';
import styles from './styles.css';

export default class Select extends Component {
  renderLabel = (label) => {
    if (!label) {
      return null;
    }

    return (
      <option value="" hidden disabled>
        {label}
      </option>
    );
  };

  render = () => {
    const {
      className,
      children,
      value,
      label,
      errors,
      disabled,
      ...restProps
    } = this.props;
    const normalizedErrors = [].concat(errors).filter(Boolean);

    return (
      <div
        className={cn(className, styles.root, {
          [styles.root_invalid]: normalizedErrors.length > 0,
          [styles.root_disabled]: disabled,
        })}
      >
        <div className={styles['select-wrapper']}>
          <select
            disabled={disabled}
            className={styles.select}
            value={value || ''}
            {...restProps}
          >
            {this.renderLabel(label)}
            {children}
          </select>
        </div>
        <FieldError>{normalizedErrors.join(', ')}</FieldError>
      </div>
    );
  };
}

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string,
  label: PropTypes.string,
  errors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  disabled: PropTypes.bool,
};
