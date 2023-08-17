import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import slDesign from '../package/index'
import 'mand-mobile-next/dist/lib/mand-mobile-next.min.css'

createApp(App).use(slDesign).mount('#app')
