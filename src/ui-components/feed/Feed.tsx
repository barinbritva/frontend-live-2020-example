import  React from 'react';
import {Post} from '../post/Post';
import {container} from './feedStyles';
import {FeedProps} from './FeedProps';

export class Feed extends React.Component<FeedProps, any> {
  render() {
    const postsElements = this.props.posts.map((post) => {
      return <Post key={post.provider + post.id} post={post} feedStore={this.props.feedStore}/>
    })

    return <main style={container}>
      {postsElements}
    </main>
  }
}
