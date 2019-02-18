// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Table } from '../table';
import { PlaceholderIllustration } from '../placeholder-illustration';
import { Spinner } from '../spinner';
import style from './style.css';

export class DataTable extends React.Component {
  static propTypes = {
    primaryKey: PropTypes.string.isRequired,
    schema: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    placeholder: PropTypes.node.isRequired,
    className: PropTypes.string,
    dataState: PropTypes.oneOf(['idle', 'loading', 'loaded', 'failed']),
  };

  static defaultProps = {
    dataState: 'loaded',
  };

  render() {
    const {
      primaryKey,
      schema,
      data,
      dataState,
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
                <Table.Th key={row.name} align={row.align || 'left'}>
                  {row.name}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((item) => (
              <Table.Tr key={item[primaryKey]}>
                {schema.map((row) => (
                  <Table.Td
                    key={row.name}
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
          <div className={style.placeholder}>
            <PlaceholderIllustration className={style.illustration} />
            {this.props.placeholder}
          </div>
        )}

        {dataState === 'loading' && (
          <div className={style.preloader}>
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}
