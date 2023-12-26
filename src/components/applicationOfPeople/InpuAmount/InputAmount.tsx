import /*React,*/ { ChangeEvent, FC } from 'react';
import style from './inputAmount.module.scss'

interface InputAmountProps {
    value: string;
    onChange: (value: string) => void;
}

const InputAmount: FC<InputAmountProps> = ({ value, onChange }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const formattedValue = formatInputAmount(inputValue);

        onChange(formattedValue);
    };

    const formatInputAmount = (amountString: string): string => {
        // Allow only digits and dots
        const sanitizedValue = amountString.replace(/[^0-9.]/g, '');

        // Allow only one dot in the string
        const dotIndex = sanitizedValue.indexOf('.');
        if (dotIndex !== -1) {
            const beforeDot = sanitizedValue.slice(0, dotIndex);
            const afterDot = sanitizedValue.slice(dotIndex + 1);
            return `${beforeDot}.${afterDot.replace(/\./g, '')};`
        }

        return sanitizedValue;
    };

    return (
        <input
            className={style.inputAmount}
            type="text"
            value={value}
            onChange={handleInputChange}
            
        />
    );
};

export default InputAmount;
