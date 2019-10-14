const Tom = require('test-runner').Tom
const ansi = require('./')
const a = require('assert')

const tom = module.exports = new Tom('ansi')

tom.test('format', function () {
  a.strictEqual(ansi.format('clive', ['red', 'underline']), '\u001b[31;4mclive\u001b[0m')
})

tom.test('inline format', function () {
  a.strictEqual(ansi.format('before [red underline]{clive} after'), 'before \u001b[31;4mclive\u001b[0m after')
})
