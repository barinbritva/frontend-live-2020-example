import  React from 'react';
import {Post} from '../post/Post';
import {container} from './feedStyles';
import {FeedProps} from './FeedProps';

export class Feed extends React.Component<FeedProps, any> {
  render() {
    const postsElements = this.props.posts.map((post) => {
      return <Post
        key={post.provider + post.id}
        post={post}
        commentPost={this.props.commentPost}
        likePost={this.props.likePost}
        repostPost={this.props.repostPost}
      />
    })

    return <main style={container}>
      {postsElements}
    </main>
  }
}
