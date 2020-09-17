import React from 'react';
import {CommentsProps} from './CommentsProps';

export class Comments extends React.Component<CommentsProps, any> {
  render() {
    const commentsElements = this.props.comments.map((comment, key) => {
      const date = comment.date.getDate() + ' ' + comment.date.toLocaleString('default', {month: 'short'})

      return <li key={key}>
        <div>
          <img src={comment.author.avatar} alt={comment.author.name}/>
          <div>{date}</div>
        </div>
        <div>
          <div>{comment.author.name}</div>
          <div>{comment.text}</div>
        </div>
      </li>
    })

    return <ul>
      {commentsElements}
    </ul>
  }
}
