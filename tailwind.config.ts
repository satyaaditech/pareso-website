import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Wes Anderson Color Palette
                'pastel-coral': '#F4A896',
                'sage-green': '#8B9D83',
                'cream': '#F5E6D3',
                'terracotta': '#C65D3B',
                'dusty-rose': '#D4A5A5',
                'deep-teal': '#2C5F5D',
            },
            fontFamily: {
                'playfair': ['"Playfair Display"', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
