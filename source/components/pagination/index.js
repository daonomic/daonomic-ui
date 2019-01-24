import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import pagination, { ITEM_TYPES } from 'ultimate-pagination';
import styles from './pagination.css';

export default class Pagination extends React.Component {
  static propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    className: PropTypes.string,
  };

  renderItem = (item) => {
    const { onChangePage } = this.props;

    if (item.type === ITEM_TYPES.ELLIPSIS) {
      return (
        <button disabled className={styles.button}>
          ...
        </button>
      );
    }

    return (
      <button
        disabled={item.isActive}
        className={cn(styles.button, {
          [styles.button_active]: item.isActive,
        })}
        onClick={() => onChangePage(item.value)}
      >
        {item.value}
      </button>
    );
  };

  render() {
    const { className, totalPages, currentPage } = this.props;

    if (totalPages === 1) {
      return null;
    }

    const paginationModel = pagination.getPaginationModel({
      currentPage,
      totalPages,
      hideFirstAndLastPageLinks: true,
      hidePreviousAndNextPageLinks: true,
    });

    return (
      <nav className={className} aria-label="Pagination">
        <ul className={styles.list}>
          {paginationModel.map((item) => (
            <li key={item.key}>{this.renderItem(item)}</li>
          ))}
        </ul>
      </nav>
    );
  }
}
