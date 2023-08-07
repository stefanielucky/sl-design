import DefaultTheme from 'vitepress/theme'
import MobileDemoSingle from './MobileDemoSingle.vue'

import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('MobileDemoSingle', MobileDemoSingle)
  }
}