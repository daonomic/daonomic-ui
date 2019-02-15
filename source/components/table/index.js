// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Text from '../text';
import styles from './table.css';

export default class Table extends React.Component {
  static classNames = {
    alignRight: styles.right,
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isEmpty: PropTypes.bool,
    placeholder: PropTypes.node,
  };

  renderContent = () => {
    if (this.props.isEmpty) {
      return this.renderPlaceholder();
    }

    return this.renderTable();
  };

  renderTable = () => (
    <table className={styles.table}>{this.props.children}</table>
  );

  renderPlaceholder = () => (
    <Text
      design="muted"
      element="p"
      align="center"
      className={styles.placeholder}
    >
      {this.props.placeholder}
    </Text>
  );

  render() {
    const {
      className,
      isEmpty, // eslint-disable-line no-unused-vars
      placeholder, // eslint-disable-line no-unused-vars
      ...restProps
    } = this.props;

    return (
      <div {...restProps} className={cn(className, styles.root)}>
        {this.renderContent()}
      </div>
    );
  }
}
