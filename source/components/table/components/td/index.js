import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './style.css';

export function Td({ children, className, align, ...restProps }) {
  return (
    <td
      {...restProps}
      className={cn(className, style.root, {
        [style[`root_align_${align}`]]: align,
      })}
    >
      {children}
    </td>
  );
}

Td.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};
