import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './ui-components/app/App';
import {createStores} from './logic/bootstrap/createStores';

const stores = createStores();

ReactDOM.render(
  <App feedStore={stores[0]} filterStore={stores[1]} user={stores[2]}/>,
  document.getElementById('app')
);
