const TestRunner = require('test-runner')
const ansi = require('../')
const runner = new TestRunner()
const a = require('assert')

runner.test('format', function () {
  a.strictEqual(ansi.format('clive', ['red', 'underline']), '\u001b[31;4mclive\u001b[0m')
})

runner.test('inline format', function () {
  a.strictEqual(ansi.format('before [red underline]{clive} after'), 'before \u001b[31;4mclive\u001b[0m after')
})

runner.test('nested inline format', function () {
  a.strictEqual(ansi.format('before [red underline]{inside [green]{nested}} after'),
        'before \u001b[31;4minside \u001b[32mnested\u001b[0m\u001b[31;4m\u001b[0m after')
})

runner.test('escaped inline format', function () {
  a.strictEqual(ansi.format('[red]{all this \\} is red} \\[green]{not green}'), '\u001b[31mall this } is red\u001b[0m [green]{not green}')
})

runner.test('escaped escape sequence', function () {
  a.strictEqual(ansi.format('\\[red]{not red} \\\\[red]{red\\\\}'), '')
})
