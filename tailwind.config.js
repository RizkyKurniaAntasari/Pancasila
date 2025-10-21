/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./sila/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Menambahkan font kustom jika diinginkan
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Plugin untuk styling form yang lebih baik
  ],
}