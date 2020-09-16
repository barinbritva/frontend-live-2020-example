import React from 'react';
import {Header} from '../header/Header';
import {contentContainer} from './appStyles';
import {Feed} from '../feed/Feed';
import {Filter} from '../filter/Filter';

export class App extends React.Component<any, any> {
  render() {
    return <div>
        <Header />
        <div style={contentContainer}>
          <Feed />
          <Filter />
        </div>
      </div>;
  }
}
