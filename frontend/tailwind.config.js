/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "var(--transparent)",

        background: {
          DEFAULT: "var(--color-background)",
          "level-1": "var(--color-background-level-1)",
          "level-2": "var(--color-background-level-2)",
          "level-3": "var(--color-background-level-3)",
          "level-4": "var(--color-background-level-4)",
          "level-5": "var(--color-background-level-5)",
        },
        text: {
          body: "var(--text-body)",
          "accent-primary": "var(--text-accent-primary)",
          "accent-secondary": "var(--text-accent-secondary)",
          link: "var(--text-link)",
          "link-undeline": "var(--text-link-underline)",
        },

        input: {
          background: "var(--input-background)",
          border: "var(--input-border)",
          "border-focus": "var(--input-border-focus)",
          "mask-hover": "var(--input-mask-hover)",
        },

        button: {
          primary: {
            background: "var(--button-primary-background)",
            "background-hover": "var(--button-primary-background-hover)",
            text: "var(--button-primary-text)",
            "text-hover": "var(--button-primary-text-hover)",
          },
          secondary: {
            background: "var(--button-secondary-background)",
            "background-hover": "var(--button-secondary-background-hover)",
            text: "var(--button-secondary-text)",
            "text-hover": "var(--button-secondary-text-hover)",
          },

          tertiary: {
            background: "var(--button-tertiary-background)",
            "background-hover": "var(--button-tertiary-background-hover)",
            text: "var(--button-tertiary-text)",
            "text-hover": "var(--button-tertiary-text-hover)",
          },
          error: {
            background: "var(--button-error-background)",
            "background-hover": "var(--button-error-background-hover)",
            text: "var(--button-error-text)",
            "text-hover": "var(--button-error-text-hover)",
          },

          warning: {
            background: "var(--button-warning-background)",
            "background-hover": "var(--button-warning-background-hover)",
            text: "var(--button-warning-text)",
            "text-hover": "var(--button-warning-text-hover)",
          },

          success: {
            background: "var(--button-success-background)",
            "background-hover": "var(--button-success-background-hover)",
            text: "var(--button-success-text)",
            "text-hover": "var(--button-success-text-hover)",
          },
        },

        error: {
          background: "var(--error-background)",
          "background-hover": "var(--error-background-hover)",
          heading: "var(--error-heading)",
          text: "var(--error-text)",
          "text-hover": "var(--error-text-hover)",
          border: "var(--error-border)",
          "border-hover": "var(--error-border-hover)",
        },
        warning: {
          background: "var(--warning-background)",
          "background-hover": "var(--warning-background-hover)",
          heading: "var(--warning-heading)",
          text: "var(--warning-text)",
          "text-hover": "var(--warning-text-hover)",
          border: "var(--warning-border)",
          "border-hover": "var(--warning-border-hover)",
        },

        success: {
          background: "var(--success-background)",
          "background-hover": "var(--success-background-hover)",
          heading: "var(--success-heading)",
          text: "var(--success-text)",
          "text-hover": "var(--success-text-hover)",
          border: "var(--success-border)",
          "border-hover": "var(--success-border-hover)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
