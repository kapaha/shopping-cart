import React, { useEffect, useRef } from 'react';
import { Banner } from './ErrorBanner.styled';

export const ErrorBanner = ({ text, id, ariaLive, className }) => {
    const bannerEl = useRef();

    useEffect(() => {
        if (text && bannerEl.current) {
            bannerEl.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    }, [text]);

    return (
        <Banner
            ref={bannerEl}
            id={id}
            aria-live={ariaLive}
            className={className}
        >
            {text}
        </Banner>
    );
};
