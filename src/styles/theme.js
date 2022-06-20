const defaultTheme = {
    colors: {
        red: {
            light: '#fc5c65',
            dark: '#eb3b5a',
        },
        orange: {
            light: '#fd9644',
            dark: '#fa8231',
        },
        yellow: {
            light: '#fed330',
            dark: '#f7b731',
        },
        green: {
            light: '#26de81',
            dark: '#20bf6b',
        },
        turquoise: {
            light: '#2bcbba',
            dark: '#0fb9b1',
        },
        blue: {
            light: '#45aaf2',
            dark: '#2d98da',
        },
        darkBlue: {
            light: '#4b7bec',
            dark: '#3867d6',
        },
        purple: {
            light: '#a55eea',
            dark: '#8854d0',
        },
        grey: {
            light: '#d1d8e0',
            dark: '#a5b1c2',
        },
        darkGrey: {
            light: '#778ca3',
            dark: '#4b6584',
        },
    },
    breakPoints: {
        small: '481px',
        medium: '769px',
        large: '1025px',
        extraLarge: '1201px',
    },
    fontFamily: {
        title: 'Bebas Neue, cursive',
    },
};

export const homePageTheme = {
    ...defaultTheme,
    textColors: {
        primary: 'white',
        secondary: 'black',
        hover: 'black',
    },
};

export const theme = {
    ...defaultTheme,
    textColors: {
        primary: 'black',
        secondary: 'white',
        hover: defaultTheme.colors.yellow.dark,
    },
};
