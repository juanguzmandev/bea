/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'ibmPlexMono': ['var(--font-ibm-plex-mono)', 'serif'],
        'ebGaramond': ['var(--font-eb-garamond)', 'sans-serif']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'cornsilk': '#fefae0',
      'darkmossgreen': '#606c38',
      'earthyellow' : '#dda15e',
      'pakistangreen' : '#283618',
      'tigerseye' : '#bc6c25'
    }
  },
  plugins: [],
};
