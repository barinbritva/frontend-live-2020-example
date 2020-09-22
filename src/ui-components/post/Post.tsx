import  React from 'react';
import {avatar, container, postImage, userContainer, userContainerInfo, postAuthor, postData, postText} from './postStyles';
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
        <a href={post.author.profileLink} target={'_blank'}>
          <img
            style={avatar}
            alt={post.author.name}
            src={post.author.avatar}
          />
        </a>
        <div style={userContainerInfo}>
          <a href={post.author.profileLink} target={'_blank'} style={postAuthor}>{post.author.name}</a>
          <div style={postData}>
            <span>{date}</span>
            <span> • </span>
            <span style={{ fontStyle: 'italic' }}>{providerName}</span>
          </div>
        </div>
      </header>
      <main>
        <div style={postText}>{post.text}</div>
        {imageElement}
      </main>
      <footer>
        <Actions post={post} repostPost={this.props.repostPost} likePost={this.props.likePost}/>
        <Comments comments={post.comments} post={post} />
        <CommentForm user={this.props.user} post={post} commentPost={this.props.commentPost} />
      </footer>
    </article>
  }
}
