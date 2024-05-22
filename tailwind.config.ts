import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      grayscale: {
        10: '#fdfdfd',
        20: '#ECF1F6',
        30: '#E3e9ed',
        40: '#d1d8dd',
        50: '#bfc6cc',
        60: '#9ca4ab',
        70: '#878690',
        80: '#66707a',
        90: '#434e58',
        100: '#1d2c37'
      },
      colors: {
        main: {
          primary: '#100D22',
          secondary: '#AB238F'
        },
        alert: {
          success: '#00C566',
          error: '#FF4747',
          warn: '#FACC15'
        },
        additional: {
          yellow: '#FFC107',
          white: '#fff'
        }
      },
      fontFamily: {
        primary: 'var(--font-anton)',
        jakarta: 'var(--font-jakarta)'
      },
      fontSize: {
        xl: ['18px', { fontWeight: 700 }],
        lg: ['16px', { fontWeight: 700 }],
        md: ['14px', { fontWeight: 500 }],
        sm: ['12px', { fontWeight: 500 }]
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    }
  },
  plugins: [require('daisyui')]
}
export default config
