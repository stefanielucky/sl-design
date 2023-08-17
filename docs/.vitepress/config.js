import {
  defineConfig
} from 'vitepress';
import pages from './pages.js';
import nav from './nav.js'
import intro from './intro.js'

export default defineConfig({
  title: "sl-design",
  description: "sl-design-pc",
  themeConfig: {
    nav,
    sidebar: {
      "/intro/": intro,
      "/pages/": pages
    }
  }
})