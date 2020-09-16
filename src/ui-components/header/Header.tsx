import React from 'react';
import {avatarImage, container, content, userContainer} from './headerStyles'

export class Header extends React.Component<object, object> {
  render() {
    return <header style={container}>
      <div style={content}>
       <h1>MyFeed</h1>
        <div style={userContainer}>
          <img
            style={avatarImage}
            src={'https://avatars2.githubusercontent.com/u/4758362?s=460&u=f32df0d3035eaec0440246dec3f4cb934e298f6e&v=4'}
            alt={'Ali Ragimov'}
          />
          <div>
            <div>Ali Ragimov</div>
            <div>@barinbritva</div>
          </div>
        </div>
      </div>
    </header>
  }
}
