import React from 'react';
import ReactTextMask from 'react-text-mask';
import { Input } from '../input';
import { NumberMaskedInput } from './number';
import { DateTimeMaskedInput } from './datetime';

export function MaskedInput(props) {
  return <Input {...props} element={ReactTextMask} />;
}

MaskedInput.Number = NumberMaskedInput;
MaskedInput.DateTime = DateTimeMaskedInput;
