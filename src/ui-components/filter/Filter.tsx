import React from 'react';
import {container} from './filterStyles';

export class Filter extends React.Component<any, any> {
  render() {
    return <aside style={container}>
      <div>Sources</div>
      <form>
        <label style={{display: 'block'}}>
          <input type="checkbox"/>
          <span>
            Twitter
          </span>
        </label>
        <label style={{display: 'block'}}>
          <input type="checkbox"/>
          <span>
            Facebook
          </span>
        </label>
      </form>
    </aside>;
  }
}
