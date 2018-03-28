import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('../src/stories/story.tsx');
}

configure(loadStories, module);
