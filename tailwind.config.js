/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                PrimaryColor: {
                    100: "#5E2419",
                    White: "#FFFFFF",
                },
                SecondaryColor: {
                    DEFAULT: "#E7AB9C",
                },
                URLColor: {
                    DEFAULT: "#6950F3",
                },
                Light: {
                    Pri100: "#5E2419",
                    Sec100: "#E7AB9C",
                    TextColor: "#000000",
                    InputBoxColor: "#b2b2b2",
                    RadioColor: "#5E2419",
                    Required: "#FF0000",
                    SubmitBtnColor: "#5E2419",
                    SubmitBtnTextColor: "#FFFFFF",
                    SubmitBtnDisabledColor: "#b2b2b2",
                    BackBtnColor: "#FCF3F0",
                    BackBtnHover: "#F5DDD7",
                    BackBtnTextColor: "#000000",
                    BelowBackBtnText: "#905549",
                    BackgroundColor: "#FFFFFF",
                    HaveNoAccount: "#905549",
                },
                Dark: {
                    Pri100: "#E7AB9C",
                    Sec100: "#5E2419",
                    TextColor: "#FFFFFF",
                    InputBoxColor: "#606060",
                    RadioColor: "#E7AB9C",
                    Required: "#FF0000",
                    SubmitBtnColor: "#E7AB9C",
                    SubmitBtnTextColor: "#000000",
                    SubmitBtnDisabledColor: "#606060",
                    BackBtnColor: "#3D3431",
                    BackBtnHover: "#6E5650",
                    BackBtnTextColor: "#FFFFFF",
                    BelowBackBtnText: "#E7AB9C",
                    BackgroundColor: "#1E1E1E",
                    HaveNoAccount: "#E7AB9C",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
            },
            borderRadius: {
                default: "var(--radius)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            screens: {
                1080: "1080px",
                verySmall: "300px",
                smallPhone: "360px",
                mediumPhone: "420px",
                largePhone: "470px",
                "480px": "480px",
                "720px": "720px",
                "960px": "960px",
            },
            animation: {
                "background-animation": "background-animation 25s ease infinite both",
                "scale-in-center": "scale-in-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
                "swing-in-right-fwd": "swing-in-right-fwd 1s cubic-bezier(0.175, 0.885, 0.320, 1.275)   both",
                "swing-in-left-fwd": "swing-in-left-fwd 1s cubic-bezier(0.175, 0.885, 0.320, 1.275)   both",
                "swing-out-right-fwd":
                    "swing-in-right-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)   reverse both",
                "scale-in-tl": "scale-in-tl 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
                "scale-in-tr": "scale-in-tr 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
                "slide-in-top": "slide-in-top 0.3s ease    both",
                "slide-out-top": "slide-out-top 0.8s ease    both",
                "slide-in-bottom": "slide-in-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)    both",
                "scale-in-top": "scale-in-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
                "scale-out-top": "scale-out-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)  both",
                "height-change-100%": "height-change-100% 0.3s linear   alternate both",
                "height-change-0%": "height-change-0% 0.3s linear alternate both",
                "ripple-effect": "ripple-effect 0.25s cubic-bezier(1,-4.8, 1, 1)  both ",
                "scale-out-bottom": "scale-out-bottom 0.3s cubic-bezier(0.600, -0.280, 0.735, 0.045)   both",
                "scale-in-bottom": "scale-in-bottom 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275)   both",
                "slide-in-elliptic-left-bck":
                    "slide-in-elliptic-left-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
                "slide-in-right": "slide-in-right 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
                "slide-in-left": "slide-in-left 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
            },
            keyframes: {
                "background-animation": {
                    "0%": {
                        backgroundPosition: "80% 80%",
                    },
                    "50%": {
                        backgroundPosition: "00% 30%",
                    },
                    "100%": {
                        backgroundPosition: "80% 80%",
                    },
                },
                "swing-in-left-fwd": {
                    "0%": {
                        transform: "rotateY(-100deg)",
                        "transform-origin": "left",
                        opacity: "0",
                    },
                    to: {
                        transform: "rotateY(0)",
                        "transform-origin": "left",
                        opacity: "1",
                    },
                },
                "scale-in-center": {
                    "0%": {
                        transform: "scale(0)",
                        opacity: "1",
                    },
                    to: {
                        transform: "scale(1)",
                        opacity: "1",
                    },
                },
                "swing-in-right-fwd": {
                    "0%": {
                        transform: "rotateY(-100deg)",
                        "transform-origin": "right",
                        opacity: "0",
                    },
                    to: {
                        transform: "rotateY(0)",
                        "transform-origin": "right",
                        opacity: "1",
                    },
                },
                "scale-in-tl": {
                    "0%": {
                        transform: "scale(0)",
                        "transform-origin": "0% 0%",
                        opacity: "1",
                    },
                    to: {
                        transform: "scale(1)",
                        "transform-origin": "0% 0%",
                        opacity: "1",
                    },
                },
                "scale-in-tr": {
                    "0%": {
                        transform: "scale(0)",
                        "transform-origin": "100% 0%",
                        opacity: "1",
                    },
                    to: {
                        transform: "scale(1)",
                        "transform-origin": "100% 0%",
                        opacity: "1",
                    },
                },
                "slide-in-top": {
                    "0%": {
                        transform: "translateY(-300px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
                "slide-out-top": {
                    "100%": {
                        transform: "translateY(-300px)",
                        opacity: "0",
                    },
                    "0%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
                "slide-in-bottom": {
                    "0%": {
                        transform: "translateY(250px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
                "scale-in-top": {
                    "0%": {
                        transform: "scale(0)",
                        "transform-origin": "50% 0%",
                        opacity: "1",
                    },
                    to: {
                        transform: "scale(1)",
                        "transform-origin": "50% 0%",
                        opacity: "1",
                    },
                },
                "scale-out-top": {
                    "100%": {
                        transform: "scale(0)",
                        "transform-origin": "50% 0%",
                        opacity: "1",
                    },
                    "0%": {
                        transform: "scale(1)",
                        "transform-origin": "50% 0%",
                        opacity: "1",
                    },
                },
                "height-change-100%": {
                    "0%": {
                        "transform-origin": "50% 0%",
                        opacity: "1",
                        height: "0px",
                    },
                    to: {
                        "transform-origin": "50% 0%",
                        opacity: "1",
                        height: "200px",
                    },
                },
                "height-change-0%": {
                    "100%": {
                        "transform-origin": "50% 0%",
                        opacity: "0",
                        height: "0px",
                    },
                    "50%": {
                        "transform-origin": "50% 0%",
                        opacity: "1",
                        height: "100px",
                    },
                    "0%": {
                        "transform-origin": "50% 0%",
                        opacity: "1",
                        height: "200px",
                    },
                },
                "ripple-effect": {
                    "000%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.1) 000%,rgba(229,233,238,0.5) 000%, rgba(255,255,255,1) 000%)",
                    },
                    "002%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.1) 000%,rgba(229,233,238,0.5) 000%, rgba(255,255,255,1) 000%)",
                    },
                    "005%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.2) 000%,rgba(229,233,238,0.5) 000%, rgba(255,255,255,1) 000%)",
                    },
                    "008%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.2) 005%,rgba(229,233,238,0.5) 010%, rgba(255,255,255,1) 010%)",
                    },
                    "010%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.3) 010%,rgba(229,233,238,0.5) 020%, rgba(255,255,255,1) 020%)",
                    },
                    "015%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.3) 015%,rgba(229,233,238,0.5) 030%, rgba(255,255,255,1) 030%)",
                    },
                    "020%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.4) 020%,rgba(229,233,238,0.5) 040%, rgba(255,255,255,1) 040%)",
                    },
                    "025%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.4) 025%,rgba(229,233,238,0.5) 050%, rgba(255,255,255,1) 050%)",
                    },
                    "030%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.5) 030%,rgba(229,233,238,0.5) 060%, rgba(255,255,255,1) 060%)",
                    },
                    "035%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.5) 035%,rgba(229,233,238,0.5) 070%, rgba(255,255,255,1) 070%)",
                    },
                    "040%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.6) 040%,rgba(229,233,238,0.5) 080%, rgba(255,255,255,1) 080%)",
                    },
                    "045%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.6) 045%,rgba(229,233,238,0.5) 090%, rgba(255,255,255,1) 090%)",
                    },
                    "050%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.7) 050%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                    "055%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.7) 055%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                    "060%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.8) 060%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                    "065%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.8) 065%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                    "070%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.9) 070%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                    "075%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,0.9) 075%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                    "080%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,1) 080%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                    "085%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,1) 085%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                    "090%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,1) 090%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                    "095%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,1) 095%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                    "100%": {
                        background:
                            "radial-gradient(circle, rgba(204,211,220,1) 100%,rgba(229,233,238,0.5) 100%, rgba(255,255,255,1) 100%)",
                    },
                },
                "scale-out-bottom": {
                    "0%": {
                        transform: "scale(1)",
                        "transform-origin": "50% 100%",
                        opacity: "1",
                    },
                    to: {
                        transform: "scale(0)",
                        "transform-origin": "50% 100%",
                        opacity: "1",
                    },
                },
                "scale-in-bottom": {
                    "0%": {
                        transform: "scale(0)",
                        "transform-origin": "50% 100%",
                        opacity: "1",
                    },
                    to: {
                        transform: "scale(1)",
                        "transform-origin": "50% 100%",
                        opacity: "1",
                    },
                },
                "slide-in-elliptic-left-bck": {
                    "0%": {
                        transform: "translateX(-800px) rotateY(-30deg) scale(6.5)",
                        "transform-origin": "200% 50%",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateX(0) rotateY(0) scale(1)",
                        "transform-origin": "-600px 50%",
                        opacity: "1",
                    },
                },
                "slide-in-right": {
                    "0%": {
                        transform: "translateX(1000px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                },
                "slide-in-left": {
                    "0%": {
                        transform: "translateX(-1000px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                },
            },
            fontFamily: {
                iranSans: ["iranSans", "sans-serif"],
                MorabbaMedium: ["Morabba-medium", "sans-serif"],
                Vazirmatn: ["Vazirmatn", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
