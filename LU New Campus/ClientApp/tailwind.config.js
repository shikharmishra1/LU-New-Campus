module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                opac: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                animation: {
                    opac: 'opac 5s ease-in-out infinite',
                },
            },
         },
    },
    plugins: [],
}