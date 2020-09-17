import React, {ChangeEvent, SyntheticEvent} from 'react';
import {button, container, input} from './commentFormStyles';
import {CommentFormState} from './CommentFormState';
import {CommentFormProps} from './CommentFormProps';
import {PostComment} from '../../logic/interfaces/PostComment';

export class CommentForm extends React.Component<CommentFormProps, CommentFormState> {
  constructor(props: any, context?: any) {
    super(props, context);

    this.state = {
      text: ''
    }
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const user = this.props.user;

    const comment: PostComment = {
      text: this.state.text,
      date: new Date(),
      author: {
        name: user.name,
        avatar: user.avatar
      }
    }

    this.props.commentPost(this.props.post, comment)

    this.setState({
      text: ''
    })
  }

  render() {
    return <form style={container} onSubmit={this.handleSubmit}>
      <input
        style={input}
        type="text"
        placeholder={'Add comment'}
        value={this.state.text}
        onChange={this.handleInput}
      />
      <input style={button} type="submit" value={'Post'} />
    </form>
  }
}
