import DefaultTheme from 'vitepress/theme'
import MobileModule from './MobileModule.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('MobileModule',MobileModule)
  }
}