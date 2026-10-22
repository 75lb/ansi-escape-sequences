import arrayify from 'array-back'

/*~
ansi-escape-sequences

Something

Data
  id: ansi-escape-sequences
  codeType: Package

Example
  import * as ansi from 'ansi-escape-sequences'
*/

/* Control Sequence Initiator */
const csi = '\x1b['

/*~
style

Various formatting styles (aka Select Graphic Rendition codes).

Data
  id: style
  parent: ansi-escape-sequences
  codeType: Enum, Named Export

Example
  console.log(ansi.style.red + 'this is red' + ansi.style.reset)
*/
const style = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  fontDefault: '\x1b[10m',
  font2: '\x1b[11m',
  font3: '\x1b[12m',
  font4: '\x1b[13m',
  font5: '\x1b[14m',
  font6: '\x1b[15m',
  imageNegative: '\x1b[7m',
  imagePositive: '\x1b[27m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  grey: '\x1b[90m',
  gray: '\x1b[90m',
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[92m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',
  brightWhite: '\x1b[97m',
  'bg-black': '\x1b[40m',
  'bg-red': '\x1b[41m',
  'bg-green': '\x1b[42m',
  'bg-yellow': '\x1b[43m',
  'bg-blue': '\x1b[44m',
  'bg-magenta': '\x1b[45m',
  'bg-cyan': '\x1b[46m',
  'bg-white': '\x1b[47m',
  'bg-grey': '\x1b[100m',
  'bg-gray': '\x1b[100m',
  'bg-brightRed': '\x1b[101m',
  'bg-brightGreen': '\x1b[102m',
  'bg-brightYellow': '\x1b[103m',
  'bg-brightBlue': '\x1b[104m',
  'bg-brightMagenta': '\x1b[105m',
  'bg-brightCyan': '\x1b[106m',
  'bg-brightWhite': '\x1b[107m'
}

/*~
rgb (r, g, b)

Returns a 24-bit "true colour" foreground colour escape sequence.

Params

  Param                 | Type             | Description
  ---                   | ---              | ---
  r | Number | Red value.
  g | Number | Green value.
  b | Number | Blue value.

Data
  id: rgb
  parent: ansi-escape-sequences
  codeType: Function, Named Export
  returns: String

Example
  > rgb(120, 0, 120)
  '\u001b[38;2;120;0;120m'
*/
function rgb (r, g, b) {
  return `\x1b[38;2;${r};${g};${b}m`
}

/*~
bgRgb (r, g, b)

Returns a 24-bit "true colour" background colour escape sequence.

Params
  Param                 | Type             | Description
  ---                   | ---              | ---
  r | Number | Red value.
  g | Number | Green value.
  b | Number | Blue value.

Example
  > bgRgb(120, 0, 120)
  '\u001b[48;2;120;0;120m'

Data
  id: bgRgb
  parent: ansi-escape-sequences
  codeType: Function, Named Export
  returns: String
*/
function bgRgb (r, g, b) {
  return `\x1b[48;2;${r};${g};${b}m`
}

/*~
styles (styles)

Returns an ansi sequence setting one or more styles.

Params
  Param                 | Type             | Description
  ---                   | ---              | ---
  styles | string\|string[] | One or more style strings.

Data
  id: styles
  parent: ansi-escape-sequences
  codeType: Function, Named Export
  returns: String

Example
  > ansi.styles('green')
  '\u001b[32m'
  > ansi.styles([ 'green', 'underline' ])
  '\u001b[32m\u001b[4m'
  > ansi.styles([ 'bg-red', 'rgb(200,200,200)' ])
  '\u001b[41m\u001b[38;2;200;200;200m'
*/
function styles (styles) {
  styles = arrayify(styles)
  return styles
    .map(function (effect) {
      const rgbMatches = effect.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
      const bgRgbMatches = effect.match(/bg-rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
      if (bgRgbMatches) {
        const [full, r, g, b] = bgRgbMatches
        return bgRgb(r, g, b)
      } else if (rgbMatches) {
        const [full, r, g, b] = rgbMatches
        return rgb(r, g, b)
      } else {
        return style[effect]
      }
    })
    .join('')
}

/*~
format (str, styleArray)

A convenience function, applying the styles provided in `styleArray` to the input string.

Partial, inline styling can also be applied using the syntax `[style-list]{text to format}` anywhere within the input string, where `style-list` is a space-separated list of styles from {@link module:ansi-escape-sequences.style ansi.style}. For example `[bold white bg-red]{bold white text on a red background}`.

24-bit "true colour" values can be set using `rgb(n,n,n)` syntax (no spaces), for example `[rgb(255,128,0) underline]{orange underlined}`. Background 24-bit colours can be set using `bg-rgb(n,n,n)` syntax.

Params
  Param                 | Type             | Description
  ---                   | ---              | ---
  str | string | The string to format. Can also include inline-formatting using the syntax `[style-list]{text to format}` anywhere within the string.
  [styleArray] | string\|string[] | One or more style strings to apply to the input string. Valid strings are any property from the [`ansi.style`](https://github.com/75lb/ansi-escape-sequences#ansistyle--enum) object (e.g. `red` or `bg-red`), `rgb(n,n,n)` or `bg-rgb(n,n,n)`.

Data
  id: format
  parent: ansi-escape-sequences
  codeType: Function, Named Export
  returns: String

Example
  > ansi.format('what?', 'green')
  '\u001b[32mwhat?\u001b[0m'

  > ansi.format('what?', ['green', 'bold'])
  '\u001b[32m\u001b[1mwhat?\u001b[0m'

  > ansi.format('something', ['rgb(255,128,0)', 'bold'])
  '\u001b[38;2;255;128;0m\u001b[1msomething\u001b[0m'

  > ansi.format('Inline styling: [rgb(255,128,0) bold]{something}')
  'Inline styling: \u001b[38;2;255;128;0m\u001b[1msomething\u001b[0m'

  > ansi.format('Inline styling: [bg-rgb(255,128,0) bold]{something}')
  'Inline styling: \u001b[48;2;255;128;0m\u001b[1msomething\u001b[0m'
*/
function format (str, styleArray) {
  const re = /\[([\w\s-\(\),]+)\]{([^]*?)}/
  let matches
  str = String(str)
  if (!str) return ''

  while (matches = str.match(re)) {
    const inlineStyles = matches[1].split(/\s+/)
    const inlineString = matches[2]
    str = str.replace(matches[0], format(inlineString, inlineStyles))
  }

  return (styleArray && styleArray.length)
    ? styles(styleArray) + str + style.reset
    : str
}

/*
cursor-related sequences
*/
const cursor = {
  /*~
  cursor.up (lines)

  Moves the cursor `lines` cells up. If the cursor is already at the edge of the screen, this has no effect

  Params
    Param | Type   | Description
    ---   | ---    | ---
    lines | number | Defaults to 1

  Data
    id: cursor.up
    parent: ansi-escape-sequences
    codeType: Function
    returns: String
  */
  up: function (lines) { return csi + (lines || 1) + 'A' },

  /*~
  cursor.down (lines)

  Moves the cursor `lines` cells down. If the cursor is already at the edge of the screen, this has no effect

  Params
    Param | Type   | Description
    ---   | ---    | ---
    lines | number | Defaults to 1

  Data
    id: cursor.down
    parent: ansi-escape-sequences
    codeType: Function
    returns: String
  */
  down: function (lines) { return csi + (lines || 1) + 'B' },

  /*~
  cursor.forward (lines)

  Moves the cursor `lines` cells forward. If the cursor is already at the edge of the screen, this has no effect

  Params
    Param | Type   | Description
    ---   | ---    | ---
    lines | number | Defaults to 1

  Data
    id: cursor.forward
    parent: ansi-escape-sequences
    codeType: Function
    returns: String
  */
  forward: function (lines) { return csi + (lines || 1) + 'C' },

  /*~
  cursor.back (lines)

  Moves the cursor `lines` cells back. If the cursor is already at the edge of the screen, this has no effect

  Params
    Param | Type   | Description
    ---   | ---    | ---
    lines | number | Defaults to 1

  Data
    id: cursor.back
    parent: ansi-escape-sequences
    codeType: Function
    returns: String
  */
  back: function (lines) { return csi + (lines || 1) + 'D' },

  /*~
  cursor.nextLine (lines)

  Moves cursor to beginning of the line n lines down.

  Params
    Param | Type   | Description
    ---   | ---    | ---
    lines | number | Defaults to 1

  Data
    id: cursor.nextLine
    parent: ansi-escape-sequences
    codeType: Function
    returns: String
  */
  nextLine: function (lines) { return csi + (lines || 1) + 'E' },

  /*~
  cursor.previousLine (lines)

  Moves cursor to beginning of the line n lines up.

  Params
    Param | Type   | Description
    ---   | ---    | ---
    lines | number | Defaults to 1

  Data
    id: cursor.previousLine
    parent: ansi-escape-sequences
    codeType: Function
    returns: String
  */
  previousLine: function (lines) { return csi + (lines || 1) + 'F' },

  /*~
  cursor.horizontalAbsolute (lines)

  Moves the cursor to column n.

  Params
    Param | Type   | Description
    ---   | ---    | ---
    n | number | Column number

  Data
    id: cursor.horizontalAbsolute
    parent: ansi-escape-sequences
    codeType: Function
    returns: String
  */
  horizontalAbsolute: function (n) { return csi + n + 'G' },

  /*~
  cursor.position (lines)

  Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.

  Params
    Param | Type   | Description
    ---   | ---    | ---
    n | number | Row number
    m | number | Column number

  Data
    id: cursor.position
    parent: ansi-escape-sequences
    codeType: Function
    returns: String
  */
  position: function (n, m) { return csi + (n || 1) + ';' + (m || 1) + 'H' },

  /*~
   * Hides the cursor
  */
  hide: csi + '?25l',

  /*~
   * Shows the cursor
  */
  show: csi + '?25h'
}

/*~
 * erase sequences
*/
const erase = {
  /*~
   * Clears part of the screen. If n is 0 (or missing), clear from cursor to end of screen. If n is 1, clear from cursor to beginning of the screen. If n is 2, clear entire screen.
   * @param n {number}
   * @return {string}
  */
  display: function (n) { return csi + (n || 0) + 'J' },

  /*~
   * Erases part of the line. If n is zero (or missing), clear from cursor to the end of the line. If n is one, clear from cursor to beginning of the line. If n is two, clear entire line. Cursor position does not change.
   * @param n {number}
   * @return {string}
  */
  inLine: function (n) { return csi + (n || 0) + 'K' }
}

export { style, rgb, bgRgb, styles, format, cursor, erase }
