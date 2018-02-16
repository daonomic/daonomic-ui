import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './checkbox.css';

export default class Checkbox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    className: '',
    label: '',
    children: null,
  };

  renderError = () => {
    const { error } = this.props;

    if (!error) {
      return null;
    }

    return (
      <div className={styles.error}>
        {error}
      </div>
    );
  };

  render = () => {
    const {
      className,
      children,
      label,
      ...restProps
    } = this.props;

    return (
      <div className={cn(className, styles.root)}>
        <label className={styles.label}>
          <input className={styles.input} type="checkbox" {...restProps} />
          <span className={styles.indicator} />
          <div
            className={styles.label}
            dangerouslySetInnerHTML={{
              __html: label,
            }}
          />
        </label>

        {this.renderError()}
      </div>
    );
  };
}
