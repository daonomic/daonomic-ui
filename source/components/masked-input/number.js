import React from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { MaskedInput } from '.';

const thousandsSeparatorSymbol = ',';

const getNumberMask = (numberMaskConfig) =>
  createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol,
    ...numberMaskConfig,
  });

function getRawValue(maskedValue) {
  return maskedValue.replace(new RegExp(thousandsSeparatorSymbol, 'g'), '');
}

export function NumberMaskedInput({
  onChange,
  numberMaskConfig,
  ...restProps
}) {
  return (
    <MaskedInput
      {...restProps}
      mask={getNumberMask(numberMaskConfig)}
      onChange={(event) => onChange(getRawValue(event.target.value))}
    />
  );
}
