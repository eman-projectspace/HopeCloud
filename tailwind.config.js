/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mist: '#F5F9FF',
        cloudline: '#E3EDFB',
        sky: {
          DEFAULT: '#3B9EFF',
          50: '#EFF6FF',
          100: '#DCEBFF',
          400: '#5FB1FF',
          500: '#3B9EFF',
          600: '#2381E0',
        },
        deepsea: {
          DEFAULT: '#0B3D91',
          700: '#0B3D91',
          900: '#082A66',
        },
        meadow: {
          DEFAULT: '#2ECC8F',
          400: '#4FDCA3',
          500: '#2ECC8F',
          600: '#22AD78',
        },
        amber: {
          DEFAULT: '#F2A93B',
          100: '#FDF1DC',
          500: '#F2A93B',
          600: '#DB8F1E',
        },
        ink: '#0E1B2C',
        slate: {
          muted: '#5B6B82',
        },
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        xl2: '1.75rem',
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(11, 61, 145, 0.18)',
        card: '0 4px 24px -6px rgba(11, 61, 145, 0.12)',
        glow: '0 0 0 1px rgba(59,158,255,0.15), 0 8px 30px -6px rgba(59,158,255,0.35)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-14px) translateX(6px)' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseNode: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.15)' },
        },
        dashMove: {
          to: { strokeDashoffset: -24 },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(18px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        driftSlow: 'driftSlow 8s ease-in-out infinite',
        pulseNode: 'pulseNode 2.4s ease-in-out infinite',
        dashMove: 'dashMove 1.2s linear infinite',
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}
