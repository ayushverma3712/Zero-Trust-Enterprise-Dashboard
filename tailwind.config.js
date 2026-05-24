/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          950: '#06070B',
          900: '#0B0D14',
          850: '#0F1421',
        },
        panel: {
          900: 'rgba(16, 20, 34, 0.70)',
          800: 'rgba(16, 20, 34, 0.55)',
        },
        line: {
          800: 'rgba(148, 163, 184, 0.14)',
          700: 'rgba(148, 163, 184, 0.22)',
        },
        neon: {
          cyan: '#28D7FF',
          green: '#37F3A3',
          blue: '#4C7DFF',
        },
      },
      boxShadow: {
        glowCyan: '0 0 0 1px rgba(40, 215, 255, 0.25), 0 0 35px rgba(40, 215, 255, 0.10)',
        glowGreen:
          '0 0 0 1px rgba(55, 243, 163, 0.20), 0 0 35px rgba(55, 243, 163, 0.10)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)',
        radial:
          'radial-gradient(900px circle at 15% 10%, rgba(40,215,255,0.16), transparent 55%), radial-gradient(900px circle at 85% 15%, rgba(55,243,163,0.10), transparent 55%), radial-gradient(900px circle at 50% 80%, rgba(76,125,255,0.10), transparent 60%)',
      },
    },
  },
  plugins: [],
}

