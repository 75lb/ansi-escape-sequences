const Tom = require('test-runner').Tom
const ansi = require('./')
const a = require('assert')

const tom = module.exports = new Tom('ansi')

tom.test('format', function () {
  const result = ansi.format('clive', ['red', 'underline'])
  a.strictEqual(result, '\u001b[31m\u001b[4mclive\u001b[0m')
})

tom.test('format bg-rgb', function () {
  const result = ansi.format('hello', 'bg-rgb(100,0,100)')
  a.strictEqual(result, '\u001b[48;2;100;0;100mhello\u001b[0m')
})

tom.test('inline format', function () {
  const result = ansi.format('before [red underline]{clive} after')
  a.strictEqual(result, 'before \u001b[31m\u001b[4mclive\u001b[0m after')
})

tom.test('inline format rgb', function () {
  const result = ansi.format('before [rgb(150,0,150) underline]{clive} after')
  a.strictEqual(result, 'before \u001b[38;2;150;0;150m\u001b[4mclive\u001b[0m after')
})
