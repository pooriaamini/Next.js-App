import type { Config } from "tailwindcss";
import flowbite from 'flowbite-react/tailwind';


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),



  ],

  darkMode: 'class',

  plugins: [
    flowbite.plugin(),

]
 ,
 theme: {
  extend: {
    backgroundColor: {
      'light-mode': '#ffffff',
      'dark-mode': ' #080321',
    },
    textColor: {
      'light-mode': '#000000',
      'dark-mode': '#ffffff',
    },
  },
},
};

export default config;
