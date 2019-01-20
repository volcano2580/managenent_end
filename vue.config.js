const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  devServer: {
    // 开发时的代理服务器
    // 密码： V1p3r1@#$%^^^
    // proxy: {
     
    // },

  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('utils', resolve('src/utils'))
      .set('modules', resolve('src/modules'))
      .set('components', resolve('src/components'));
  },
  

};
