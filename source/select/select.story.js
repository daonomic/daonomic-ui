import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './';

storiesOf('Select', module)
  .add('default', () => (
    <Select>
      <option value="btc">
        Bitcoin
      </option>

      <option value="eth">
        Ethereum
      </option>

      <option value="ltc">
        Litecoin
      </option>
    </Select>
  ));
