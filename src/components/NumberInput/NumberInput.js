import React from 'react';
import { Label, Input } from './NumberInput.styled';

export const NumberInput = ({
    inputId,
    LabelText,
    value,
    min,
    max,
    step,
    className,
    size,
}) => {
    return (
        <div className={className}>
            <Label htmlFor={inputId}>{LabelText}</Label>
            <Input
                id={inputId}
                defaultValue={value}
                min={min}
                max={max}
                step={step}
                size={size}
            ></Input>
        </div>
    );
};
