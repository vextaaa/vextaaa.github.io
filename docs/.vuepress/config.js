const {
  description
} = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vextaa'Docs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'La documentation officiel de Vextaa',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  theme: 'default-prefers-color-scheme',
  head: [
    ['meta', { name: 'theme-color', content: '#31a333' }],
    ['link', { rel: "icon", type: "image/png", href: "/logo.png"}],
    [
      "script",
      {
        "data-ad-client": "ca-pub-6584492273777358",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo.png',
    editLinks: false,
    overrideTheme: 'dark',
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [{
        text: 'Guide',
        link: '/guides/virtualizor.md',
      },
      // {
      //     text: "Themes",
      //     link: "https://themes.pterodox.com"
      // },
      {
          text: "Hébergeur",
          link: "https://by-hoster.com"
      }
    ],
    sidebar: {
      '/guides/': [{
        title: 'Documentation',
        collapsable: false,
        children: [
          'virtualizor'
        ]
      }],
    }
  },
  markdown: {
    toc: {
      includeLevel: [1, 2, 3]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/plugin-google-analytics', {
      'ga': 'UA-184366471-2'
    }]

  ]
}
