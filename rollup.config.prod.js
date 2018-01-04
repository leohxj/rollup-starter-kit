import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import baseConfig from './rollup.config.base';
import { name, version, author } from './package.json';

// banner
const banner =
  `${'/*!\n' + ' * '}${name}.js v${version}\n` +
  ` * (c) 2017-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`;

export default Object.assign({}, baseConfig, {
  output: [
    {
      file: `dist/${name}.js`,
      format: 'umd',
      name,
      banner,
      sourcemap: true
    },
    {
      file: `dist/${name}.min.js`,
      format: 'umd',
      name,
      banner
    },
    {
      file: `dist/${name}.common.js`,
      format: 'cjs',
      banner
    },
    {
      file: `dist/${name}.esm.js`,
      format: 'es',
      banner
    }
  ],
  plugins: baseConfig.plugins.concat([
    uglify(
      {
        compress: {
          drop_console: true
        }
      },
      minify
    ),
    filesize()
  ])
});
