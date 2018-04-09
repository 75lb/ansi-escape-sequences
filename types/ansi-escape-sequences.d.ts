export interface cursor {
/**
   * Moves the cursor `lines` cells up. If the cursor is already at the edge of the screen, this has no effect
   * @param lines
   */
  up : (lines?: number) => string//function (lines) { return csi + (lines || 1) + 'A' },

  /**
   * Moves the cursor `lines` cells down. If the cursor is already at the edge of the screen, this has no effect
   */
  down: (lines?: number) => string

  /**
   * Moves the cursor `lines` cells forward. If the cursor is already at the edge of the screen, this has no effect
   */
  forward: (lines?: number) => string

  /**
   * Moves the cursor `lines` cells back. If the cursor is already at the edge of the screen, this has no effect
   */
  back: (lines?: number) => string

  /**
   * Moves cursor to beginning of the line n lines down.
   */
  nextLine: (lines?: number) => string

  /**
   * Moves cursor to beginning of the line n lines up.
   */
  previousLine: (lines?: number) => string

  /**
   * Moves the cursor to column n.
   */
  horizontalAbsolute: (n?: number) => string

  /**
   * Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.
   */
  position: (n?: number, m?: number) => string

  /**
   * Hides the cursor
   */
  hide: string

  /**
   * Shows the cursor
   */
  show: string
}

export interface erase {
  /**
   * Clears part of the screen. If n is 0 (or missing), clear from cursor to end of screen. If n is 1, clear from cursor to beginning of the screen. If n is 2, clear entire screen.
   * @param n {number}
   * @return {string}
   */
  display: (n?: number) => string

  /**
   * Erases part of the line. If n is zero (or missing), clear from cursor to the end of the line. If n is one, clear from cursor to beginning of the line. If n is two, clear entire line. Cursor position does not change.
   * @param n {number}
   * @return {string}
   */
  inLine: (n?: number) => string
}

/**
 * Returns an ansi sequence setting one or more effects
 * @param {string | string[]} - a style, or list or styles
 * @returns {string}
 * @example
 * > ansi.styles('green')
 * '\u001b[32m'
 *
 * > ansi.styles([ 'green', 'underline' ])
 * '\u001b[32;4m'
 */
export function styles (effectArray:string|Array<string>): string



/**
 * A convenience function, applying the provided styles to the input string and then resetting.
 *
 * Inline styling can be applied using the syntax `[style-list]{text to format}`, where `style-list` is a space-separated list of styles from {@link module:ansi-escape-sequences.style ansi.style}. For example `[bold white bg-red]{bold white text on a red background}`.
 *
 * @param {string} - the string to format
 * @param [styleArray] {string[]} - a list of styles to add to the input string
 * @returns {string}
 * @example
 * > ansi.format('what?', 'green')
 * '\u001b[32mwhat?\u001b[0m'
 *
 * > ansi.format('what?', ['green', 'bold'])
 * '\u001b[32;1mwhat?\u001b[0m'
 *
 * > ansi.format('[green bold]{what?}')
 * '\u001b[32;1mwhat?\u001b[0m'
 */
export function format(str: string, styleArray: Array<string>): string

export interface style {
  reset: string
  bold: string
  italic: string
  underline: string
  fontDefault: string
  font2: string
  font3: string
  font4: string
  font5: string
  font6: string
  imageNegative: string
  imagePositive: string
  black: string
  red: string
  green: string
  yellow: string
  blue: string
  magenta: string
  cyan: string
  white: string
  grey: string
  gray: string
  'bg-black': string
  'bg-red': string
  'bg-green': string
  'bg-yellow': string
  'bg-blue': string
  'bg-magenta': string
  'bg-cyan': string
  'bg-white': string
  'bg-grey': string
  'bg-gray': string
}