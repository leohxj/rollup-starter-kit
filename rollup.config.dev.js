import baseConfig from './rollup.config.base';
import serve from 'rollup-plugin-serve';

import { name } from './package.json';

export default Object.assign({}, baseConfig, {
  output: [{
    file: `temp/${name}.js`,
    format: 'umd',
    name,
    sourcemap: 'inline'
  }],
  plugins: baseConfig.plugins.concat([
    serve({
      port: 8080,
      contentBase: ['']
    })
  ])
});
