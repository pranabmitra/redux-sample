// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import nodeResolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';

export default {
  entry: 'src/main.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  moduleName: 'TodoApp',
  sourceMap: false,
  plugins: [
    nodeResolve({ jsnext: true, main: true }),
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    globals(),
  ],
};
