/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          pennBlue: "#011F5B",
          pennRed: "#990000",
          pennLightBlue: "#6FA2DB",
          pennDarkRed: "#7A0019",
          sidebarDark: "#1E1E2E",
          chatBg: "#F4F4F9",
        },
        backgroundImage: {
          gradient: "linear-gradient(to right, #011F5B, #990000)",
        },
      },
    },
    plugins: [],
  };
