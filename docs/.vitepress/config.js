import {
  defineConfig
} from 'vitepress';
import pages from './pages.js';
import nav from './nav.js'
import intro from './intro.js'

export default defineConfig({
  title: "hx-design",
  description: "hx-design-pc",
  themeConfig: {
    nav,
    sidebar: {
      "/intro/": intro,
      "/pages/": pages
    }
  }
})