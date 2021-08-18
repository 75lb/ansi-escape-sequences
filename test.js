import TestRunner from 'test-runner'
import ansi from 'ansi-escape-sequences'
import { strict as a } from 'assert'

const tom = new TestRunner.Tom()

tom.test('format', function () {
  const result = ansi.format('clive', ['red', 'underline'])
  a.equal(result, '\u001b[31m\u001b[4mclive\u001b[0m')
})

tom.test('format number', function () {
  const result = ansi.format(-100, ['red', 'underline'])
  a.equal(result, '\u001b[31m\u001b[4m-100\u001b[0m')
})

tom.test('format bg-rgb', function () {
  const result = ansi.format('hello', 'bg-rgb(100,0,100)')
  a.equal(result, '\u001b[48;2;100;0;100mhello\u001b[0m')
})

tom.test('inline format', function () {
  const result = ansi.format('before [red underline]{clive} after')
  a.equal(result, 'before \u001b[31m\u001b[4mclive\u001b[0m after')
})

tom.test('inline format rgb', function () {
  const result = ansi.format('before [rgb(150,0,150) underline]{clive} after')
  a.equal(result, 'before \u001b[38;2;150;0;150m\u001b[4mclive\u001b[0m after')
})

export default tom
