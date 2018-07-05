import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Albums } from '../itunes_music';
import { AutoscrollList } from '../autoscroll';
import { Hello, Counter, NewCounter } from '../hello';


storiesOf('iTunes Album Widget', module)
  .add('with query', () => (
    <div>
      <Albums query="jazz" />
      <Albums query="blues" />
    </div>
  ));

storiesOf('Hello', module)
  .add('normal', () => (
    <div>
      <Hello />
    </div>
  ));

storiesOf('Counter', module)
  .add('normal', () => (
    <div>
      <Counter />
    </div>
  ));

storiesOf('NewCounter', module)
  .add('normal', () => (
    <div>
      <NewCounter />
    </div>
  ));

storiesOf('AutoscrollList', module)
  .add('normal', () => (
    <div>
      <AutoscrollList
        items={[
          { key: 'a', name: 'Apple' },
          { key: 'g', name: 'Google' },
          { key: 'i', name: 'IBM' },
          { key: 'm', name: 'Microsoft' },
          { key: 'o', name: 'Oracle' },
          { key: 's', name: 'Salesforce' },
        ]}
        selectedKey={'m'}
      />
    </div>
  ));
