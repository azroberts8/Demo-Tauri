import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'gold': '16 / 10',
        'banner': '25 / 10'
      },
      height: {
        'gold-s': '37.5%',
        'gold-l': '62.5%'
      }
    }
  }
} satisfies Config;
