import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import BaseSelect from '../base-select';
import FieldLabel from '../field-label';
import FieldHint from '../field-hint';

export default class Select extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  };

  id = nanoid(15);

  renderPlaceholder = ({ placeholder }) => {
    if (!placeholder) {
      return null;
    }

    return (
      <option value="" disabled>
        {placeholder}
      </option>
    );
  };

  renderLabel = ({ label }) => {
    if (!label) {
      return null;
    }

    return <FieldLabel>{label}</FieldLabel>;
  };

  render = () => {
    const {
      className,
      children,
      label,
      placeholder,
      errors,
      ...restProps
    } = this.props;
    const normalizedErrors = [].concat(errors).filter(Boolean);

    return (
      <div className={className}>
        {this.renderLabel({ label })}
        <BaseSelect invalid={normalizedErrors.length > 0} {...restProps}>
          {this.renderPlaceholder({ placeholder })}
          {children}
        </BaseSelect>
        <FieldHint type="error">{normalizedErrors.join(', ')}</FieldHint>
      </div>
    );
  };
}
