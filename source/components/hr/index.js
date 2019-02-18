import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export class Hr extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
  };

  renderContent = () => {
    if (!this.props.children) {
      return null;
    }

    return (
      <span className={cn(this.props.contentClassName, styles.content)}>
        {this.props.children}
      </span>
    );
  };

  render() {
    return (
      <div className={cn(this.props.className, styles.root)}>
        {this.renderContent()}
      </div>
    );
  }
}
