import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: '#E0F2F7',  // Light sky blue
          DEFAULT: '#4A90E2', // Medium ocean blue
          deep: '#2C5282',   // Deep ocean blue
        },
        sand: {
          light: '#F7F3E3',  // Light sand
          DEFAULT: '#E6D5AC', // Medium sand
          dark: '#D4C391',   // Dark sand
        },
        coral: {
          light: '#FFE5E5',  // Light coral
          DEFAULT: '#FF9E9E', // Medium coral
          dark: '#FF7676',   // Dark coral
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'wave-pattern': "url('/patterns/wave.svg')",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
        display: ['var(--font-montserrat)', 'Georgia'],
      },
    },
  },
  plugins: [],
} satisfies Config;
