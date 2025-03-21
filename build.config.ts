import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries:['src/index.ts'],
  externals:['vite'],
  declaration:true,
  clean:true,
  rollup:{
    emitCJS:true,
  }
})
