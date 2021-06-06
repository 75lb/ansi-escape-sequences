const resolve = require('rollup-plugin-node-resolve')

module.exports = [
  {
    input: 'index.mjs',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'auto'
    },
    external: [],
    plugins: [resolve({ preferBuiltins: true })]
  }
]
