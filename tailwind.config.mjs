/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: {
  				DEFAULT: '#FFFFFF',
  				dark: '#0A0A0A'
  			},
  			foreground: {
  				DEFAULT: '#0A0A0A',
  				dark: '#FAFAFA'
  			},
  			primary: {
  				DEFAULT: '#2563EB',
  				dark: '#60A5FA'
  			},
  			secondary: {
  				DEFAULT: '#F1F5F9',
  				dark: '#1E293B',
  				foreground: '#0A0A0A'
  			},
  			muted: {
  				DEFAULT: '#F1F5F9',
  				foreground: '#64748B',
  				dark: '#1E293B'
  			},
  			card: {
  				DEFAULT: '#FFFFFF',
  				dark: '#111827'
  			},
  			accent: {
  				DEFAULT: '#2563EB',
  				dark: '#60A5FA'
  			},
  			border: {
  				DEFAULT: '#E2E8F0',
  				dark: '#1E293B'
  			}
  		},
  		borderRadius: {
  			lg: '1rem',
  			md: '0.75rem',
  			sm: '0.5rem'
  		},
  		fontFamily: {
  			sans: ["var(--font-inter)"],
  			mono: ["var(--font-jetbrains)"],
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
