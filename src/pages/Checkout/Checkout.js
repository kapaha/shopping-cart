import React from 'react';
import { useDocumentTitle } from 'hooks';
import { PageContainer } from 'components';
import { Bold } from './Checkout.styled';

const Checkout = () => {
    useDocumentTitle('Checkout — Ochre');
    return (
        <PageContainer>
            <p>
                <Bold>Checkout is closed.</Bold> This store isn't set up to
                process payments.
            </p>
        </PageContainer>
    );
};

export default Checkout;
