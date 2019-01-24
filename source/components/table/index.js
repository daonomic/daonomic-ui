// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Text from '../text';
import styles from './table.css';

export default class Table extends React.Component<Props> {
  static propTypes = {
    children: PropTypes.Node,
    caption: PropTypes.Node,
    className: PropTypes.string,
    isEmpty: PropTypes.bool,
    placeholder: PropTypes.Node,
  };

  renderContent = () => {
    if (this.props.isEmpty) {
      return this.renderPlaceholder();
    }

    return this.renderTable();
  };

  renderTable = () => (
    <table className={styles.table}>
      {this.renderCaption({ element: 'caption' })}
      {this.props.children}
    </table>
  );

  renderPlaceholder = () => (
    <React.Fragment>
      {this.renderCaption({ element: 'p' })}
      <Text
        design="muted"
        element="p"
        align="center"
        className={styles.placeholder}
      >
        {this.props.placeholder}
      </Text>
    </React.Fragment>
  );

  renderCaption = ({ element }) => (
    <Text
      isCaps
      design="muted"
      align="left"
      size="xs"
      element={element}
      className={styles.caption}
    >
      {this.props.caption}
    </Text>
  );

  render() {
    const {
      className,
      caption, // eslint-disable-line no-unused-vars
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
