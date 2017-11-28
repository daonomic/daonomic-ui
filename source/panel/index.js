import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './panel.css';
import PanelSeparator from './panel-separator';

export default function Panel({ className, children, paddingSize }) {
  return (
    <section
      className={cn(className, styles.root, {
        [styles[`root_padding_${paddingSize}`]]: paddingSize,
      })}
    >
      {children}
    </section>
  );
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  paddingSize: PropTypes.oneOf(['normal', 'large']),
};

Panel.defaultProps = {
  className: '',
  children: null,
  paddingSize: 'normal',
};

Panel.Separator = PanelSeparator;
