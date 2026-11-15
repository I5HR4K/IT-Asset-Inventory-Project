/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060d1f",
        cyanflare: "#00f5ff",
        electric: "#3b82f6",
        steel: "#9fb3d9"
      },
      boxShadow: {
        neon: "0 0 30px rgba(0, 245, 255, 0.2)",
        panel: "0 15px 40px rgba(2, 6, 23, 0.65)"
      },
      fontFamily: {
        display: ["Manrope", "ui-sans-serif", "system-ui"],
        body: ["Source Sans 3", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(159, 179, 217, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(159, 179, 217, 0.1) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
