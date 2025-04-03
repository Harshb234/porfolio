
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Spider-Verse Colors
				spiderverse: {
					purple: {
						light: "#9B87F5",
						DEFAULT: "#3B185F", 
						dark: "#1F0441"
					},
					pink: {
						light: "#F806CC",
						DEFAULT: "#A12568",
						dark: "#800080"
					},
					blue: {
						light: "#06BCC1",
						DEFAULT: "#0892A5",
						dark: "#025E73"
					},
					yellow: {
						light: "#FFF95B",
						DEFAULT: "#F0C808",
						dark: "#E4B04A"
					},
					black: "#121212"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glitch': {
					'0%': {
						transform: 'translate(0)'
					},
					'20%': {
						transform: 'translate(-3px, 3px)'
					},
					'40%': {
						transform: 'translate(-3px, -3px)'
					},
					'60%': {
						transform: 'translate(3px, 3px)'
					},
					'80%': {
						transform: 'translate(3px, -3px)'
					},
					'100%': {
						transform: 'translate(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'spider-swing': {
					'0%': { transform: 'rotate(-10deg) translateX(-20px)' },
					'50%': { transform: 'rotate(10deg) translateX(20px)' },
					'100%': { transform: 'rotate(-10deg) translateX(-20px)' }
				},
				'portal-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 15px 5px rgba(155, 135, 245, 0.6)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						boxShadow: '0 0 25px 10px rgba(155, 135, 245, 0.8)'
					}
				},
				'neon-glow': {
					'0%, 100%': { filter: 'drop-shadow(0 0 3px currentColor)' },
					'50%': { filter: 'drop-shadow(0 0 8px currentColor)' }
				},
				'web-build': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' }
				},
				'dimension-shift': {
					'0%': { 
						transform: 'translateX(20px) scale(0.95)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateX(0) scale(1)',
						opacity: '1' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.4s ease infinite',
				'float': 'float 6s ease-in-out infinite',
				'spider-swing': 'spider-swing 4s ease-in-out infinite',
				'portal-pulse': 'portal-pulse 3s ease-in-out infinite',
				'neon-glow': 'neon-glow 2s ease-in-out infinite',
				'web-build': 'web-build 2s linear forwards',
				'dimension-shift': 'dimension-shift 0.5s ease-out forwards'
			},
			fontFamily: {
				comic: ['Bangers', 'Comic Sans MS', 'cursive'],
				futuristic: ['Orbitron', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
