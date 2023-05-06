/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-400': 'rgba(157,87,255,255)',
        'blue-600': 'rgba(14,49,167,255)',
        'blue-400': 'rgba(45,64,236,255)' 
      },
      backgroundImage: {
       'purple-400': 'rgba(157,87,255,255)',
       'blue-600': 'rgba(157,87,255,255)',
       'blue-400': 'rgba(45,64,236,255)'      
      },
    },
  },
  plugins: [],
}
