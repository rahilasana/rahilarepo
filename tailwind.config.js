// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class",
//   content: ["./*.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,html}"],

  // System mode OFF — sirf manual class hi chalegi
  darkMode: "selector",   // <- tailwind v4 ka new system (media ko ignore karta hai)

  theme: {
    extend: {},
  },

  // TAILWIND v4 special rule → system color scheme ko block karta hai
  safelist: [
    "dark"
  ],
};






