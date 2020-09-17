import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './ui-components/app/App';
import {FilterStore} from './logic/store/FilterStore';
import {FeedStore} from './logic/store/FeedStore';
import {RepositoryComposite} from './logic/service/RepositoryComposite';
import {FacebookRepository} from './logic/repositories/FacebookRepository';

const feedStore = new FeedStore(new RepositoryComposite([new FacebookRepository()]));
const filterStore = new FilterStore(feedStore);

ReactDOM.render(<App feedStore={feedStore} filterStore={filterStore} />, document.getElementById('app'));
