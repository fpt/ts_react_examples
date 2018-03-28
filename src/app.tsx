import * as React from 'react';
import { render } from 'react-dom';
import { Albums } from './itunes_music';


const appElementId = '#root';


const App: React.StatelessComponent<React.Props<{}>> = () => (
  <div>
    <Albums query="jazz" />
    <Albums query="blues" />
  </div>
);

render((<App/>), document.querySelector(appElementId));
