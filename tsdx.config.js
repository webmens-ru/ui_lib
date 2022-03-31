const url = require('@rollup/plugin-url');
const path = require('path');

module.exports = {
  rollup(config, options) {
    return {
      ...config,
      plugins: [
        url({
          include: ['**/*.svg', '**/*.png', '**/*.jp(e)?g', '**/*.woff', '**/*.woff2'],
          fileName: '[dirname][hash][extname]',
          sourceDir: path.join(__dirname, 'src'),
        }),
        ...config?.plugins,
      ],
    };
  },
};
