const assert = require('chai').assert;
const { newFunction } = require('../lib/newFunction.js');

describe('newFunction', () => {

  it('returns  num', () => {
    assert.deepEqual(newFunction(100), 100)
  })
})
