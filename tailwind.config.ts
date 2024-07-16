import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "remove-bg": "url('/assets/images/icon-remove-item.svg')",
      },
      backgroundSize: {
        "60%": "60%",
      },
      borderColor: {
        "border-cart-btn": "hsl(7, 20%, 60%)",
        "border-cart-hover": "hsl(14, 86%, 42%)",
        "border-remove-item": "hsl(7, 20%, 60%)",
      },
      colors: {
        "rose-50": "hsl(20, 50%, 98%)",
        "rose-100": "hsl(13, 31%, 94%)",
        "rose-300": "hsl(14, 25%, 72%)",
        "rose-400": "hsl(7, 20%, 60%)",
        "rose-500": "hsl(12, 20%, 44%)",
        "rose-900": "hsl(14, 65%, 9%)",
        "red-clr": "hsl(14, 86%, 42%)",
        "green-clr": "hsl(159, 69%, 38%)",
      },
    },
    gridTemplateColumns: {
      cols: "1fr 0.5fr",
    },
  },
  plugins: [],
};
export default config;
