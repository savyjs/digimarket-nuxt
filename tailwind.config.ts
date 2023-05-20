module.exports = {
    content: [
        'components/**/*.{scss,css,vue,jsx,html}',
        'pages/**/*.vue',
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                secondary: '#008eb2',
                error: '#f44336',
                success: '#1e7c1e',
                alert: '#ff9800',
                dark: '#212121',
                primary: '#a41919',
                accent: '#343232',
                light: '#EEE',
            },
        },
    },
};
