import {useState} from 'react';

interface ManMixValue {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}
interface CreditSimulator {
  amount: ManMixValue;
  dues: ManMixValue;
  result: string;
  errors: string[];
}

const START_AMOUNT = 25000;
const MIN_AMOUNT = 5000;
const MAX_AMOUNT = 50000;

const START_DUE = 12;
const MIN_DUE = 3;
const MAX_DUE = 24;

export function useCreditSimulator(): CreditSimulator {
  const errors: string[] = [];
  const [amountValue, setAmountValue] = useState<number>(START_AMOUNT);
  const [dueValue, setdueValue] = useState<number>(START_DUE);

  const onAmountChange = (value: number) => {
    setAmountValue(Math.round(value));
  };

  const onDueChange = (value: number) => {
    setdueValue(Math.round(value));
  };

  if (amountValue > MAX_AMOUNT || amountValue < MIN_AMOUNT) {
    errors.push('Monto Total inválido');
  }

  if (dueValue > MAX_DUE || dueValue < MIN_DUE) {
    errors.push('Plazo inválido');
  }

  return {
    amount: {
      onChange: onAmountChange,
      min: MIN_AMOUNT,
      max: MAX_AMOUNT,
      value: amountValue,
    },
    dues: {
      onChange: onDueChange,
      min: MIN_DUE,
      max: MAX_DUE,
      value: dueValue,
    },
    result: (amountValue / dueValue).toFixed(2),
    errors,
  };
}
