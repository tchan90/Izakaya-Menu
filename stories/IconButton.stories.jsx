import React from 'react';

import IconButton from '../components/MainMenu/components/IconButton';

export default {
  title: 'Components/Icon Button',
  component: IconButton,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['search', 'plus'],
      },
    },
    onClick: { action: 'clicked' },
  },
};

// Create template of how args map to rendering
const Template = (args) => <IconButton {...args} />;

// Each story reuses that template
export const IconBtn = Template.bind({});
IconBtn.args = {
  icon: 'search',
};
