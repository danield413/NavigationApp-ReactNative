/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        primary: '#49129C',
        secondary: {
          DEFAULT: '#B40086',
          100: '#C51297',
          200: '#831266',
        },
        tertiary: '#EF2967',
        mypurple: '#4f46e5',

      },

      fontFamily: {
        'works-black': ['WorkSans-Black', 'sans-serif'],
        'works-light': ['WorkSans-Light', 'sans-serif'],
        'works-medium': ['WorkSans-Medium', 'sans-serif'],
      }

    },
  },
  plugins: [],
};
