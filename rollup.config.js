const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const resolve = require('@rollup/plugin-node-resolve');
const { visualizer } = require('rollup-plugin-visualizer');
const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts');

const pkg = require('./package.json');

module.exports = [
  {
    input: './src/lib/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-hooks-paginator-ts'
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      postcss({
        extensions: ['.css', '.scss'],
        extract: 'types/style/main.scss'
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      resolve(),
      commonjs(),
      visualizer(),
      typescript({ tsconfig: './tsconfig.json' })
    ]
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "es" }],
    external: [/\.scss$/],
    plugins: [dts.default()],
  }
]