import React from 'react';
import PropTypes from 'prop-types';

export function CustomComponent(props) {
  return (
    <div
      {...props}
      onClick={(event) => {
        alert('click custom component');

        if (typeof props.onClick === 'function') {
          props.onClick(event);
        }
      }}
    >
      {props.children}
    </div>
  );
}

CustomComponent.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
