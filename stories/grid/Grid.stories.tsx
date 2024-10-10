import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Grid2 } from '../../src';
import { IGridProps } from '../../src/components/grid_2';
import {
  mockBurgerGenerator,
  mockColumnGenerator,
  mockFooterGenerator,
  mockRowGenerator
} from './__mocks__/gridGenerator';

export default {
  title: 'Components/Grid',
  component: Grid2,
  argTypes: {
    columns: {
      description: 'array of columns',
    },
    rows: {
      description: 'array of rows',
    },
    footer: {
      description: 'array of footer',
    },
    height: {
      description: 'sum height other elements',
    },
    minHeight: {
      description: "min-height grid, string (px, vh ...)"
    },
    columnMutation: {
      description: 'will call with column`s array after mutation',
    },
    burgerItems: {
      description: 'array for dropdown in first columns',
    },
    onBurgerItemClick: {
      description: 'will call with target item and rows id',
    },
    isShowCheckboxes: {
      description: 'is show checkboxes in first columns',
    },
    onChangeCheckboxes: {
      description: 'return rows`s id array',
    },
    onCellClick: {
      description: 'will call with cell`s content',
    },
  },
} as Meta<typeof Grid2>;

const Template: StoryFn<typeof Grid2> = (args) => <Grid2 {...args} />;

export const Col2Row2 = Template.bind({});
Col2Row2.args = {
  columns: mockColumnGenerator(2),
  rows: mockRowGenerator(2, 2),
};

export const Col5Row5 = Template.bind({});
Col5Row5.args = {
  columns: mockColumnGenerator(5),
  rows: mockRowGenerator(5, 5),
  burgerItems: mockBurgerGenerator(5),
  burgerKey: "label"
};

export const Col10Row10 = Template.bind({});
Col10Row10.args = {
  columns: mockColumnGenerator(10),
  rows: mockRowGenerator(10, 10),
  height: 500,
};

export const Col25Row25 = Template.bind({});
Col25Row25.args = {
  columns: mockColumnGenerator(25),
  // rows: mockRowGenerator(25, 25),
  rows: [
    { id: 1, actions: ["test"] },
    { id: 2, actions: ["test"] },
    { id: 3, actions: ["test"] },
    { id: 4, actions: ["test"] },
    { id: 5, actions: ["test"] },
    { id: 6, actions: ["test"] },
    { id: 7, actions: ["test"] },
    { id: 8, actions: ["test"] },
    { id: 9, actions: ["test"] },
    { id: 10, actions: ["test"] },
    { id: 11, actions: ["test"] },
    { id: 12, actions: ["test"] },
    { id: 13, actions: ["test"] },
  ],
  burgerItems: [{ title: "test", id: "test", type: "openApplication", handler: "test", params: {} }],
  height: 500,
} as IGridProps;

export const Col50Row50 = Template.bind({});
Col50Row50.args = {
  columns: mockColumnGenerator(50),
  rows: mockRowGenerator(50, 50),
  height: 500,
};

export const Col50Row500 = Template.bind({});
Col50Row500.args = {
  columns: mockColumnGenerator(50),
  rows: mockRowGenerator(50, 200),
  height: 500,
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  columns: mockColumnGenerator(10),
  rows: mockRowGenerator(10, 50),
  footer: mockFooterGenerator(10),
  height: 500,
};
