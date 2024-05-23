const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            'npca-green': {
                '50': '#f2fbf6',
                '100': '#e1f7ea',
                '200': '#c4eed5',
                '300': '#97deb5',
                '400': '#61c78c',
                '500': '#3ba96a',
                '600': '#2c8d56',
                '700': '#266f45',
                '800': '#22593a',
                '900': '#1e4932',
                '950': '#0b2819',
            },
            'npca-blue': {
                '50': '#f1f8fd',
                '100': '#deeefb',
                '200': '#c5e3f8',
                '300': '#9dd2f3',
                '400': '#6fb8eb',
                '500': '#4d9ae4',
                '600': '#3880d8',
                '700': '#2f6bc6',
                '800': '#2c57a1',
                '900': '#284b80',
                '950': '#253c64',
            },


        },
        fontFamily: {
            sans: ['Noto Serif Khmer','Inclusive Sans', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
    },

}