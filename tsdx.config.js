const images = require('@rollup/plugin-image');
const url = require('@rollup/plugin-url');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      url({ include: ['**/*.woff', '**/*.woff2'] }),
      ...config.plugins,
    ];

    return config;
  },
};
