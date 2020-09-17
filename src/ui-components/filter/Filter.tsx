import React from 'react';
import {container} from './filterStyles';
import {FilterProps} from './FilterProps';
import {SocialMediaProvider} from '../../logic/types/SocialMediaProvider';

export class Filter extends React.Component<FilterProps, any> {
  handleToggleProvider(provider: SocialMediaProvider) {
    this.props.toggleProvider(provider);
  }

  render() {
    const providers = this.props.providers;

    return <aside style={container}>
      <div>Sources</div>
      <form>
        <label style={{display: 'block'}}>
          <input
            type="checkbox"
            checked={providers.includes('facebook')}
            onChange={this.handleToggleProvider.bind(this, 'facebook')}
          />
          <span>
            Facebook
          </span>
        </label>
        <label style={{display: 'block'}}>
          <input
            type="checkbox"
            checked={providers.includes('instagram')}
            onChange={this.handleToggleProvider.bind(this, 'instagram')}
          />
          <span>
            Instagram
          </span>
        </label>
      </form>
    </aside>;
  }
}
