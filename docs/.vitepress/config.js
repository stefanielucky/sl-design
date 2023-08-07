import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "hx-design",
  description: "hx-design-pc",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '简介', link: '/intro/index' },
      { text: '组件', link: '/pages/index'}
    ],
    sidebar: {
      "/intro/": [
        {
          text: '简介',
          items: [
            { text: 'first', link: '/intro/mobile-examples' },
            { text: 'second', link: '/intro/api-examples' }
          ]
        }
      ],
      "/pages/": [
        {
          text: '组件',
          items: [
            { text: 'button', link: '/pages/button' },
            { text: 'input', link: '/pages/input' },
          ]
        }
      ]
    }
  }
})
