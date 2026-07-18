/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#F5F8FF',
        steel: '#9DA8BD',
        line: '#293145',
        paper: '#0C101A',
        panel: '#151A27',
        indigo: '#A8B7FF',
        live: '#43E6A5',
        mint: '#42E8D4',
        rose: '#F4A3A8',
        amber: '#F1C27B',
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        lift: '0 24px 70px rgba(0, 0, 0, 0.38)',
        glow: '0 0 70px rgba(66, 232, 212, 0.16)',
      },
    },
  },
  plugins: [],
};
