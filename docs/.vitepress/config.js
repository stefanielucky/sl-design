import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hx-design",
  description: "a hx ui ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/content-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'content-example', link: '/content-examples' },
          { text: 'mobile-example', link: '/mobile-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
