import React from 'react';
import { PageContainer } from 'components';
import { Bold } from './Checkout.styled';

const Checkout = () => {
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
