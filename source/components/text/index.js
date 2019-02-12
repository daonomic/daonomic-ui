import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'focus-visible';
import styles from './styles.css';

export const alignments = ['left', 'center', 'right'];
export const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
export const weights = ['normal', 'bold'];
export const colors = ['normal', 'muted', 'success', 'danger', 'warning'];

export default class Text extends React.Component {
  static propTypes = {
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    isCaps: PropTypes.bool,
    size: PropTypes.oneOf(sizes),
    color: PropTypes.oneOf(colors),
    align: PropTypes.oneOf(alignments),
    weight: PropTypes.oneOf(weights),
  };

  static defaultProps = {
    element: 'span',
    align: 'left',
    color: 'normal',
    weight: 'normal',
  };

  render = () => {
    const {
      element,
      className,
      isCaps,
      align,
      size,
      color,
      weight,
      ...restProps
    } = this.props;

    return React.createElement(element, {
      className: cn(
        className,
        styles.root,
        styles[`root_align_${align}`],
        styles[`root_weight_${weight}`],
        styles[`root_color_${color}`],
        {
          [styles.root_caps]: isCaps,
          [styles[`root_size_${size}`]]: size,
        },
      ),
      ...restProps,
    });
  };
}
