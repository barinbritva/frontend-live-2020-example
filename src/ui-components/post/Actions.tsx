import React, {SyntheticEvent} from 'react';
import {container} from './actionsStyles';
import {ActionsProps} from './ActionsProps';

export class Actions extends React.Component<ActionsProps, any> {
  handleLike = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.feedStore.like(this.props.post);
  }

  handleRepost = (event: SyntheticEvent) => {
    event.preventDefault();

    this.props.feedStore.repost(this.props.post);
  }

  render() {
    const post = this.props.post;
    const repostElement = post.likesAmount == null
    ? null
    : <div>
        <button onClick={this.handleRepost}>Repost</button>
        {post.repostsAmount === 0 ? null : <span>{post.repostsAmount}</span>}
      </div>

    return <div style={container}>
      <div>
        <button onClick={this.handleLike}>Like</button>
        <span>{post.likesAmount}</span>
      </div>
      {repostElement}
    </div>
  }
}
