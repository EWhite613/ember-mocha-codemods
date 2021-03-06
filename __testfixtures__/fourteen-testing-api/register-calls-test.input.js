import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';


describe('GravatarImageComponent', function() {
  setupComponentTest('gravatar-image', {
    integration: true
  });

  beforeEach(function() {
    this.render(hbs`{{gravatar-image}}`);
    this.register('service:metrics', Service.extend({ trackEvent }));
  });

  it('renders', function() {
    this.register('service:metrics', Service.extend({ trackEvent }));
    expect(this.$('img')).to.exist;
  });
});
