import { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-docs'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true // type-check stories during Storybook build
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};

export default config
