module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "#f1f6ff",
          default: "#1f4f7f",
          dark: "#103152"
        },
        secondary: {
          lighter: "#f79225",
          default: "#f9a524",
        },
        content: {
          lighter: '#545454'
        },
        'app-bg': {
          lighter: "#f3f3f3",
          default: "#545454",
        },
        "app-border": {
          lighter: "#f3f3f3",
          default: "#bfbfbf",
        },
      },
      spacing: {
        '28': '7rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        avenir: ['AvenirNext', 'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        'avenir-bold': ['AvenirNextBold', 'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        mark: ['MarkRegular', 'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        'mark-bold': ['MarkBold', 'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif']
      },
      inset: {
        '-100': '-100%'
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.html", "./src/**/*.re", "./src/**/*.bs.js"],
  },
};

// Add the following if you want to whitelist classes
// options: {
//   whitelistPatterns: [/^bg-/, /^text-/, /^border-/, /^hover:/],
// },
