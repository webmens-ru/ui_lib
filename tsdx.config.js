const images = require('@rollup/plugin-image');
const url = require('@rollup/plugin-url');
const svg = require('rollup-plugin-svg-import')

module.exports = {
  rollup(config, options) {
    config.plugins = [
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      url({ include: ['**/*.woff', '**/*.woff2', '**/*.css'] }),
      svg({
        stringify: false
      }),
      ...config.plugins,
    ];

    return config;
  },
};
