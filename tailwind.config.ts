import type { Config } from 'tailwindcss';

/* ==========================================================================
   Every entry below points at a CSS variable declared in src/app/globals.css.
   Nothing is hard-coded here either — this file only gives the variables
   Tailwind class names, so components can say `bg-primary` / `text-heading`
   / `rounded-card` and stay themeable from one place.
   ========================================================================== */

/** `hsl(var(--x) / <alpha>)` so opacity modifiers work on every colour. */
const hsl = (variable: string) => `hsl(var(${variable}) / <alpha-value>)`;

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      /* Extra breakpoints that mirror the original stylesheets' media
         queries. Tailwind's defaults (sm/md/lg/xl) still apply. */
      screens: {
        tp: '781px',
        ts: '851px',
        tl: '901px',
        nav: '981px',
        dw: '1001px',
        dl: '1101px',
      },

      colors: {
        /* ---- semantic: re-themed per surface in globals.css ------------ */
        background: hsl('--bg'),
        surface: {
          DEFAULT: hsl('--surface'),
          alt: hsl('--surface-alt'),
        },
        heading: hsl('--heading'),
        paragraph: hsl('--body'),
        muted: hsl('--muted'),
        line: {
          DEFAULT: hsl('--line'),
          soft: hsl('--line-soft'),
        },
        primary: {
          DEFAULT: hsl('--primary'),
          hover: hsl('--primary-hover'),
          fg: hsl('--primary-fg'),
          soft: hsl('--primary-soft'),
        },
        secondary: {
          DEFAULT: hsl('--secondary'),
          fg: hsl('--secondary-fg'),
        },
        accent: hsl('--accent'),
        inverse: {
          DEFAULT: hsl('--inverse'),
          fg: hsl('--inverse-fg'),
        },
        link: hsl('--link'),
        success: hsl('--success'),
        warning: hsl('--warning'),
        error: hsl('--error'),

        /* ---- component tokens ----------------------------------------- */
        btn: {
          solid: hsl('--btn-solid-bg'),
          'solid-hover': hsl('--btn-solid-bg-hover'),
          'solid-fg': hsl('--btn-solid-fg'),
          'outline-fg': hsl('--btn-outline-fg'),
          'outline-border': hsl('--btn-outline-border'),
          'outline-hover': hsl('--btn-outline-bg-hover'),
          'outline-hover-fg': hsl('--btn-outline-fg-hover'),
          light: hsl('--btn-light-bg'),
          'light-hover': hsl('--btn-light-bg-hover'),
          'light-fg': hsl('--btn-light-fg'),
        },
        card: {
          DEFAULT: hsl('--card-bg'),
          border: hsl('--card-border'),
        },
        brand: {
          /* business accent — also the wordmark colours */
          DEFAULT: hsl('--k-purple'),
          light: hsl('--k-lavender'),
          primary: hsl('--brand-primary'),
          secondary: hsl('--brand-secondary'),
        },

        /* ---- raw palette, for the few genuinely page-specific accents -- */
        navy: {
          700: hsl('--k-navy-700'),
          800: hsl('--k-navy-800'),
          900: hsl('--k-navy-900'),
          950: hsl('--k-navy-950'),
        },
        sky: {
          50: hsl('--k-blue-50'),
          100: hsl('--k-blue-100'),
          400: hsl('--k-blue-400'),
          700: hsl('--k-blue-700'),
        },
        teal: {
          50: hsl('--k-teal-50'),
          100: hsl('--k-teal-100'),
          200: hsl('--k-teal-200'),
          300: hsl('--k-teal-300'),
          400: hsl('--k-teal-400'),
          500: hsl('--k-teal-500'),
          550: hsl('--k-teal-550'),
          600: hsl('--k-teal-600'),
          700: hsl('--k-teal-700'),
          800: hsl('--k-teal-800'),
          900: hsl('--k-teal-900'),
        },
        paper: {
          50: hsl('--k-paper-50'),
          100: hsl('--k-paper-100'),
        },
        sand: {
          200: hsl('--k-sand-200'),
          300: hsl('--k-sand-300'),
        },
        steel: {
          200: hsl('--k-slate-200'),
          300: hsl('--k-slate-300'),
        },
        divider: {
          50: hsl('--k-line-50'),
          100: hsl('--k-line-100'),
          150: hsl('--k-line-150'),
          200: hsl('--k-line-200'),
          250: hsl('--k-line-250'),
          300: hsl('--k-line-300'),
        },
        graphite: {
          50: hsl('--k-gray-50'),
          400: hsl('--k-ink-400'),
          500: hsl('--k-ink-500'),
          700: hsl('--k-ink-700'),
          900: hsl('--k-ink-900'),
          950: hsl('--k-ink-950'),
        },

        /* ---- business palette aliases ---------------------------------- */
        plum: {
          DEFAULT: hsl('--k-plum'),
          light: hsl('--k-plum-light'),
        },
        lavender: hsl('--k-lavender'),
        cream: hsl('--k-cream'),
        offwhite: hsl('--k-offwhite'),
        ink: hsl('--k-plum-ink'),
        'gray-muted': hsl('--k-plum-gray'),
      },

      fontFamily: {
        sans: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
        display: ['var(--font-display)'],
        editorial: ['var(--font-editorial)'],
        /* business sections use `font-serif-display` for the italic accent */
        'serif-display': ['var(--font-display)'],
      },

      fontSize: {
        display: ['var(--text-display)', { lineHeight: 'var(--leading-tight)', letterSpacing: '-0.02em' }],
        h1: ['var(--text-h1)', { lineHeight: '1.05' }],
        h2: ['var(--text-h2)', { lineHeight: 'var(--leading-tight)' }],
        h3: ['var(--text-h3)', { lineHeight: '1.15' }],
        h4: ['var(--text-h4)', { lineHeight: 'var(--leading-heading)' }],
        'body-lg': ['var(--text-body-lg)', { lineHeight: 'var(--leading-body)' }],
        body: ['var(--text-body)', { lineHeight: 'var(--leading-body)' }],
        'body-sm': ['var(--text-body-sm)', { lineHeight: 'var(--leading-body)' }],
        small: ['var(--text-small)', { lineHeight: '1.5' }],
        caption: ['var(--text-caption)', { lineHeight: '1.45' }],
        micro: ['var(--text-micro)', { lineHeight: '1.4' }],
        nav: ['var(--text-nav)', { lineHeight: '1.2' }],
        button: ['var(--text-button)', { lineHeight: '1.2' }],
        kicker: ['var(--text-kicker)', { lineHeight: '1.3', letterSpacing: 'var(--tracking-kicker)' }],
      },

      lineHeight: {
        tight: 'var(--leading-tight)',
        heading: 'var(--leading-heading)',
        body: 'var(--leading-body)',
        relaxed: 'var(--leading-relaxed)',
      },

      letterSpacing: {
        tight: 'var(--tracking-tight)',
        wide: 'var(--tracking-wide)',
      },

      /* Named rhythm tokens. Tailwind's own 4px numeric scale is kept as-is
         for everyday spacing; these are the values that should change
         globally (section rhythm, container gutter, card padding). */
      spacing: {
        section: 'var(--section-py)',
        'section-sm': 'var(--section-py-sm)',
        'section-lg': 'var(--section-py-lg)',
        gutter: 'var(--container-gutter)',
        'container-pad': 'var(--container-pad)',
        card: 'var(--card-padding)',
        content: 'var(--content-gap)',
      },

      maxWidth: {
        container: 'var(--container-max)',
      },

      borderRadius: {
        xs: 'var(--radius-xs)',
        pill: 'var(--radius-pill)',
        card: 'var(--card-radius)',
        button: 'var(--btn-radius)',
        panel: 'var(--radius-lg)',
        media: 'var(--radius-media)',
      },

      borderWidth: {
        DEFAULT: 'var(--border-width)',
        thick: 'var(--border-width-thick)',
      },

      backgroundImage: {
        'hero-wash': 'var(--gradient-hero-wash)',
        'hero-scrim': 'var(--gradient-hero-scrim)',
        reviews: 'var(--gradient-reviews)',
      },

      dropShadow: {
        logo: 'var(--shadow-logo)',
      },

      boxShadow: {
        raised: 'var(--shadow-sm)',
        panel: 'var(--shadow-panel)',
        cta: 'var(--shadow-cta)',
        photo: 'var(--shadow-photo)',
        tile: 'var(--shadow-tile)',
        glass: 'var(--shadow-glass)',
        searchbar: 'var(--shadow-searchbar)',
        quote: 'var(--shadow-quote)',
        'quote-hover': 'var(--shadow-quote-hover)',
        'quote-featured': 'var(--shadow-quote-featured)',
        chip: 'var(--shadow-chip)',
        float: 'var(--shadow-md)',
        deep: 'var(--shadow-lg)',
        menu: 'var(--shadow-menu)',
        card: 'var(--shadow-card)',
      },

      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration)',
        DEFAULT: 'var(--duration)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
      },

      transitionTimingFunction: {
        DEFAULT: 'var(--ease)',
        'out-expo': 'var(--ease-out-expo)',
      },

      zIndex: {
        header: 'var(--z-header)',
        dropdown: 'var(--z-dropdown)',
        overlay: 'var(--z-overlay)',
      },

    },
  },
  plugins: [],
};

export default config;
