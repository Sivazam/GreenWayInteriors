import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(40 20% 98%)',
        foreground: 'hsl(152 24% 15%)',
        card: 'hsl(40 20% 98%)',
        'card-foreground': 'hsl(152 24% 15%)',
        popover: 'hsl(40 20% 98%)',
        'popover-foreground': 'hsl(152 24% 15%)',
        primary: 'hsl(120 9% 65%)',
        'primary-foreground': 'hsl(40 20% 98%)',
        secondary: 'hsl(30 14% 89%)',
        'secondary-foreground': 'hsl(152 24% 15%)',
        muted: 'hsl(30 14% 89%)',
        'muted-foreground': 'hsl(120 9% 40%)',
        accent: 'hsl(14 44% 58%)',
        'accent-foreground': 'hsl(40 20% 98%)',
        destructive: 'hsl(14 44% 58%)',
        'destructive-foreground': 'hsl(40 20% 98%)',
        border: 'hsl(20 13% 83%)',
        input: 'hsl(30 14% 89%)',
        ring: 'hsl(120 9% 65%)',
        'chart-1': 'hsl(12 76% 61%)',
        'chart-2': 'hsl(173 58% 39%)',
        'chart-3': 'hsl(197 37% 24%)',
        'chart-4': 'hsl(43 74% 66%)',
        'chart-5': 'hsl(27 87% 67%)',
      },
      borderRadius: {
        lg: '0.625rem',
        md: 'calc(0.625rem - 2px)',
        sm: 'calc(0.625rem - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-raleway)', 'monospace'],
      }
    }
  },
  plugins: [],
};
export default config;
