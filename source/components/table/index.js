// @flow
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './style.css';
import { Thead } from './components/thead';
import { Tbody } from './components/tbody';
import { Tr } from './components/tr';
import { Th } from './components/th';
import { Td } from './components/td';

export class Table extends React.Component {
  static Thead = Thead;
  static Tbody = Tbody;
  static Tr = Tr;
  static Th = Th;
  static Td = Td;

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { className, ...restProps } = this.props;

    return (
      <div {...restProps} className={cn(className, styles.root)}>
        <table className={styles.table}>{this.props.children}</table>
      </div>
    );
  }
}
