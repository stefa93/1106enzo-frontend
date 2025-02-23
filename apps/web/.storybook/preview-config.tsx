import type { Preview } from '@storybook/react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import '../src/app/globals.css';
import 'react-toastify/dist/ReactToastify.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <React.Fragment>
        <Story />
        <ToastContainer />
      </React.Fragment>
    ),
  ],
};

export default preview;
