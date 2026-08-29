/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0F19',
          soft: '#0F1420',
          deep: '#070A11',
        },
        violet: {
          glow: '#7C3AED',
        },
        cyan: {
          glow: '#22D3EE',
        },
        magenta: {
          glow: '#EC4899',
        },
        ink: {
          100: '#E5E7EB',
          300: '#B7BCC9',
          500: '#8A90A3',
          700: '#565B6B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'aurora-gradient':
          'linear-gradient(120deg, #7C3AED 0%, #22D3EE 55%, #EC4899 100%)',
        'radial-fade':
          'radial-gradient(circle at center, rgba(124,58,237,0.18) 0%, rgba(11,15,25,0) 70%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(124,58,237,0.55)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.55)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        floaty: '8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
