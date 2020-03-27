const assert = require('assert');
const app = require('../../src/app');

describe('\'donate\' service', () => {
  it('registered the service', () => {
    const service = app.service('donate');

    assert.ok(service, 'Registered the service');
  });
});
