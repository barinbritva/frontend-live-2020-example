import  React from 'react';
import {avatar, container, postImage, userContainer} from './postStyles';
import {CommentForm} from './CommentForm';
import {PostProps} from './PostProps';
import {Comments} from './Comments';
import {Actions} from './Actions';

export class Post extends React.Component<PostProps, any> {
  render() {
    const post = this.props.post;
    const providerName = post.provider.charAt(0).toUpperCase() + post.provider.slice(1);
    const date = post.date.getDate() + ' ' + post.date.toLocaleString('default', {month: 'short'})
    const imageElement = post.image
    ? <img
        style={postImage}
        src={post.image}
        alt={''}
      />
    : null

    return <article style={container}>
      <header style={userContainer}>
        <img
          style={avatar}
          alt={post.author.name}
          src={post.author.avatar}
        />
        <div>
          <div>{post.author.name}</div>
          <div>
            <span>{date}</span>
            <span> * </span>
            <span>{providerName}</span>
          </div>
        </div>
      </header>
      <main>
        <div>{post.text}</div>
        {imageElement}
      </main>
      <footer>
        <Actions post={post} feedStore={this.props.feedStore}/>
        <Comments comments={post.comments} post={post}/>
        <CommentForm feedStore={this.props.feedStore} post={post} />
      </footer>
    </article>
  }
}
