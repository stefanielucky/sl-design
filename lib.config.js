import {
  defineConfig
} from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';


export default defineConfig({
  build: {
    //打包文件目录
    outDir: "lib/sl-design",
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["./package/index.js"],
      output: [{
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        },{
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "lib/sl-design/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "lib/sl-design/lib",
        },
      ],
    },
    lib: {
      entry: path.join(__dirname, './package/index.js'),
      name: 'sl-design',
      fileName: 'sl-design'
    },
  },
  plugins: [vue()],
});