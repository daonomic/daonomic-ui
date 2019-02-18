import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export class FormField extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    withGhostLabel: PropTypes.bool,
  };

  render() {
    const { className, withGhostLabel, ...restProps } = this.props;

    return (
      <div
        className={cn(className, styles.field, {
          [styles['field_with-ghost-label']]: withGhostLabel,
        })}
        {...restProps}
      />
    );
  }
}
