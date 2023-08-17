# 快速开始

## 安装
```
npm i sl-design
#or
yarn add sl-design
```

## 使用

### 全量引入
在 `main.ts` 中写入以下内容
```
import SLDesign from '../package/index'
import 'SLDesign/dist/lib/SLDesign.min.css'

createApp(App).use(SLDesign).mount('#app')
```

### 按需引入
在 `main.ts` 引入组件库所需的基础变量
```
import 'SLDesign/dist/lib/SLDesign.min.css'
```

在 `vite` 中按需引入
首先，安装 vite-plugin-style-import
```
npm install vite-plugin-style-import -D
#or
yarn add vite-plugin-style-import -D
```

然后修改 `vite.config.ts`
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'SLDesign',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          return `SLDesign/dist/es/${name}/style.js`;
        },
        resolveComponent: (name) => {
          return `SLDesign/dist/es/${name}`;
        },
      }]
    })
  ]
})
```

接下来，如果你只希望引入部分组件，比如 Button，需要在 main.js 中写入以下内容：

```
import { createApp } from 'vue'
import { Button } from 'SLDesign';
import App from './App.vue';

const app = createApp(App)
app.component(Button.name, Button);

/* or
 * app.use(SLButton)
 * app.use(SLSelect)
 */

app.mount('#app')
```

或者直接在组件中使用：
```
import { Button } from 'SLDesign';

export default {
  components: {
    MdButton: Button,
  }
}
```