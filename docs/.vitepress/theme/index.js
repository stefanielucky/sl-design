import DefaultTheme from 'vitepress/theme'
import MobileDemo from './MobileDemo.vue'
import MobileDemoSingle from './MobileDemoSingle.vue'
import HxContent from './HxContent.vue'

import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('MobileDemo', MobileDemo)
    ctx.app.component('HxContent', HxContent)
    ctx.app.component('MobileDemoSingle', MobileDemoSingle)
  }
}