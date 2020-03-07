import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact, { SingleSpaContext } from 'single-spa-react';

import rootComponent from './App';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
