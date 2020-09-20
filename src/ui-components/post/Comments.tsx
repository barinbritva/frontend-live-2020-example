import React from 'react';
import {CommentsProps} from './CommentsProps';
import {commentContainer, image, commentInfo, authorName, commentDate, commentText} from './commentsStyles';

export class Comments extends React.Component<CommentsProps, any> {
  render() {
    const commentsElements = this.props.comments.map((comment, key) => {
      const date = comment.date.getDate() + ' ' + comment.date.toLocaleString('default', {month: 'short'})

      return <li key={key} style={commentContainer}>
        <div style={{ width: '10%' }}>
          <img src={comment.author.avatar} alt={comment.author.name} style={image} />
        </div>
        <div style={commentInfo}>
          <div style={authorName}>{comment.author.name}</div>
          <div style={commentDate}>{date}</div>
          <div style={commentText}>{comment.text}</div>
        </div>
      </li>
    })

    return <ul>
      {commentsElements}
    </ul>
  }
}
