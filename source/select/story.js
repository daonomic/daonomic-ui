import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './';

storiesOf('Select', module)
  .add('default', () => (
    <Select>
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </Select>
  ))
  .add('with label', () => (
    <Select label="Cryptocurrency">
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </Select>
  ))
  .add('with placeholder', () => (
    <Select placeholder="Select cryptocurrency">
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </Select>
  ))
  .add('with errors', () => (
    <Select
      label="Cryptocurrency"
      placeholder="Select cryptocurrency"
      errors={['This field is required']}
    >
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </Select>
  ))
  .add('disabled', () => (
    <Select disabled label="Cryptocurrency" placeholder="Select cryptocurrency">
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </Select>
  ));
