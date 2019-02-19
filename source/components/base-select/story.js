import React from 'react';
import { storiesOf } from '@storybook/react';
import { BaseSelect } from '.';

storiesOf('BaseSelect', module)
  .add('default', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <BaseSelect>
        <option hidden disabled value="">
          Select cryptocurrency
        </option>
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
      </BaseSelect>
    </div>
  ))
  .add('invalid', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <BaseSelect invalid>
        <option hidden disabled value="">
          Select cryptocurrency
        </option>
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
      </BaseSelect>
    </div>
  ))
  .add('disabled', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <BaseSelect disabled>
        <option hidden disabled value="">
          Select cryptocurrency
        </option>
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
      </BaseSelect>
    </div>
  ));
