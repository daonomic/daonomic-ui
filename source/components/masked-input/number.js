import React from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { MaskedInput } from '.';

const numberMask = createNumberMask({
  prefix: '',
  suffix: '',
});

export function NumberMaskedInput(props) {
  return <MaskedInput {...props} mask={numberMask} />;
}
