import React from 'react';
import { ErrorText, ErrorHelpText } from './APIError.styled';

export const APIError = ({ error }) => {
    console.log({ error });
    return (
        <div>
            <ErrorText>{error.message}</ErrorText>
            <ErrorHelpText>Please try refreshing the page</ErrorHelpText>
        </div>
    );
};
