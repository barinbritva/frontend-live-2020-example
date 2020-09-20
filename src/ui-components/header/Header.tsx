import React from 'react';
import {avatarImage, container, content, userContainer, heading} from './headerStyles'
import {HeaderProps} from './HeaderProps';

export class Header extends React.Component<HeaderProps, object> {
  render() {
    const user = this.props.user;

    return <header style={container}>
      <div style={content}>
       <h1 style={heading}>MyFeed</h1>
        <div style={userContainer}>
          <img
            style={avatarImage}
            src={user.avatar}
            alt={user.name}
          />
          <div style={{ lineHeight: '20px' }}>
            <div style={{ fontWeight: 600 }}>{user.name}</div>
            <div style={{ fontSize: '14px' }}>@{user.username}</div>
          </div>
        </div>
      </div>
    </header>
  }
}
