import /*React,*/ { ChangeEvent, FC } from 'react';
import style from './inputNumber.module.scss'

interface InputNumberProps {
  value: number;
  onChange: (value: number) => void;
}

const InputNumber: FC<InputNumberProps> = ({ value, onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);

    if (!isNaN(numericValue)) {
      onChange(numericValue);
    }
  };

  return (
    <input
      className={style.inputNumber}
      type="text"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default InputNumber;