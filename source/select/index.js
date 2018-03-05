import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import FieldError from '../field-error';
import styles from './styles.css';

export default class Select extends Component {
  render = () => {
    const { className, children, error, ...restProps } = this.props;

    return (
      <div
        className={cn(className, styles.root, {
          [styles.root_invalid]: Boolean(error),
        })}
      >
        <div className={styles['select-wrapper']}>
          <select className={styles.select} {...restProps}>
            {children}
          </select>
        </div>
        <FieldError>{error}</FieldError>
      </div>
    );
  };
}

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.string,
};
