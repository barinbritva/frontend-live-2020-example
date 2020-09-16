import  React from 'react';
import {Post} from '../post/Post';
import {container} from './feedStyles';

export class Feed extends React.Component<any, any> {
  render() {
    return <main style={container}>
      <Post/>
    </main>
  }
}
