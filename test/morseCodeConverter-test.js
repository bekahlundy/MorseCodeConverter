const assert = require('chai').assert;
const { morseCodeConverter } = require('../lib/morseCodeConverter.js');

describe('morseCodeConverter', () => {

  it('returns HEY JUDE', () => {
    assert.deepEqual(morseCodeConverter('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
  })
  it('returns SOS', () => {
    assert.deepEqual(morseCodeConverter('...---...'), 'SOS')
  })
  it('returns SOS HEY JUDE', () => {
    assert.deepEqual(morseCodeConverter('...---...   .... . -.--   .--- ..- -.. .'), 'SOS HEY JUDE')
  })
  it('returns SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', () => {
    assert.deepEqual(morseCodeConverter('... --- ... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-'), 'SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')
  })
})
