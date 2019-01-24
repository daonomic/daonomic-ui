import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '.';

storiesOf('Pagination', module).add('default', () => (
  <Pagination totalPages={28} currentPage={2} onChangePage={() => {}} />
));
