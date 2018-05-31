import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'focus-visible';
import styles from './styles.css';

export const alignments = ['left', 'center', 'right'];
export const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
export const designs = ['muted', 'link'];
export const weights = ['normal', 'semibold'];

export default class Text extends React.Component {
  static propTypes = {
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    isCaps: PropTypes.bool,
    design: PropTypes.oneOf(designs),
    size: PropTypes.oneOf(sizes),
    align: PropTypes.oneOf(alignments),
    weight: PropTypes.oneOf(weights),
  };

  static defaultProps = {
    element: 'span',
    align: 'left',
    size: 'm',
    weight: 'normal',
  };

  render = () => {
    const {
      element,
      className,
      isCaps,
      align,
      size,
      design,
      weight,
      ...restProps
    } = this.props;

    return React.createElement(element, {
      className: cn(
        className,
        styles.root,
        styles[`root_align_${align}`],
        styles[`root_size_${size}`],
        styles[`root_weight_${weight}`],
        {
          [styles[`root_design_${design}`]]: design,
          [styles.root_caps]: isCaps,
        },
      ),
      ...restProps,
    });
  };
}
