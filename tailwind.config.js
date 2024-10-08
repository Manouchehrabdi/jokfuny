/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      body: ["Yekan"],
      display: ["Yekan"],
    },

    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
