/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#151A23',
        steel: '#46536A',
        line: '#DDE3EC',
        paper: '#FAFBFD',
        panel: '#FFFFFF',
        indigo: '#3D5AFE',
        live: '#0BA360',
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        lift: '0 18px 45px rgba(21, 26, 35, 0.08)',
      },
    },
  },
  plugins: [],
};
