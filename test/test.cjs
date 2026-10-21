const ansi = require('ansi-escape-sequences')
const a = require('node:assert').strict

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('format', function () {
  const result = ansi.format('clive', ['red', 'underline'])
  a.equal(result, '\u001b[31m\u001b[4mclive\u001b[0m')
})

module.exports = { test, only, skip }
