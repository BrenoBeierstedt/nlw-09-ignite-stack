/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
        './index.html',
    ],
    theme: {
        fontFamily:{
        sans: ['Inter', 'sans-serif']
        },
        extend: {

            backgroundImage: {
                galaxy:  "url('/bg-galaxy.png')",
                duoGradient: "linear-gradient(89.86deg, #9572FC 10.00%, #43E7AD 75.94%, #E1D55D 14.6%);",
                gameCardGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);"
            }
        },
    },
    plugins: [],
}
