import React from 'react';
import {container, filtersHeading, form, formLabel, formLabelText} from './filterStyles';
import {FilterProps} from './FilterProps';
import {SocialMediaProvider} from '../../logic/types/SocialMediaProvider';

export class Filter extends React.Component<FilterProps, any> {
  handleToggleProvider(provider: SocialMediaProvider) {
    this.props.toggleProvider(provider);
  }

  render() {
    const providers = this.props.providers;

    return <aside style={container}>
      <div style={filtersHeading}>Sources</div>
      <form style={form}>
        <label style={formLabel}>
          <input
            type="checkbox"
            checked={providers.includes('facebook')}
            onChange={this.handleToggleProvider.bind(this, 'facebook')}
          />
          <span style={formLabelText}>
            Facebook
          </span>
        </label>
        <label style={formLabel}>
          <input
            type="checkbox"
            checked={providers.includes('instagram')}
            onChange={this.handleToggleProvider.bind(this, 'instagram')}
          />
          <span style={formLabelText}>
            Instagram
          </span>
        </label>
      </form>
    </aside>;
  }
}
