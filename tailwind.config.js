/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  boxShadow: {
      'custom-purple': '4px 0px 90px 25px rgba(135, 73, 180, 0.5)', // shadow with #8749B4
    },},
    fontFamily: {
      brolink: ['Brolink', ''],
  },
  },
  plugins: [
    require('daisyui'),
  ],
}

