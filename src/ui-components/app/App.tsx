import React from 'react';
import {Header} from '../header/Header';
import {contentContainer} from './appStyles';
import {Feed} from '../feed/Feed';
import {Filter} from '../filter/Filter';
import {AppState} from './AppState';
import {RepositoryComposite} from '../../logic/service/RepositoryComposite';
import {FacebookRepository} from '../../logic/repositories/FacebookRepository';
import {FeedStore} from '../../logic/store/FeedStore';

export class App extends React.Component<any, AppState> {
  private readonly feedStore: FeedStore;

  constructor(props: any, context?: any) {
    super(props, context);

    this.state = {
      posts: []
    };

    this.feedStore = new FeedStore(
      new RepositoryComposite([new FacebookRepository()]),
      (posts) => {
        console.log('update', posts);
        this.setState({ posts: posts });
        // this.forceUpdate()
      });
  }

  componentDidMount() {
    this.feedStore.load()
  }

  render() {
    return <div>
        <Header />
        <div style={contentContainer}>
          <Feed posts={this.state.posts} feedStore={this.feedStore} />
          <Filter />
        </div>
      </div>;
  }
}
