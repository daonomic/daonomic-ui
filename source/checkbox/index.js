import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import FieldError from '../field-error';
import styles from './styles.css';

export default class Checkbox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
  };

  render = () => {
    const { className, label, error, ...restProps } = this.props;

    return (
      <div className={cn(className, styles.root)}>
        <label className={styles.label}>
          <input className={styles.input} type="checkbox" {...restProps} />
          <span className={styles.indicator} />
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: label,
            }}
          />
        </label>
        <FieldError>{error}</FieldError>
      </div>
    );
  };
}
