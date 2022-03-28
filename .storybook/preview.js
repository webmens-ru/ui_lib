import '../src/styles/fonts/fonts.css';
import '../src/styles/reset.css';
import '../src/styles/normalize.css';
import '../src/styles/custom.css';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
