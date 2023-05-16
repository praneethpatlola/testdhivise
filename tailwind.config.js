module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_400: "#c4c4c4",
        gray_500: "#979797",
        black_900_b2: "#000000b2",
        blue_gray_50: "#ebecef",
        blue_600: "#2f76e6",
        black_900_3f: "#0000003f",
        gray_200: "#efefef",
        gray_300: "#dadada",
        gray_50: "#f6faff",
        gray_100: "#f4f5f7",
        black_900: "#000000",
        gray_500_01: "#a2a2a2",
        blue_600_01: "#2f76e5",
        blue_gray_700: "#45536c",
        white_A700: "#ffffff",
      },
      fontFamily: { roboto: "Roboto" },
      boxShadow: { bs: "0px 2px  12px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
