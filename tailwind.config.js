/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#e5f3f7',
          '100': '#b9e1e8',
          '200': '#8ccfd9',
          '300': '#60bcc9',
          '400': '#3ba1b6',
          '500': '#18596D',
          '600': '#15485a',
          '700': '#113645',
          '800': '#0d242f',
          '900': '#09131a',
        },
        secondary: {
          '50': '#f2f9fb',
          '100': '#e1f3f7',
          '200': '#cfe9f2',
          '300': '#bfdeeb',
          '400': '#38b2aa',
          '500': '#009079',
          '600': '#007f6a',
          '700': '#006f5b',
          '800': '#005f4c',
          '900': '#004f3d',
        },
        tertiary: {
          '50': '#f2f9fb',
          '100': '#e1f3f7',
          '200': '#cfe9f2',
          '300': '#bfdeeb',
          '400': '#527be4',
          '500': '#3a56c1',
          '600': '#314abf',
          '700': '#2840ad',
          '800': '#1f3599',
          '900': '#162a85',
        },
      },
    },
    fontFamily: {
      body: [
        'Raleway',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'Raleway',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
}
