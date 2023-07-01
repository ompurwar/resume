module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "var(--color-bg-accent-primary)",
        "secondary": "var(--color-bg-accent-primary)",
        "tertiary": "var(--color-bg-accent-primary)",
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
        }
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "bg-accent-primary": "var(--color-bg-accent-primary)",
          "bg-accent-secondary": "var(--color-bg-accent-primary)",
          "bg-accent-tertiary": "var(--color-bg-accent-primary)",
        }
      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
        playFair:[ 'Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}
