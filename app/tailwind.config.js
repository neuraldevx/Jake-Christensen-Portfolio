module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // Include the app directory for content scanning
    ],
    theme: {
      extend: {
        colors: {
          'light-black': '#333333',
          'white': '#ffffff',
        },
      },
    },
    plugins: [],
  };
  