import React, {SyntheticEvent} from 'react';
import {container, containerInner, button} from './actionsStyles';
import {ActionsProps} from './ActionsProps';

export class Actions extends React.Component<ActionsProps, any> {
  handleLike = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.likePost(this.props.post);
  }

  handleRepost = (event: SyntheticEvent) => {
    event.preventDefault();

    this.props.repostPost(this.props.post);
  }

  render() {
    const post = this.props.post;
    const repostElement = post.repostsAmount == null
    ? null
    : <div>
        <button style={button} onClick={this.handleRepost}><i className="fa fa-retweet" aria-hidden="true" /></button>
        {post.repostsAmount === 0 ? null : <span style={{ fontSize: '13px' }}>{post.repostsAmount}</span>}
      </div>

    return <div style={container}>
      <div style={containerInner}>
        <button style={button} onClick={this.handleLike}><i className="fa fa-heart" aria-hidden="true" /></button>
        <span style={{ fontSize: '13px' }}>{post.likesAmount}</span>
      </div>
      {repostElement}
    </div>
  }
}
