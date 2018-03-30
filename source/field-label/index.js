import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export default class FieldLabel extends React.Component {
  render = () => {
    const { children, className, ...restProps } = this.props;

    return (
      <label {...restProps} className={cn(className, styles.root)}>
        {children}
      </label>
    );
  };
}

FieldLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
