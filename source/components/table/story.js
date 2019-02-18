import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { Table } from '.';

const statuses = ['NONE', 'ON_REVIEW', 'ALLOWED', 'DENIED'];

function createDemoUser() {
  return {
    email: faker.internet.email(),
    bought: faker.random.number(25000),
    reviewStatus: statuses[faker.random.number(statuses.length - 1)],
    createDate: faker.date.between(new Date('2018-01-01'), new Date()),
  };
}

const demoUsers = Array.from({ length: 15 }, createDemoUser);

storiesOf('Table', module).add('default', () => (
  <div style={{ padding: '2em', background: '#fff' }}>
    <Table placeholder="No users found">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Email</Table.Th>
          <Table.Th align="right">Bought</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th align="right">Registered</Table.Th>
          <Table.Th align="right" />
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {demoUsers.map((user) => (
          <Table.Tr key={user.email}>
            <Table.Td>{user.email}</Table.Td>
            <Table.Td align="right">{user.bought}</Table.Td>
            <Table.Td>{user.reviewStatus}</Table.Td>
            <Table.Td align="right">
              {user.createDate.toLocaleDateString()}
            </Table.Td>
            <Table.Td align="right">
              <button>×</button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  </div>
));
