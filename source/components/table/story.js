import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '.';

const demoUsers = [
  {
    email: 'john@doe.com',
    address: '0x123...456',
    reviewStatus: 'NONE',
    createDate: '24.01.2019',
  },
  {
    email: 'test@example.net',
    address: '0x43a...aHs',
    reviewStatus: 'ALLOWED',
    createDate: '22.03.2018',
  },
];

storiesOf('Table', module)
  .add('default', () => (
    <Table caption="Users" placeholder="No users found">
      <thead>
        <tr>
          <th>Email</th>
          <th>Address</th>
          <th>Status</th>
          <th>Registered</th>
          <th />
        </tr>
      </thead>

      <tbody>
        {demoUsers.map((user) => (
          <tr key={user.email}>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.reviewStatus}</td>
            <td>{user.createDate}</td>
            <td>
              <button>×</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ))
  .add('empty', () => (
    <Table caption="Users" isEmpty placeholder="No users found">
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
  ));
