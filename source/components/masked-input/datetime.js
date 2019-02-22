import React from 'react';
import {
  fromIsoToUserDateTime,
  fromUserToIsoDateTime,
  dateTimeUserFormatString,
  dateTimeAutoCorrectPipe,
} from './utils/date-time';
import { MaskedInput } from '.';

const maskPlaceholderChar = '_';
const mask = dateTimeUserFormatString.split('').map((char) => {
  if (['d', 'm', 'y', 'h'].includes(char.toLowerCase())) {
    return /\d/;
  }

  return char;
});

export function DateTimeMaskedInput({ value, onChange, ...restProps }) {
  return (
    <MaskedInput
      {...restProps}
      value={fromIsoToUserDateTime(value)}
      mask={mask}
      placeholder={dateTimeUserFormatString}
      placeholderChar={maskPlaceholderChar}
      pipe={dateTimeAutoCorrectPipe}
      onChange={(event) => {
        if (!event.target.value.includes(maskPlaceholderChar)) {
          onChange(fromUserToIsoDateTime(event.target.value));
        }
      }}
    />
  );
}
