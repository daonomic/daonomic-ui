import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export default class BaseInput extends Component {
  static propTypes = {
    element: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
  };

  static defaultProps = {
    element: 'input',
  };

  render() {
    const { element, className, disabled, invalid, ...restProps } = this.props;

    const attrs = {
      ...restProps,
      disabled,
      className: cn(className, styles.root, {
        [styles.root_disabled]: disabled,
        [styles.root_invalid]: invalid,
        [styles.root_textarea]: element === 'textarea',
      }),
    };

    if (element === 'textarea') {
      attrs.rows = attrs.rows || 3;
    }

    return React.createElement(element, attrs);
  }
}
