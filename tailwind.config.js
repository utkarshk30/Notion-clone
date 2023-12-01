/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wwwnotionso-nero": "#fff",
        "wwwnotionso-lochmara": "#0a85d1",
        "wwwnotionso-cod-gray": "#121212",
        "wwwnotionso-desert-storm": "#f6f5f4",
        "wwwnotionso-black": "#050505",
        cornflowerblue: "#1b95e0",
        "wwwnotionso-black-60": "rgba(0, 0, 0, 0.6)",
        "wwwnotionso-black-40": "rgba(0, 0, 0, 0.4)",
        "wwwnotionso-ebb": "#f1efee",
        "wwwnotionso-black-10": "rgba(0, 0, 0, 0.1)",
        "wwwnotionso-nero-02": "rgba(255, 255, 255, 0)",
        "wwwnotionso-black-8": "rgba(0, 0, 0, 0.08)",
        "wwwnotionso-black-4": "rgba(0, 0, 0, 0.04)",
        "wwwnotionso-bright-turquoise": "#fff6d6",
        "wwwnotionso-catskill-white": "#e2ecf3",
        "wwwnotionso-wisp-pink": "#fce9e8",
        "wwwnotionso-purple-heart": "#9d34da",
        "wwwnotionso-moon-raker": "#f0e1f9",
        "wwwnotionso-cod-gray1": "#111",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        georgia: "Georgia",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      "34xl": "53px",
      lg: "18px",
      "17xl": "36px",
      mini: "15px",
      "sm-5": "13.5px",
      "10xl-1": "29.1px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
