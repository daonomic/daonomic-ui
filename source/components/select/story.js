import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from '.';

storiesOf('Select', module)
  .add('default', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <Select>
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
      </Select>
    </div>
  ))
  .add('with label', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <Select label="Select cryptocurrency">
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
      </Select>
    </div>
  ))
  .add('with placeholder', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <Select placeholder="Select cryptocurrency">
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
      </Select>
    </div>
  ))
  .add('with description', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <Select description="Select cryptocurrency">
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
      </Select>
    </div>
  ))
  .add('with errors', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <Select errors={['This field is required']}>
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
      </Select>
    </div>
  ))
  .add('with label, placeholder, description and errors', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
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
    </div>
  ))
  .add('disabled', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <Select
        disabled
        label="Cryptocurrency"
        placeholder="Select cryptocurrency"
      >
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
      </Select>
    </div>
  ))
  .add('custom label', () => (
    <div style={{ padding: '2em', background: '#fff' }}>
      <Select
        disabled
        label={<span style={{ color: 'green' }}>Cryptocurrency</span>}
        placeholder="Select cryptocurrency"
      >
        <option value="btc">Bitcoin</option>
        <option value="eth">Ethereum</option>
        <option value="ltc">Litecoin</option>
      </Select>
    </div>
  ));
