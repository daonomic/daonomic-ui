import React from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { MaskedInput } from '.';

const thousandsSeparatorSymbol = ',';

const numberMask = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol,
});

function getRawValue(maskedValue) {
  return maskedValue.replace(new RegExp(thousandsSeparatorSymbol, 'g'), '');
}

export function NumberMaskedInput({ onChange, ...restProps }) {
  return (
    <MaskedInput
      {...restProps}
      mask={numberMask}
      onChange={(event) => onChange(getRawValue(event.target.value))}
    />
  );
}
