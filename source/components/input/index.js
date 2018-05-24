import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import cn from 'classnames';
import FieldLabel from '../field-label';
import FieldHint from '../field-hint';
import Uncontrolled from './uncontrolled';
import styles from './styles.css';

export default class Input extends PureComponent {
  static Uncontrolled = Uncontrolled;

  static propTypes = {
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    description: PropTypes.node,
    value: PropTypes.string,
    errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    element: 'input',
  };

  id = nanoid(15);

  state = {
    isFocused: false,
  };

  handleFocus = () => {
    this.setState({
      isFocused: true,
    });

    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus();
    }
  };

  handleBlur = () => {
    this.setState({
      isFocused: false,
    });

    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur();
    }
  };

  renderInput = () => {
    const { id } = this;
    const {
      element,
      disabled,
      value,
      errors,
      description, // eslint-disable-line no-unused-vars
      ...restProps
    } = this.props;
    const normalizedErrors = [].concat(errors).filter(Boolean);

    if (element === 'input') {
      restProps.type = restProps.type || 'text';
    }

    if (element === 'textarea') {
      restProps.rows = restProps.rows || 3;
    }

    return React.createElement(element, {
      ...restProps,
      className: cn(styles.input, {
        [styles.input_disabled]: disabled,
        [styles.input_invalid]: normalizedErrors.length > 0,
        [styles.input_textarea]: element === 'textarea',
      }),
      value: value || '',
      disabled,
      id: id,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
    });
  };

  render() {
    const { id } = this;
    const { className, label, placeholder, value, errors } = this.props;
    const normalizedErrors = [].concat(errors).filter(Boolean);
    const isLabelFloating =
      (placeholder || (value || '').toString()).length > 0 ||
      this.state.isFocused;

    return (
      <div className={cn(className, styles.root)}>
        {this.renderInput()}

        <FieldLabel
          htmlFor={id}
          className={cn(styles.label, {
            [styles.label_floating]: isLabelFloating,
          })}
        >
          {label}
        </FieldLabel>

        <FieldHint>{this.props.description}</FieldHint>
        <FieldHint type="error">{normalizedErrors.join(', ')}</FieldHint>
      </div>
    );
  }
}
