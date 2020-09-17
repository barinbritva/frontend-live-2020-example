import React from 'react';
import {Header} from '../header/Header';
import {contentContainer} from './appStyles';
import {Feed} from '../feed/Feed';
import {Filter} from '../filter/Filter';
import {AppState} from './AppState';
import {AppProps} from './AppProps';
import {SocialMediaProvider} from '../../logic/types/SocialMediaProvider';
import {WallPost} from '../../logic/interfaces/WallPost';

export class App extends React.Component<AppProps, AppState> {
  private readonly filterSubscriber: (data: SocialMediaProvider[]) => void;
  private readonly feedSubscriber: (data: WallPost[]) => void;

  constructor(props: any, context?: any) {
    super(props, context);

    this.filterSubscriber = (data) => {
      console.info('filters update', data);
      this.setState({ enabledProviders: data });
    };

    this.feedSubscriber = (data) => {
      console.info('posts update', data);
      this.setState({ posts: data });
    }

    this.state = {
      posts: this.props.feedStore.getAll(),
      enabledProviders: this.props.filterStore.getEnabled()
    };
  }

  componentDidMount() {
    this.props.feedStore.subscribe(this.feedSubscriber);
    this.props.filterStore.subscribe(this.filterSubscriber);

    this.props.feedStore.load();
  }

  componentWillUnmount() {
    this.props.feedStore.unsubscribe(this.feedSubscriber);
    this.props.filterStore.unsubscribe(this.filterSubscriber);
  }

  render() {
    const feedStore = this.props.feedStore;
    const filterStore = this.props.filterStore;

    return <div>
        <Header user={this.props.user} />
        <div style={contentContainer}>
          <Feed
            user={this.props.user}
            posts={this.state.posts}
            commentPost={feedStore.comment}
            likePost={feedStore.like}
            repostPost={feedStore.repost}
          />
          <Filter
            providers={this.state.enabledProviders}
            toggleProvider={filterStore.toggleProvider}
          />
        </div>
      </div>;
  }
}
