// rollup.config.js
import vue from 'rollup-plugin-vue2';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import image from 'rollup-plugin-image';
import includePaths from 'rollup-plugin-includepaths';
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

let includePathOptions = {
  include: {},
  paths: ['client/'],
  external: [],
  extensions: ['.js', '.vue']
};

export default {
  entry: 'client/main.js',
  format: 'cjs',
  dest: 'dist/bundle.js',
  plugins: [
    vue(),
    postcss({
      plugins: [

      ],
      extensions: ['.css', '.scss'] // default value
    }),
    image(),
    babel({
      exclude: 'node_modules/**'
    }),
    includePaths(includePathOptions),
    nodeResolve({ browser: true, jsnext: true, main: true }),
    commonjs(),
    uglify(),
    filesize(),
    serve({
      // contentBase: 'client',
      host: 'localhost',
      port: 8080
    }),
    livereload()
  ]
}
