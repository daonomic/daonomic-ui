import React from 'react';
import { storiesOf } from '@storybook/react';
import { MailtoLink } from '.';

storiesOf('MailtoLink', module).add('default', () => (
  <MailtoLink href="#example|example%com">Contact us</MailtoLink>
));
