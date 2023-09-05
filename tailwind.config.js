/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    // fontFamily:{
    //   'sans': ['ui-sans-serif', 'system-ui', ],
    //   'serif': ['ui-serif', 'Georgia', ],
    //   'mono': ['ui-monospace', 'SFMono-Regular', ],
    //   'display': ['Oswald', ],
    //   'body': ['"Open Sans"', ],
    // },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}