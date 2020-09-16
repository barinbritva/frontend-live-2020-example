import React from 'react';
import {CommentsProps} from './CommentsProps';

export class Comments extends React.Component<CommentsProps, any> {
  render() {
    const commentsElements = this.props.comments.map((comment, key) => {
      return <li key={key}>{comment}</li>
    })

    return <ul>
      {commentsElements}
    </ul>
  }
}
