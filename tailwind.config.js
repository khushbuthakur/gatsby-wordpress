const defaultConfig = require('@northeastern-web/kernl-ui/defaultConfig');

module.exports = {
  presets: [defaultConfig],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@northeastern-web/kernl-ui/plugins/buttons.js'),
    require('@northeastern-web/kernl-ui/plugins/columns.js'),
    // To use this plugin, run `npm install @tailwindcss/aspect-ratio`
    require('@tailwindcss/aspect-ratio'),
    // To use this plugin, run `npm install @tailwindcss/custom-forms`
    require('@tailwindcss/forms'),
    // To use this plugin, run `npm install @tailwindcss/typography`
    require('@tailwindcss/typography'),
  ],
}
