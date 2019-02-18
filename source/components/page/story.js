import React from 'react';
import { storiesOf } from '@storybook/react';
import { Page } from '.';

storiesOf('Page', module).add('default', () => (
  <Page>
    <Page.Header>
      <div style={{ background: '#2274A5', color: '#fff', padding: '1rem' }}>
        <h1>Initial Coin Offering</h1>
      </div>
    </Page.Header>

    <Page.Content>
      <div style={{ padding: '1rem' }}>
        <p>
          Initial coin offering (ICO) is an unregulated and controversial means
          of crowdfunding via use of cryptocurrency, which can be a source of
          capital for startup companies. In an ICO a percentage of the newly
          issued cryptocurrency is sold to investors in exchange for legal
          tender or other cryptocurrencies such as Bitcoin.
        </p>
        <p>
          Early token sales were held by Mastercoin in July 2013 and Ethereum
          and Karmacoin in 2014, but mainstream ICOs began with messaging app
          developer Kik in September 2017. By November 2017 there were around 50
          offerings a month.
        </p>
      </div>
    </Page.Content>

    <Page.Footer>
      <div style={{ background: '#2274A5', color: '#fff', padding: '1rem' }}>
        <p>
          Text is available under the Creative Commons Attribution-ShareAlike
          License.
        </p>
      </div>
    </Page.Footer>
  </Page>
));
