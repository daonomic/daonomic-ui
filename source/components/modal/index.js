import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ReactModal from 'react-modal';
import { Text } from '../text';
import styles from './styles.css';

export function Modal({ children, className, title, onClose, ...restProps }) {
  return (
    <ReactModal
      contentLabel={title}
      {...restProps}
      className={cn(className, styles.window)}
      overlayClassName={styles.overlay}
      onRequestClose={onClose}
    >
      <header className={styles.header}>
        <Text element="h2" size="xl">
          {title}
        </Text>
        <button className={styles.close} onClick={onClose}>
          Close
        </button>
      </header>

      <div className={styles.content}>{children}</div>
    </ReactModal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Modal.setAppElement = ReactModal.setAppElement;
