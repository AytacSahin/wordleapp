/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 0.5s infinite', // Yeni animasyon tanımı: bounce
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      transitionProperty: {
        'width': 'width',
        'transform': 'transform',
      },
      screens: {
        'phone': '375px',
        'tablet': '767px',
        'desktop': '1024px',
        'overscreen': '1700px'
      },
    },
    plugins: [],
  }
}