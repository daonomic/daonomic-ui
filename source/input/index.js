import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import BaseInput from '../base-input';
import FieldLabel from '../field-label';
import FieldError from '../field-error';
import Uncontrolled from './uncontrolled';

export default class Input extends PureComponent {
  static Uncontrolled = Uncontrolled;

  static propTypes = {
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  };

  id = nanoid(15);

  render() {
    const { id } = this;
    const {
      label,
      element,
      value,
      className,
      errors,
      ...restProps
    } = this.props;
    const normalizedErrors = [].concat(errors).filter(Boolean);

    if (element === 'input') {
      restProps.type = restProps.type || 'text';
    }

    return (
      <div className={className}>
        <FieldLabel htmlFor={id}>{label}</FieldLabel>

        <BaseInput
          {...restProps}
          element={element}
          invalid={normalizedErrors.length > 0}
          value={value || ''}
          id={id}
        />

        <FieldError>{normalizedErrors.join(', ')}</FieldError>
      </div>
    );
  }
}
