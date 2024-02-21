module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        xs: '480px',
      }
    },
  },
  variants: {},
  plugins: [],
};
