import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Grid } from '../../src/components/grid/Grid';
import {
  mockBurgerGenerator,
  mockColumnGenerator,
  mockFooterGenerator,
  mockRowGenerator,
} from './__mocks__/gridGenerator';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    column: {
      description: 'array of column',
    },
    row: {
      description: 'array of rows',
    },
    footer: {
      description: 'array of footer',
    },
    height: {
      description: 'sum height other elements',
    },
    columnMutation: {
      description: 'will call with column`s array after mutation',
    },
    burgerItems: {
      description: 'array for dropdown in first column',
    },
    onBurgerItemClick: {
      description: 'will call with target item and row id',
    },
    isShowCheckboxes: {
      description: 'is show checkboxes in first column',
    },
    onChangeCheckboxes: {
      description: 'return row`s id array',
    },
    onCellClick: {
      description: 'will call with cell`s content',
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Col2Row2 = Template.bind({});
Col2Row2.args = {
  column: mockColumnGenerator(2),
  row: mockRowGenerator(2, 2),
};

export const Col5Row5 = Template.bind({});
Col5Row5.args = {
  column: mockColumnGenerator(5),
  row: mockRowGenerator(5, 5),
  burgerItems: mockBurgerGenerator(5),
};

export const Col10Row10 = Template.bind({});
Col10Row10.args = {
  column: mockColumnGenerator(10),
  row: mockRowGenerator(10, 10),
  height: 100,
};

export const Col25Row25 = Template.bind({});
Col25Row25.args = {
  column: mockColumnGenerator(25),
  row: mockRowGenerator(25, 25),
  height: 100,
};

export const Col50Row50 = Template.bind({});
Col50Row50.args = {
  column: mockColumnGenerator(50),
  row: mockRowGenerator(50, 50),
  height: 100,
};

export const Col50Row500 = Template.bind({});
Col50Row500.args = {
  column: mockColumnGenerator(50),
  row: mockRowGenerator(50, 200),
  height: 100,
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  column: mockColumnGenerator(10),
  row: mockRowGenerator(10, 50),
  footer: mockFooterGenerator(10),
  height: 100,
};
