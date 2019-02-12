import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '.';

const demoUsers = [
  {
    email: 'john@doe.com',
    address: '0x123...456',
    bought: 2544,
    reviewStatus: 'NONE',
    createDate: '24.01.2019',
  },
  {
    email: 'test@example.net',
    address: '0x43a...aHs',
    bought: 10984,
    reviewStatus: 'ALLOWED',
    createDate: '22.03.2018',
  },
];

storiesOf('Table', module)
  .add('default', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <Table placeholder="No users found">
        <thead>
          <tr>
            <th>Email</th>
            <th>Address</th>
            <th className={Table.classNames.alignRight}>Bought</th>
            <th>Status</th>
            <th className={Table.classNames.alignRight}>Registered</th>
            <th className={Table.classNames.alignRight} />
          </tr>
        </thead>

        <tbody>
          {demoUsers.map((user) => (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td className={Table.classNames.alignRight}>{user.bought}</td>
              <td>{user.reviewStatus}</td>
              <td className={Table.classNames.alignRight}>{user.createDate}</td>
              <td className={Table.classNames.alignRight}>
                <button>×</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  ))
  .add('empty', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <Table isEmpty placeholder="No users found">
        <thead>
          <tr>
            <th>Email</th>
            <th>Address</th>
            <th>Status</th>
            <th>Registered</th>
            <th />
          </tr>
        </thead>

        <tbody />
      </Table>
    </div>
  ));
