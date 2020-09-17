import ReactDOM from 'react-dom';
import React from 'react';
import {createStores} from './createStores';
import {App} from '../src/ui-components/app/App';

const stores = createStores();

ReactDOM.render(<App feedStore={stores[0]} filterStore={stores[1]} />, document.getElementById('test-node'));
