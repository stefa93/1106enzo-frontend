import { setProjectAnnotations } from '@storybook/experimental-nextjs-vite';
import { beforeAll } from 'vitest';
import '@testing-library/jest-dom/vitest';
import * as projectAnnotations from './preview';

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
beforeAll(() => {
  setProjectAnnotations(projectAnnotations);
});
