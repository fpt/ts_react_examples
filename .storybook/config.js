import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('../src/components/stories/atoms.story.tsx');
  require('../src/components/stories/molecules.story.tsx');
  require('../src/components/stories/organisms.story.tsx');
  require('../src/components/stories/templates.story.tsx');
  require('../src/components/stories/pages.story.tsx');
}

configure(loadStories, module);
