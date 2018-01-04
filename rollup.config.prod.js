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

// 支持输出 []
export default [{
  ...baseConfig,
  output: [
    {
      file: `dist/${name}.js`,
      format: 'umd',
      name,
      banner,
      sourcemap: true
    }
  ],
  plugins: [
    ...baseConfig.plugins,
    uglify(
      {
        compress: {
          drop_console: true
        }
      },
      minify
    ),
    filesize()
  ]
}, {
  ...baseConfig,
  output: [
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
  plugins: [
    ...baseConfig.plugins,
    filesize()
  ]
}]
