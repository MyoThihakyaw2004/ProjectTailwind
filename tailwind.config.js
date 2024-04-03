/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans', 'sans-serif'],
      },
      fontWeight: {
        'custom-weight': '600',
      },
      fontVariationSettings: {
        'custom-settings': '"wdth" 100',
      },
    },
  },
  plugins: [],
}
