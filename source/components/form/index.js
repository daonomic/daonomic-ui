import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Field from './field';
import Group from './group';
import styles from './styles.css';

export default class Form extends React.Component {
  static Field = Field;
  static Group = Group;

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
