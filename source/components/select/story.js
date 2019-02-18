import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from '.';

storiesOf('Select', module)
  .add('default', () => (
    <Select>
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </Select>
  ))
  .add('with label', () => (
    <Select label="Select cryptocurrency">
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
  .add('with description', () => (
    <Select description="Select cryptocurrency">
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </Select>
  ))
  .add('with errors', () => (
    <Select errors={['This field is required']}>
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </Select>
  ))
  .add('with label, placeholder, description and errors', () => (
    <Select
      label="Select cryptocurrency"
      placeholder="Select cryptocurrency"
      description="Select cryptocurrency"
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
  ))
  .add('custom placeholder and label', () => (
    <Select
      disabled
      label={<span style={{ color: 'green' }}>Cryptocurrency</span>}
      placeholder={
        <span style={{ color: 'green' }}>Select cryptocurrency</span>
      }
    >
      <option value="btc">Bitcoin</option>
      <option value="eth">Ethereum</option>
      <option value="ltc">Litecoin</option>
    </Select>
  ));
