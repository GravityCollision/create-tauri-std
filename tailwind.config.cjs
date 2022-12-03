/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", 
              "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", 
              "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", 
              "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    base: false,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
