import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | editpage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:editpage');
    assert.ok(route);
  });
});
