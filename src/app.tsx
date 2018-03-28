import * as React from 'react';
import { render } from 'react-dom';


const appElementId = '#root';


const redirectComponent: React.StatelessComponent<React.Props<{}>> = () => (
  <Redirect to={`${appBaseUri()}/profile/account`} />
);

const App: React.StatelessComponent<React.Props<{}>> = () => (
  <div>Hello.</div>
);

render((<App/>), document.querySelector(appElementId));
