import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export default class Text extends React.Component {
  static propTypes = {
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    isMuted: PropTypes.bool,
    isCaps: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'center', 'right']),
  };

  static defaultProps = {
    element: 'span',
    align: 'left',
  };

  render = () => {
    const {
      element,
      className,
      align,
      isMuted,
      isCaps,
      ...restProps
    } = this.props;

    return React.createElement(element, {
      className: cn(className, styles.root, styles[`root_align_${align}`], {
        [styles.root_muted]: isMuted,
        [styles.root_caps]: isCaps,
      }),
      ...restProps,
    });
  };
}
