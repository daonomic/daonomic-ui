import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { DataTable } from '.';

const statuses = ['NONE', 'ON_REVIEW', 'ALLOWED', 'DENIED'];

function createDemoUser() {
  return {
    email: faker.internet.email(),
    bought: faker.random.number(25000),
    reviewStatus: statuses[faker.random.number(statuses.length - 1)],
    createDate: faker.date.between(new Date('2018-01-01'), new Date()),
  };
}

const demoUsers = Array.from({ length: 10 }, createDemoUser);
const schema = [
  { id: 'email', name: 'Email', render: (item) => item.email },
  {
    id: 'bought',
    name: 'Bought',
    align: 'right',
    render: (item) => item.bought,
  },
  { id: 'status', name: 'Status', render: (item) => item.reviewStatus },
  {
    id: 'registered',
    name: 'Registered',
    align: 'right',
    render: (item) => item.createDate.toLocaleDateString(),
  },
  {
    id: 'actions',
    align: 'right',
    render: (item) => (
      <button onClick={() => alert(`Delete user ${item.email}`)}>×</button>
    ),
  },
];

storiesOf('Data table', module)
  .add('empty', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <DataTable
        getRowKey={(item) => item.email}
        schema={schema}
        data={[]}
        placeholder="Nothing found"
      />
    </div>
  ))
  .add('empty loading', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <DataTable
        getRowKey={(item) => item.email}
        schema={schema}
        data={[]}
        dataState="loading"
        placeholder="Nothing found"
      />
    </div>
  ))
  .add('loaded', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <DataTable
        getRowKey={(item) => item.email}
        schema={schema}
        data={demoUsers}
        placeholder="Nothing found"
      />
    </div>
  ))
  .add('loading', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <DataTable
        dataState="loading"
        getRowKey={(item) => item.email}
        schema={schema}
        data={demoUsers}
        placeholder="Nothing found"
      />
    </div>
  ));
