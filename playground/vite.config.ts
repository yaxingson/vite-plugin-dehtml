import { defineConfig } from 'vite'
import dehtml from 'vite-plugin-dehtml'

export default defineConfig({
  plugins:[
    dehtml({
      head:[
        {
          name:'meta',
          attrs:{
            
          }
        }
      ],
      script:{
        src:'',
        injectTo:'body'
      }
    })
  ]
})
