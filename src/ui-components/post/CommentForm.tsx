import React from 'react';
import {button, container, input} from './commentFormStyles';

export class CommentForm extends React.Component<any, any> {
  render() {
    return <form style={container}>
      <input style={input} type="text" placeholder={'Add comment'}/>
      <input style={button} type="submit" value={'Post'}/>
    </form>
  }
}
