import React from 'react';
import { Label, Input } from './NumberInput.styled';

export const NumberInput = ({
    labelText,
    inputId,
    value,
    className,
    onChange,
    onBlur,
}) => {
    function handleOnChange(event) {
        const value = event.target.value;
        // remove all chars that are not a digit
        onChange(value.replace(/\D/g, ''));
    }

    return (
        <div className={className}>
            {labelText && <Label htmlFor={inputId}>{labelText}</Label>}
            <Input
                type="text"
                inputMode="numeric"
                id={inputId}
                value={value}
                onChange={handleOnChange}
                onBlur={onBlur}
                onPaste={(e) => e.preventDefault()}
                onDrop={(e) => e.preventDefault()}
                autoComplete="off"
            ></Input>
        </div>
    );
};
