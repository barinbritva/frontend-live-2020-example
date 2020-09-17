import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './ui-components/app/App';
import {createStores} from './logic/bootstrap/createStores';
import {createUser} from './logic/bootstrap/createUser';

const stores = createStores();
const user = createUser();

ReactDOM.render(
  <App feedStore={stores[0]} filterStore={stores[1]} user={user}/>,
  document.getElementById('app')
);
