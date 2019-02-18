import React from 'react';
import PropTypes from 'prop-types';

export function Tr({ children, ...restProps }) {
  return <tr {...restProps}>{children}</tr>;
}

Tr.propTypes = {
  children: PropTypes.node,
};
