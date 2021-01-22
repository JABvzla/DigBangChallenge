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
}

export function useCreditSimulator(): CreditSimulator {
  const [amountValue, setAmountValue] = useState<number>(25000);
  const [dueValue, setdueValue] = useState<number>(12);

  return {
    amount: {
      onChange: setAmountValue,
      min: 5000,
      max: 50000,
      value: amountValue,
    },
    dues: {
      onChange: setdueValue,
      min: 3,
      max: 24,
      value: dueValue,
    },
    result: (amountValue / dueValue).toFixed(2),
  };
}
