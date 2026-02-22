import localFont from 'next/font/local';

/**
 * Matter Font - Geometric grotesque sans-serif by Martin Vácha (Displaay)
 * Body text, UI, navigation
 */
export const matterFont = localFont({
  src: [
    {
      path: '../public/fonts/matter/Matter-TRIAL-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/matter/Matter-TRIAL-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/matter/Matter-TRIAL-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/matter/Matter-TRIAL-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-matter',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

/**
 * Season Mix Font - Serif display by Martin Vácha (Displaay)
 * Headings, display text
 */
export const seasonFont = localFont({
  src: [
    {
      path: '../public/fonts/season/SeasonMix-TRIAL-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/season/SeasonMix-TRIAL-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-season',
  display: 'swap',
  fallback: ['ui-serif', 'Georgia', 'serif'],
});
