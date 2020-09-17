import ReactDOM from 'react-dom';
import React from 'react';
import {createStores} from './createStores';
import {App} from '../src/ui-components/app/App';
import {createUser} from './createUser';

const stores = createStores();
const user = createUser()

ReactDOM.render(
  <App feedStore={stores[0]} filterStore={stores[1]} user={user} />,
  document.getElementById('test-node')
);
