import React from 'react';
import PropTypes from 'prop-types';

export function Overlay(props) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1em',
        backgroundColor: 'rgba(93, 156, 236, .08)',
      }}
    >
      {props.children}
    </div>
  );
}

Overlay.propTypes = {
  children: PropTypes.node,
};
