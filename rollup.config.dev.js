import baseConfig from './rollup.config.base';
import { name } from './package.json';

export default Object.assign({}, baseConfig, {
  watch: {
    include: 'src/**'
  },
  output: [{
    file: `temp/${name}.js`,
    format: 'umd',
    name,
    sourcemap: 'inline'
  }]
});
