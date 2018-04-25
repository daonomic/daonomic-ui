import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import FieldHint from '../field-hint';
import styles from './styles.css';

export default class Checkbox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  };

  render = () => {
    const { className, label, errors, ...restProps } = this.props;
    const normalizedErrors = [].concat(errors).filter(Boolean);

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
        <FieldHint type="error">{normalizedErrors.join(', ')}</FieldHint>
      </div>
    );
  };
}
