import DefaultTheme from 'vitepress/theme'
import MobileDemoSingle from './MobileDemoSingle.vue'
import garfieldDesignPC from '../../../package/index.js'
import 'mand-mobile-next/dist/lib/mand-mobile-next.min.css'

import './custom.scss'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.use(garfieldDesignPC)
    ctx.app.component('MobileDemoSingle', MobileDemoSingle)
  }
}