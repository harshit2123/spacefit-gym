/**
 * SpaceFit Tailwind CSS Configuration
 * Stack: React 18 + TypeScript + Tailwind CSS v4
 *
 * Google Fonts (add to <head>):
 * https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900
 *   &family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600
 *   &family=Space+Mono:wght@400;700&display=swap
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    // ─── Colors ───────────────────────────────────────────────────────────────
    colors: {
      transparent: 'transparent',
      current:     'currentColor',
      black:       '#000000',
      white:       '#ffffff',

      // Background layers (darkest → lightest)
      bg: {
        primary:     '#0a0a0a',  // Page background
        secondary:   '#141414',  // Slightly lifted — for variation
        tertiary:    '#1a1a1a',  // Cards, panels, elevated surfaces
        interactive: '#242424',  // Interactive elements, hover
        subtle:      '#2a2a2a',  // Borders, dividers
        muted:       '#3a3a3a',  // Disabled, secondary surfaces
      },

      // Text hierarchy
      text: {
        primary:   '#ffffff',   // Headlines, primary content
        secondary: '#b0b0b0',   // Supporting text, labels
        tertiary:  '#707070',   // Placeholder, disabled text
        muted:     '#4a4a4a',   // Very subtle, decorative only
        inverse:   '#0a0a0a',   // Text on neon backgrounds
      },

      // Brand accent
      neon: {
        DEFAULT:   '#00FF2E',   // Primary CTA, active states
        light:     '#4DFF66',   // Hover states
        dark:      '#00CC23',   // Active/pressed states
        subtle:    '#00FF2E1A', // 10% opacity tint for backgrounds
        dim:       '#00FF2E33', // 20% opacity tint for overlays
      },

      // Semantic states
      success: {
        DEFAULT: '#00FF2E',
        light:   '#4ade80',
        dark:    '#00a81e',
      },
      warning: {
        DEFAULT: '#FFD700',
        light:   '#FFE566',
        dark:    '#CC9900',
      },
      error: {
        DEFAULT: '#FF4444',
        light:   '#FF7777',
        dark:    '#CC2222',
      },
      info: {
        DEFAULT: '#00d4ff',
        light:   '#66E5FF',
        dark:    '#009FCC',
      },

      // Border system
      border: {
        default: '#2a2a2a',
        medium:  '#3a3a3a',
        strong:  '#505050',
        neon:    '#00FF2E',
      },

      // Gray scale (for compatibility)
      gray: {
        50:  '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#3a3a3a',
        800: '#1a1a1a',
        900: '#0a0a0a',
        950: '#050505',
      },
    },

    // ─── Typography ──────────────────────────────────────────────────────────
    fontFamily: {
      // Display: Barlow Condensed — bold, condensed, athletic headlines
      display: ["'Barlow Condensed'", "'Oswald'", 'sans-serif'],

      // Body: DM Sans — clean, geometric humanist for UI text
      body: ["'DM Sans'", "'Inter'", 'sans-serif'],
      sans: ["'DM Sans'", "'Inter'", 'sans-serif'],  // Tailwind default alias

      // Mono: Space Mono — futuristic monospace for data/code
      mono: ["'Space Mono'", "'JetBrains Mono'", 'monospace'],
    },

    fontSize: {
      xs:   ['0.75rem',  { lineHeight: '1.4',  letterSpacing: '0.02em'  }],
      sm:   ['0.875rem', { lineHeight: '1.5',  letterSpacing: '0.01em'  }],
      base: ['1rem',     { lineHeight: '1.65', letterSpacing: '0'        }],
      lg:   ['1.125rem', { lineHeight: '1.6',  letterSpacing: '0'        }],
      xl:   ['1.25rem',  { lineHeight: '1.5',  letterSpacing: '0'        }],
      '2xl':['1.5rem',   { lineHeight: '1.3',  letterSpacing: '-0.01em'  }],
      '3xl':['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em'  }],
      '4xl':['2.25rem',  { lineHeight: '1.15', letterSpacing: '-0.02em'  }],
      '5xl':['3rem',     { lineHeight: '1.1',  letterSpacing: '-0.02em'  }],
      '6xl':['3.75rem',  { lineHeight: '1.05', letterSpacing: '-0.02em'  }],
      '7xl':['4.5rem',   { lineHeight: '1.0',  letterSpacing: '-0.03em'  }],
      '8xl':['6rem',     { lineHeight: '0.95', letterSpacing: '-0.03em'  }],
      '9xl':['8rem',     { lineHeight: '0.9',  letterSpacing: '-0.04em'  }],
    },

    fontWeight: {
      thin:      100,
      extralight:200,
      light:     300,
      normal:    400,
      medium:    500,
      semibold:  600,
      bold:      700,
      extrabold: 800,
      black:     900,
    },

    letterSpacing: {
      tightest: '-0.04em',
      tighter:  '-0.03em',
      tight:    '-0.02em',
      snug:     '-0.01em',
      normal:   '0em',
      wide:     '0.04em',
      wider:    '0.08em',
      widest:   '0.1em',
    },

    // ─── Spacing ─────────────────────────────────────────────────────────────
    spacing: {
      0:    '0',
      px:   '1px',
      0.5:  '2px',
      1:    '4px',
      1.5:  '6px',
      2:    '8px',
      2.5:  '10px',
      3:    '12px',
      3.5:  '14px',
      4:    '16px',
      5:    '20px',
      6:    '24px',
      7:    '28px',
      8:    '32px',
      9:    '36px',
      10:   '40px',
      11:   '44px',
      12:   '48px',
      14:   '56px',
      16:   '64px',
      18:   '72px',
      20:   '80px',
      24:   '96px',
      28:   '112px',
      32:   '128px',
      36:   '144px',
      40:   '160px',
      44:   '176px',
      48:   '192px',
      52:   '208px',
      56:   '224px',
      60:   '240px',
      64:   '256px',
      72:   '288px',
      80:   '320px',
      96:   '384px',
    },

    // ─── Border Radius ───────────────────────────────────────────────────────
    borderRadius: {
      none:    '0',
      xs:      '2px',
      sm:      '4px',
      DEFAULT: '6px',
      md:      '8px',
      lg:      '12px',
      xl:      '16px',
      '2xl':   '20px',
      '3xl':   '24px',
      full:    '9999px',
    },

    // ─── Shadows ─────────────────────────────────────────────────────────────
    boxShadow: {
      none:   'none',
      xs:     '0 1px 2px rgba(0, 0, 0, 0.4)',
      sm:     '0 2px 6px rgba(0, 0, 0, 0.5)',
      DEFAULT:'0 4px 16px rgba(0, 0, 0, 0.5)',
      md:     '0 4px 16px rgba(0, 0, 0, 0.5)',
      lg:     '0 8px 32px rgba(0, 0, 0, 0.6)',
      xl:     '0 16px 48px rgba(0, 0, 0, 0.7)',
      '2xl':  '0 24px 64px rgba(0, 0, 0, 0.8)',
      inner:  'inset 0 2px 8px rgba(0, 0, 0, 0.6)',

      // Neon glow effects
      'neon-xs':   '0 0 8px rgba(0, 255, 46, 0.2)',
      'neon-sm':   '0 0 12px rgba(0, 255, 46, 0.25)',
      'neon-md':   '0 0 20px rgba(0, 255, 46, 0.35)',
      'neon-lg':   '0 0 40px rgba(0, 255, 46, 0.5)',
      'neon-xl':   '0 0 60px rgba(0, 255, 46, 0.6)',
      'neon-combined': '0 0 20px rgba(0, 255, 46, 0.35), 0 8px 32px rgba(0, 0, 0, 0.5)',
      'neon-focus':'0 0 0 4px rgba(0, 255, 46, 0.25)',

      // Card specific
      'card':        '0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
      'card-hover':  '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      'card-active': '0 0 20px rgba(0, 255, 46, 0.3), 0 8px 32px rgba(0, 0, 0, 0.6)',
      'card-featured':'0 0 0 2px #00FF2E, 0 0 24px rgba(0, 255, 46, 0.3), 0 16px 48px rgba(0, 0, 0, 0.7)',

      // Navigation
      'nav': '0 4px 24px rgba(0, 0, 0, 0.8)',
    },

    // ─── Transitions ─────────────────────────────────────────────────────────
    transitionDuration: {
      DEFAULT: '300ms',
      75:      '75ms',
      100:     '100ms',
      150:     '150ms',
      200:     '200ms',
      300:     '300ms',
      500:     '500ms',
      700:     '700ms',
      1000:    '1000ms',
    },

    transitionTimingFunction: {
      DEFAULT:  'cubic-bezier(0.4, 0, 0.2, 1)',
      linear:   'linear',
      in:       'cubic-bezier(0.4, 0, 1, 1)',
      out:      'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce:   'cubic-bezier(0.34, 1.56, 0.64, 1)',
      spring:   'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      snappy:   'cubic-bezier(0.2, 0, 0, 1)',
    },

    // ─── Animations ──────────────────────────────────────────────────────────
    animation: {
      none:        'none',
      spin:        'spin 1s linear infinite',
      ping:        'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse:       'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce:      'bounce 1s infinite',

      // SpaceFit brand animations
      shimmer:     'shimmer 2s ease-in-out infinite',
      glow:        'glow 2.5s ease-in-out infinite',
      'glow-pulse': 'glowPulse 1.5s ease-in-out infinite',
      slideUp:     'slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      slideDown:   'slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      slideLeft:   'slideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      slideRight:  'slideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      fadeIn:      'fadeIn 0.4s ease-out both',
      fadeOut:     'fadeOut 0.3s ease-in both',
      scaleIn:     'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      countUp:     'countUp 0.8s ease-out both',
      scan:        'scan 3s linear infinite',
      flicker:     'flicker 4s ease-in-out infinite',
    },

    keyframes: {
      spin: {
        to: { transform: 'rotate(360deg)' },
      },
      ping: {
        '75%, 100%': { transform: 'scale(2)', opacity: '0' },
      },
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%':      { opacity: '.5' },
      },
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%':      { transform: 'translateY(-12%)' },
      },
      shimmer: {
        '0%':   { backgroundPosition: '-800px 0' },
        '100%': { backgroundPosition: '800px 0' },
      },
      glow: {
        '0%, 100%': { boxShadow: '0 0 12px rgba(0, 255, 46, 0.15)' },
        '50%':      { boxShadow: '0 0 32px rgba(0, 255, 46, 0.5)' },
      },
      glowPulse: {
        '0%, 100%': { boxShadow: '0 0 8px rgba(0, 255, 46, 0.3)' },
        '50%':      { boxShadow: '0 0 24px rgba(0, 255, 46, 0.7)' },
      },
      slideUp: {
        from: { opacity: '0', transform: 'translateY(24px)' },
        to:   { opacity: '1', transform: 'translateY(0)' },
      },
      slideDown: {
        from: { opacity: '0', transform: 'translateY(-24px)' },
        to:   { opacity: '1', transform: 'translateY(0)' },
      },
      slideLeft: {
        from: { opacity: '0', transform: 'translateX(24px)' },
        to:   { opacity: '1', transform: 'translateX(0)' },
      },
      slideRight: {
        from: { opacity: '0', transform: 'translateX(-24px)' },
        to:   { opacity: '1', transform: 'translateX(0)' },
      },
      fadeIn: {
        from: { opacity: '0' },
        to:   { opacity: '1' },
      },
      fadeOut: {
        from: { opacity: '1' },
        to:   { opacity: '0' },
      },
      scaleIn: {
        from: { opacity: '0', transform: 'scale(0.92)' },
        to:   { opacity: '1', transform: 'scale(1)' },
      },
      countUp: {
        from: { opacity: '0', transform: 'translateY(16px) scale(0.95)' },
        to:   { opacity: '1', transform: 'translateY(0) scale(1)' },
      },
      scan: {
        '0%':   { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(100vh)' },
      },
      flicker: {
        '0%, 95%, 100%': { opacity: '1' },
        '96%':           { opacity: '0.8' },
        '97%':           { opacity: '1' },
        '98%':           { opacity: '0.7' },
        '99%':           { opacity: '1' },
      },
    },

    extend: {
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero':     'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 100%)',
        'gradient-card':     'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
        'gradient-neon-fade':'linear-gradient(90deg, rgba(0,255,46,0.15) 0%, transparent 100%)',
        'noise':             "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },

  plugins: [
    function ({ addUtilities, addComponents, theme }) {
      // ─── Text Utilities ─────────────────────────────────────────────────
      addUtilities({
        '.text-glow': {
          textShadow: '0 0 10px rgba(0, 255, 46, 0.4), 0 0 20px rgba(0, 255, 46, 0.2)',
        },
        '.text-glow-lg': {
          textShadow: '0 0 20px rgba(0, 255, 46, 0.6), 0 0 40px rgba(0, 255, 46, 0.3)',
        },

        // ─── Border Utilities ──────────────────────────────────────────────
        '.neon-border': {
          borderColor: '#00FF2E',
          boxShadow:   '0 0 12px rgba(0, 255, 46, 0.3)',
        },
        '.neon-border-lg': {
          borderColor: '#00FF2E',
          boxShadow:   '0 0 24px rgba(0, 255, 46, 0.5)',
        },

        // ─── Overflow Text ──────────────────────────────────────────────────
        '.truncate-2': {
          display:              '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow:             'hidden',
        },
        '.truncate-3': {
          display:              '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow:             'hidden',
        },

        // ─── Background Effects ─────────────────────────────────────────────
        '.bg-noise': {
          position:   'relative',
          '&::after': {
            content:        '""',
            position:       'absolute',
            inset:          '0',
            backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            pointerEvents:  'none',
          },
        },
        '.bg-scanlines': {
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
        },
        '.bg-grid-dark': {
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize:  '32px 32px',
        },

        // ─── Interaction ────────────────────────────────────────────────────
        '.hover-lift': {
          transition:  'transform 0.3s ease-out, box-shadow 0.3s ease-out',
          '&:hover': {
            transform:  'translateY(-4px)',
            boxShadow:  '0 8px 32px rgba(0, 0, 0, 0.6)',
          },
        },

        // ─── Animation Delays ───────────────────────────────────────────────
        '.delay-100':  { animationDelay: '100ms' },
        '.delay-200':  { animationDelay: '200ms' },
        '.delay-300':  { animationDelay: '300ms' },
        '.delay-400':  { animationDelay: '400ms' },
        '.delay-500':  { animationDelay: '500ms' },
        '.delay-600':  { animationDelay: '600ms' },
        '.delay-700':  { animationDelay: '700ms' },
        '.delay-800':  { animationDelay: '800ms' },
      });

      // ─── Component Shortcuts ───────────────────────────────────────────
      addComponents({
        '.btn-primary': {
          display:       'inline-flex',
          alignItems:    'center',
          justifyContent:'center',
          gap:           '8px',
          padding:       '12px 28px',
          background:    '#00FF2E',
          color:         '#0a0a0a',
          fontFamily:    "'DM Sans', sans-serif",
          fontSize:      '0.875rem',
          fontWeight:    '600',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          borderRadius:  '6px',
          border:        '2px solid transparent',
          cursor:        'pointer',
          transition:    'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': {
            background:  '#4DFF66',
            boxShadow:   '0 0 20px rgba(0, 255, 46, 0.35), 0 4px 12px rgba(0, 0, 0, 0.4)',
            transform:   'scale(1.02)',
          },
          '&:active': {
            background:  '#00CC23',
            transform:   'scale(0.98)',
          },
          '&:focus-visible': {
            outline:     'none',
            boxShadow:   '0 0 0 4px rgba(0, 255, 46, 0.25)',
          },
          '&:disabled': {
            background:  '#3a3a3a',
            color:       '#707070',
            cursor:      'not-allowed',
            transform:   'none',
            boxShadow:   'none',
          },
        },

        '.btn-secondary': {
          display:       'inline-flex',
          alignItems:    'center',
          justifyContent:'center',
          gap:           '8px',
          padding:       '10px 26px',
          background:    'transparent',
          color:         '#ffffff',
          fontFamily:    "'DM Sans', sans-serif",
          fontSize:      '0.875rem',
          fontWeight:    '600',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          borderRadius:  '6px',
          border:        '2px solid #2a2a2a',
          cursor:        'pointer',
          transition:    'all 0.2s ease-out',
          '&:hover': {
            borderColor: '#00FF2E',
            color:       '#00FF2E',
            background:  'rgba(0, 255, 46, 0.05)',
          },
          '&:active': {
            background:  'rgba(0, 255, 46, 0.1)',
          },
          '&:focus-visible': {
            outline:     'none',
            boxShadow:   '0 0 0 4px rgba(0, 255, 46, 0.25)',
          },
        },

        '.card-base': {
          background:   '#1a1a1a',
          border:       '1px solid #2a2a2a',
          borderRadius: '8px',
          padding:      '24px',
          boxShadow:    '0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
          transition:   'border-color 0.3s ease-out, box-shadow 0.3s ease-out, transform 0.3s ease-out',
          '&:hover': {
            borderColor: '#3a3a3a',
            boxShadow:   '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            transform:   'translateY(-2px)',
          },
        },

        '.input-base': {
          width:       '100%',
          height:      '44px',
          padding:     '0 16px',
          background:  '#0a0a0a',
          color:       '#ffffff',
          border:      '1px solid #2a2a2a',
          borderRadius:'6px',
          fontFamily:  "'DM Sans', sans-serif",
          fontSize:    '1rem',
          transition:  'border-color 0.2s ease-out, box-shadow 0.2s ease-out',
          '&::placeholder': { color: '#4a4a4a' },
          '&:hover':    { borderColor: '#3a3a3a' },
          '&:focus': {
            outline:     'none',
            borderColor: '#00FF2E',
            boxShadow:   '0 0 0 3px rgba(0, 255, 46, 0.2), 0 0 12px rgba(0, 255, 46, 0.1)',
          },
        },

        '.section-label': {
          fontFamily:    "'DM Sans', sans-serif",
          fontSize:      '0.75rem',
          fontWeight:    '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color:         '#00FF2E',
        },

        '.stat-number': {
          fontFamily:    "'Barlow Condensed', sans-serif",
          fontWeight:    '800',
          lineHeight:    '1',
          letterSpacing: '-0.02em',
          color:         '#00FF2E',
        },
      });
    },
  ],
};
