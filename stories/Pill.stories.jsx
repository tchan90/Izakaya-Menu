import React from 'react';

import Pill from '../components/MainMenu/components/Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['green', 'red', 'purple', 'gray'],
      },
    },
  },
};

// Create template of how args map to rendering
const Template = (args) => <Pill {...args}>Added!</Pill>;

// Each story reuses that template
export const PillMessage = Template.bind({});
PillMessage.args = {
  color: 'green',
  label: 'Added!',
};
