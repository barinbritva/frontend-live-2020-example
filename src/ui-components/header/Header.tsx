import React from 'react';
import {avatarImage, container, content, userContainer} from './headerStyles'
import {HeaderProps} from './HeaderProps';

export class Header extends React.Component<HeaderProps, object> {
  render() {
    const user = this.props.user;

    return <header style={container}>
      <div style={content}>
       <h1>MyFeed</h1>
        <div style={userContainer}>
          <img
            style={avatarImage}
            src={user.avatar}
            alt={user.name}
          />
          <div>
            <div>{user.name}</div>
            <div>@{user.username}</div>
          </div>
        </div>
      </div>
    </header>
  }
}
