// postcss插件
const POSTCSS_LOADER_OPTIONS = {
  postcssOptions: {
    ident: 'postcss',
    syntax: 'postcss-scss',
    plugins: [
      'postcss-import',
      'tailwindcss',
      'autoprefixer'
    ]
  }
};
module.exports = (config, options) => {
  // config就是系统的webpack配置
  // 第一步过滤掉系统的css和sass处理
  const sassRules = config.module.rules.filter($rule => {
    return $rule.use && $rule.use.find($loader => $loader.loader && ($loader.loader.indexOf('sass-loader') !== -1 || $loader.loader.indexOf('css-loader') !== -1));
  });
  sassRules.forEach(sassRule => {
    const postcssLoader = sassRule.use.find($loader => $loader.loader && $loader.loader.indexOf('postcss-loader') !== -1);
    if (postcssLoader) {
      postcssLoader.options = POSTCSS_LOADER_OPTIONS;
    }
  });
  return config
};

