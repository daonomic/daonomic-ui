import React from 'react';
import PropTypes from 'prop-types';

export function Thead({ children, ...restProps }) {
  return <thead {...restProps}>{children}</thead>;
}

Thead.propTypes = {
  children: PropTypes.node,
};
