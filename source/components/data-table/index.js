// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Table } from '../table';
import { PlaceholderIllustration } from '../placeholder-illustration';
import { IconFail } from '../icons/fail';
import { Spinner } from '../spinner';
import style from './style.css';

export class DataTable extends React.Component {
  static propTypes = {
    schema: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.node,
        align: PropTypes.oneOf(['left', 'center', 'right']),
        render: PropTypes.func.isRequired,
      }),
    ).isRequired,
    data: PropTypes.array.isRequired,
    dataState: PropTypes.oneOf(['idle', 'loading', 'loaded', 'failed']),
    getRowKey: PropTypes.func.isRequired,
    placeholder: PropTypes.node.isRequired,
    errorPlaceholder: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    dataState: 'loaded',
  };

  render() {
    const {
      schema,
      data,
      dataState,
      getRowKey,
      placeholder,
      errorPlaceholder,
      className,
      ...restProps
    } = this.props;

    return (
      <div
        className={cn(className, style.root, {
          [style.root_loading]: dataState === 'loading',
          [style.root_empty]: data.length === 0,
        })}
        {...restProps}
      >
        <Table className={style.table}>
          <Table.Thead>
            <Table.Tr>
              {schema.map((row) => (
                <Table.Th key={row.id} align={row.align || 'left'}>
                  {row.name}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((item) => (
              <Table.Tr key={getRowKey(item)}>
                {schema.map((row) => (
                  <Table.Td
                    key={row.id}
                    align={row.align || 'left'}
                    className={style.loading}
                  >
                    {row.render(item)}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>

        {dataState === 'loaded' && data.length === 0 && (
          <div className={style.content}>
            <div className={style.placeholder}>
              <PlaceholderIllustration className={style.illustration} />
              {placeholder}
            </div>
          </div>
        )}

        {dataState === 'loading' && (
          <div className={style.content}>
            <div className={style.preloader}>
              <Spinner />
            </div>
          </div>
        )}

        {dataState === 'failed' && (
          <div className={style.content}>
            <div className={style.error}>
              <IconFail className={style['error-icon']} size={48} />
              <p className={style['error-text']}>{errorPlaceholder}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
