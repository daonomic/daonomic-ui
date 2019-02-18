import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FieldHint } from '../field-hint';
import styles from './styles.css';

export class Checkbox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    labelProps: PropTypes.object,
    description: PropTypes.node,
    errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  };

  render = () => {
    const {
      className,
      label,
      description,
      errors,
      labelProps = {},
      ...restProps
    } = this.props;
    const normalizedErrors = [].concat(errors).filter(Boolean);

    return (
      <div className={cn(className, styles.root)}>
        <label
          {...labelProps}
          className={cn(labelProps.className, styles.label)}
        >
          <input className={styles.input} type="checkbox" {...restProps} />
          <span className={styles.indicator} />
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: label,
            }}
          />
        </label>
        <div className={styles.hints}>
          <FieldHint>{description}</FieldHint>
          <FieldHint type="error">{normalizedErrors.join(', ')}</FieldHint>
        </div>
      </div>
    );
  };
}
