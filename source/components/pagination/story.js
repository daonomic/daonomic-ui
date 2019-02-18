import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from '.';

storiesOf('Pagination', module).add('default', () => (
  <Pagination totalPages={3768} currentPage={2} onChangePage={() => {}} />
));
