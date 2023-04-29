/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      SoftRed: "hsl(7, 99%, 70%)",
      Yellow: "hsl(51, 100%, 49%)",
      PrimaryBlue: "#3EBEFF",
      VerdeFooter: "#90D4C5",
      DarkDesaturatedCyan: " hsl(167, 40%, 24%)",
      DarkBlue: "hsl(198, 62%, 26%)",
      DarkModerateCyan: "hsl(168, 34%, 41%)",
      VeryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
      VeryDarkGrayishBlue: "hsl(213, 9%, 39%)",
      DarkGrayishBlue: " hsl(232, 10%, 55%)",
      GrayishBlue: " hsl(210, 4%, 67%)",
      White: "#fff",
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [],
};
