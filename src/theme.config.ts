import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://example.org',
  title: 'nelailen',
  description: 'A small spot in a galaxy of bright stars',
  author: 'lainalen',
  navbarItems: [
    { label: 'Writings', href: '/posts/' },
    { label: 'Scratch', href: '/notes/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Me', href: '/about/' },
    {
      label: 'etc',
      children: [
        { label: 'Landing page', href: '/' },
        { label: '404 page', href: '/404' },
        { label: 'Tag: documentation', href: '/tags/documentation/' },
        { label: 'Tags', href: '/tags/' }
      ]
    }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/n3lbits',
      label: 'Github'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    },
    {
      icon: 'tabler--brand-linkedin',
      href: '/https://linkedin.com',
      label: 'LinkedIn'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-custom-1',
  openGraphImage: undefined,
  postsPerPage: 5,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
