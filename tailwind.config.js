/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        headShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
        contOp: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        navShadow: "0px 4px 40px rgba(0, 0, 0, 0.1) inset",
      },
      colors: {
        headColor: "rgba(248, 247, 255, 1)",
        navColor: "rgba(249, 240, 240, 1)",
        lightGray: "rgba(152, 153, 170, 1)",
        groundMain: "rgba(250, 251, 253, 1)",
        defaultNavIcon: "#9899aa",
        paid: "rgba(54, 158, 254, 1)",
        success: "rgba(63, 219, 119, 1)",
      },
      fontFamily: {
        SFProRounded600: ["Net-SF-Pro-Rounded-Semibold", "sans"],
        SFProDisplay500: ["SFPRODISPLAYMEDIUM", "sans"],
        SFProDisplay400: ["SFPRODISPLAYREGULAR", "sans"],
      },
    },
  },
  plugins: [],
};
