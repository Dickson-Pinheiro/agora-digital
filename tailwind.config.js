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
       'blue-400': 'rgba(45,64,236,255)',
       'sammy': "url('/sammy-line-workflow.png')",
       'menina': "url('/menina.png')",
       'cidade': "url('/cidade.jpg')",
       'cidade-2': "url('/cidade-2.jpg')"      
      },
      backgroundSize: {
        '25': '25%'
      },
      minWidth: {
        '1/2': '50%'
      },
      minHeight: {
        '1/2': '50%',
        '8/10': '0.8vh'
      },
      backgroundPosition: {
        'bottom-4': 'center bottom 15rem',
        'bottom-5': 'center bottom 10rem'
      }
    },
  },
  plugins: [],
}
