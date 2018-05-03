import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export default class FormField extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { className, ...restProps } = this.props;

    return <div className={cn(className, styles.field)} {...restProps} />;
  }
}
