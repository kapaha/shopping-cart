import React from 'react';
import { Label, Input, CartInput } from './NumberInput.styled';

export const NumberInput = ({
    labelText,
    inputId,
    value,
    className,
    onChange,
    onBlur,
    isCartInput,
    ariaLabel,
    ariaDescribedby,
    ariaInvalid,
    inputRef,
}) => {
    function handleOnChange(event) {
        const value = event.target.value;
        // remove all chars that are not a digit
        onChange(value.replace(/\D/g, ''));
    }

    const inputProps = {
        type: 'text',
        inputMode: 'numeric',
        autoComplete: 'off',
        id: inputId,
        value,
        onChange: handleOnChange,
        onBlur,
        onPaste: (e) => e.preventDefault(),
        onDrop: (e) => e.preventDefault(),
        'aria-label': ariaLabel,
        'aria-describedby': ariaDescribedby,
        'aria-invalid': ariaInvalid,
        ref: inputRef,
    };

    return (
        <div className={className}>
            {labelText && <Label htmlFor={inputId}>{labelText}</Label>}
            {isCartInput ? (
                <CartInput {...inputProps} />
            ) : (
                <Input {...inputProps} />
            )}
        </div>
    );
};
