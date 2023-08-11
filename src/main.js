import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HxDesignPC from '../package/index'
import 'mand-mobile-next/dist/lib/mand-mobile-next.min.css'

createApp(App).use(HxDesignPC).mount('#app')
