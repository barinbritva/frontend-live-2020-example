import React, {ChangeEvent, SyntheticEvent} from 'react';
import {button, container, input} from './commentFormStyles';
import {CommentFormState} from './CommentFormState';
import {CommentFormProps} from './CommentFormProps';

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

    const feedStore = this.props.feedStore;

    feedStore.comment(this.props.post, this.state.text)

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
