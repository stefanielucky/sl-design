import DefaultTheme from 'vitepress/theme'
import MobileDemoSingle from './MobileDemoSingle.vue'
// import Hxdesign from '../../../package/index.js'

import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components

    // console.log('Hxdesign', Hxdesign)
    // ctx.app.use(Hxdesign)
    ctx.app.component('MobileDemoSingle', MobileDemoSingle)
  }
}