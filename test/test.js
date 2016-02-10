var test = require('tape')
var ansi = require('../')

test('format', function (t) {
  t.equal(ansi.format('clive', ['red', 'underline']), '\u001b[31;4mclive\u001b[0m')
  t.end()
})

test('inline format', function (t) {
  t.equal(ansi.format('before [red underline]{clive} after'), 'before \u001b[31;4mclive\u001b[0m after')
  t.end()
})

test('inline format, eachWord', function (t) {
  t.equal(
    ansi.format('one two', ['red', 'underline'], { eachWord: true }),
    '\u001b[31;4mone\u001b[0m \u001b[31;4mtwo\u001b[0m'
  )
  t.end()
})

test('inline format, eachWord, newlines', function (t) {
  t.equal(
    ansi.format('one\ntwo', ['red', 'underline'], { eachWord: true }),
    '\u001b[31;4mone\u001b[0m\n\u001b[31;4mtwo\u001b[0m'
  )
  t.end()
})
