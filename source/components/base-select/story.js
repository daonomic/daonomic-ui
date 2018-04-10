import React from 'react';
import { storiesOf } from '@storybook/react';
import BaseSelect from './';

storiesOf('BaseSelect', module)
  .add('default', () => (
    <BaseSelect>
      <option hidden disabled value="">
        Select cryptocurrency
      </option>
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </BaseSelect>
  ))
  .add('invalid', () => (
    <BaseSelect invalid>
      <option hidden disabled value="">
        Select cryptocurrency
      </option>
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </BaseSelect>
  ))
  .add('disabled', () => (
    <BaseSelect disabled>
      <option hidden disabled value="">
        Select cryptocurrency
      </option>
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </BaseSelect>
  ));
