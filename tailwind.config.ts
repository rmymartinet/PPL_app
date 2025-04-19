import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    {
      raw: `
        text-yellow-800
        text-green-800
        my-4
        italic
        bg-yellow-50
        bg-green-50
        bg-red-50
        border-green-300
        border-yellow-300
        rounded-md
        p-4
      `,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
