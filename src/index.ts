import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { PluginOption } from 'vite'

type Tag = {
  name:string
  attrs?:Record<string, string>  
}

type Script = {
  src:string
  injectTo?:'head'|'body'
}

interface DehtmlPluginOption {
  head?:Tag[],
  script?:Script|Script[]
}

const indexTpl = `
<!DOCTYPE html>
<html lang="en">
<head>
  <script type="module" src="/@vite/client"></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
`

export default function dehtmlPlugin(option:DehtmlPluginOption): PluginOption {
  return {
    name:'vite-plugin-dehtml',
    config(config, env) {
      return {
        build:{
          rollupOptions:{
            input:'./index.html'
          }
        }
      }
    },
    transformIndexHtml(html, ctx) {
      console.log(html)
    },
    configureServer(devServer) {
      devServer.middlewares.use((req, res, next)=>{
        if(req.url === '/') {
          res.end(indexTpl)
        }
      })
    }
  }
}
