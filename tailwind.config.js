/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*/*.{html,js}"],
    theme: {
        extend: {},
        screens: {
            xsm: "420px",
            // => @media (min-width: 420px) { ... }
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            xlg: "900px",
            // => @media (min-width: 900px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    darkMode: "class",
    plugins: [],
};
