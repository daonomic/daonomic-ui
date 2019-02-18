import React from 'react';
import PropTypes from 'prop-types';

export function Tbody({ children, ...restProps }) {
  return <tbody {...restProps}>{children}</tbody>;
}

Tbody.propTypes = {
  children: PropTypes.node,
};
