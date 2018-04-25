import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

function FieldHint({ className, children, type }) {
  if (!children) {
    return null;
  }

  return (
    <p className={cn(className, styles.root, styles[`root_type_${type}`])}>
      {children}
    </p>
  );
}

FieldHint.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['default', 'error']),
};

FieldHint.defaultProps = {
  type: 'default',
};

export default FieldHint;
