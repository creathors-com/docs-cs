export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)'
      }
    }
  },
  seo: {
    siteName: 'Creathors.com - Dokumentace'
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true
  },
  footer: {
    credits: 'Copyright © 2025',
    colorMode: false,
    links: [{
      'icon': 'material-symbols:home-pin-sharp',
      'to': 'https://creathors.com',
      'target': '_blank',
      'aria-label': 'Creathors Website'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.gg/dfuSeMPpj4',
      'target': '_blank',
      'aria-label': 'Creathors on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/CreathorsTeam',
      'target': '_blank',
      'aria-label': 'Creathors on X'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://instagram.com/creathorsteam',
      'target': '_blank',
      'aria-label': 'Creathors on Instagram'
    }, {
      'icon': 'i-simple-icons-facebook',
      'to': 'https://www.facebook.com/people/Creathors-Platform/61561096143764/',
      'target': '_blank',
      'aria-label': 'Creathors on Facebook'
    }]
  },
  toc: {
    title: 'Obsah',
    bottom: {
      title: 'Komunita',
      edit: 'https://github.com/creathors-com/docs-cs/edit/main/content',
      links: [{
        icon: 'i-material-symbols:mail',
        label: 'Mailová podpora',
        to: 'mailto:support@creathors.com',
      }]
    }
  }
})
