const priceFormatterUK = Intl.NumberFormat(
    'en-GB', // BCP 47 language tag
    {
        style: 'currency',
        currency: 'GBP', // ISO 4217 currency code
    }
);

export const formatPriceUK = (price) => {
    return priceFormatterUK.format(price);
};
