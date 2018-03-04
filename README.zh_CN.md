# a real scaffold for building library &middot; [![Author](https://img.shields.io/badge/Author-leohxj-blue.svg)](http://finalhome.org)

[README in English](README.md)


## Tips
- package.json 中 配置 main, module, unpkg 指向 cjs, esm, umd 三个版本
- sourcemap, 应该在 development 版本中输出, 生产环境不需要, library 会被应用层再次打包, 由应用控制 sourcemap 的输出
- 生产环境
  - umd: 一份压缩版本(.min)和未压缩版本(带有 sourcemap 吧?)
  - 一份 commonjs 版本, 不需要压缩
  - 一份 esm 版本, 不需要压缩
  - cjs, esm 版本 如需有调试信息, 通过 process.env.NODE_ENV 区分
- jest: 设置 babelrc, 新增 env 配置, 因为 jest 无法识别 ES Module.
