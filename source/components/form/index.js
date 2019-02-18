import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FormField } from './field';
import { FormGroup } from './group';
import styles from './styles.css';

export class Form extends React.Component {
  static Field = FormField;
  static Group = FormGroup;

  static propTypes = {
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
  };

  render() {
    const { element, className, ...restProps } = this.props;

    return React.createElement(element || 'form', {
      ...restProps,
      className: cn(className, styles.root),
    });
  }
}
