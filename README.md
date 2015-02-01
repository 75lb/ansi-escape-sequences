[![view on npm](http://img.shields.io/npm/v/ansi-escape-sequences.svg)](https://www.npmjs.org/package/ansi-escape-sequences)
[![npm module downloads per month](http://img.shields.io/npm/dm/ansi-escape-sequences.svg)](https://www.npmjs.org/package/ansi-escape-sequences)
[![Build Status](https://travis-ci.org/75lb/ansi-escape-sequences.svg?branch=master)](https://travis-ci.org/75lb/ansi-escape-sequences)
[![Dependency Status](https://david-dm.org/75lb/ansi-escape-sequences.svg)](https://david-dm.org/75lb/ansi-escape-sequences)

<a name="module_ansi-escape-sequences"></a>
# ansi-escape-sequences
A simple library containing all known terminal [ansi escape codes and sequences](http://en.wikipedia.org/wiki/ANSI_escape_code). Useful for adding colour to your command-line output, or building a dynamic text user interface.

**Example**  
```js
var ansi = require("ansi-escape-sequences");
```

* [ansi-escape-sequences](#module_ansi-escape-sequences)
  * [.sgr](#module_ansi-escape-sequences.sgr)
    * [.sequence()](#module_ansi-escape-sequences.sgr.sequence) ⇒ <code>string</code>
    * [.format()](#module_ansi-escape-sequences.sgr.format) ⇒ <code>string</code>
  * [.cursor](#module_ansi-escape-sequences.cursor)
    * [.up([lines])](#module_ansi-escape-sequences.cursor.up) ⇒ <code>string</code>
    * [.down([lines])](#module_ansi-escape-sequences.cursor.down) ⇒ <code>string</code>
    * [.forward([lines])](#module_ansi-escape-sequences.cursor.forward) ⇒ <code>string</code>
    * [.back([lines])](#module_ansi-escape-sequences.cursor.back) ⇒ <code>string</code>
    * [.nextLine([lines])](#module_ansi-escape-sequences.cursor.nextLine) ⇒ <code>string</code>
    * [.previousLine([lines])](#module_ansi-escape-sequences.cursor.previousLine) ⇒ <code>string</code>
    * [.horizontalAbsolute(n)](#module_ansi-escape-sequences.cursor.horizontalAbsolute) ⇒ <code>string</code>
    * [.position(n, m)](#module_ansi-escape-sequences.cursor.position) ⇒ <code>string</code>
  * [.erase](#module_ansi-escape-sequences.erase)
    * [.display(n)](#module_ansi-escape-sequences.erase.display) ⇒ <code>string</code>
    * [.inLine(n)](#module_ansi-escape-sequences.erase.inLine) ⇒ <code>string</code>

<a name="module_ansi-escape-sequences.sgr"></a>
## ansi.sgr
Select Graphic Rendition codes

**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>reset</td><td><code>string</code></td>
    </tr><tr>
    <td>bold</td><td><code>string</code></td>
    </tr><tr>
    <td>italic</td><td><code>string</code></td>
    </tr><tr>
    <td>underline</td><td><code>string</code></td>
    </tr><tr>
    <td>fontDefault</td><td><code>string</code></td>
    </tr><tr>
    <td>font2</td><td><code>string</code></td>
    </tr><tr>
    <td>font3</td><td><code>string</code></td>
    </tr><tr>
    <td>font4</td><td><code>string</code></td>
    </tr><tr>
    <td>font5</td><td><code>string</code></td>
    </tr><tr>
    <td>font6</td><td><code>string</code></td>
    </tr><tr>
    <td>imageNegative</td><td><code>string</code></td>
    </tr><tr>
    <td>imagePositive</td><td><code>string</code></td>
    </tr><tr>
    <td>black</td><td><code>string</code></td>
    </tr><tr>
    <td>red</td><td><code>string</code></td>
    </tr><tr>
    <td>green</td><td><code>string</code></td>
    </tr><tr>
    <td>yellow</td><td><code>string</code></td>
    </tr><tr>
    <td>blue</td><td><code>string</code></td>
    </tr><tr>
    <td>magenta</td><td><code>string</code></td>
    </tr><tr>
    <td>cyan</td><td><code>string</code></td>
    </tr><tr>
    <td>white</td><td><code>string</code></td>
    </tr>
  </tbody>
</table>

**Example**  
```js
console.log(ansi.sgr.red + "this is red" + ansi.sgr.reset);
```

* [.sgr](#module_ansi-escape-sequences.sgr)
  * [.sequence()](#module_ansi-escape-sequences.sgr.sequence) ⇒ <code>string</code>
  * [.format()](#module_ansi-escape-sequences.sgr.format) ⇒ <code>string</code>

<a name="module_ansi-escape-sequences.sgr.sequence"></a>
### sgr.sequence() ⇒ <code>string</code>
Returns an a sequence setting one or more effects

<table>
  <thead>
    <tr>
      <th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><code>string</code> | <code>Array.&lt;string&gt;</code></td><td>a sgr effect, or list of effects</td>
    </tr>
  </tbody>
</table>

**Example**  
```js
> ansi.sgrSequence("green")
'\u001b[32m'
> ansi.sgrSequence([ "green", "underline" ])
'\u001b[32;4m'
```
<a name="module_ansi-escape-sequences.sgr.format"></a>
### sgr.format() ⇒ <code>string</code>
A convenience function, formatting the input string with the specified sgr effects.

<table>
  <thead>
    <tr>
      <th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><code>string</code></td><td>the string to format</td>
    </tr><tr>
    <td><code>Array.&lt;string&gt;</code></td><td>a list of sgr effects to add</td>
    </tr>
  </tbody>
</table>

**Example**  
```js
> ansi.sgr.format("what?", "green")
'\u001b[32mwhat?\u001b[0m'
> ansi.sgr.format("what?", ["green", "bold"])
'\u001b[32;1mwhat?\u001b[0m'
```
<a name="module_ansi-escape-sequences.cursor"></a>
## ansi.cursor
cursor-related sequences


* [.cursor](#module_ansi-escape-sequences.cursor)
  * [.up([lines])](#module_ansi-escape-sequences.cursor.up) ⇒ <code>string</code>
  * [.down([lines])](#module_ansi-escape-sequences.cursor.down) ⇒ <code>string</code>
  * [.forward([lines])](#module_ansi-escape-sequences.cursor.forward) ⇒ <code>string</code>
  * [.back([lines])](#module_ansi-escape-sequences.cursor.back) ⇒ <code>string</code>
  * [.nextLine([lines])](#module_ansi-escape-sequences.cursor.nextLine) ⇒ <code>string</code>
  * [.previousLine([lines])](#module_ansi-escape-sequences.cursor.previousLine) ⇒ <code>string</code>
  * [.horizontalAbsolute(n)](#module_ansi-escape-sequences.cursor.horizontalAbsolute) ⇒ <code>string</code>
  * [.position(n, m)](#module_ansi-escape-sequences.cursor.position) ⇒ <code>string</code>

<a name="module_ansi-escape-sequences.cursor.up"></a>
### cursor.up([lines]) ⇒ <code>string</code>
Moves the cursor `lines` cells up. If the cursor is already at the edge of the screen, this has no effect

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>
  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.down"></a>
### cursor.down([lines]) ⇒ <code>string</code>
Moves the cursor `lines` cells down. If the cursor is already at the edge of the screen, this has no effect

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>
  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.forward"></a>
### cursor.forward([lines]) ⇒ <code>string</code>
Moves the cursor `lines` cells forward. If the cursor is already at the edge of the screen, this has no effect

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>
  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.back"></a>
### cursor.back([lines]) ⇒ <code>string</code>
Moves the cursor `lines` cells back. If the cursor is already at the edge of the screen, this has no effect

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>
  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.nextLine"></a>
### cursor.nextLine([lines]) ⇒ <code>string</code>
Moves cursor to beginning of the line n lines down.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>
  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.previousLine"></a>
### cursor.previousLine([lines]) ⇒ <code>string</code>
Moves cursor to beginning of the line n lines up.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>
  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.horizontalAbsolute"></a>
### cursor.horizontalAbsolute(n) ⇒ <code>string</code>
Moves the cursor to column n.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>n</td><td><code>number</code></td><td>column number</td>
    </tr>
  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.position"></a>
### cursor.position(n, m) ⇒ <code>string</code>
Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>n</td><td><code>number</code></td><td>row number</td>
    </tr><tr>
    <td>m</td><td><code>number</code></td><td>column number</td>
    </tr>
  </tbody>
</table>

<a name="module_ansi-escape-sequences.erase"></a>
## ansi.erase
erase sequences


* [.erase](#module_ansi-escape-sequences.erase)
  * [.display(n)](#module_ansi-escape-sequences.erase.display) ⇒ <code>string</code>
  * [.inLine(n)](#module_ansi-escape-sequences.erase.inLine) ⇒ <code>string</code>

<a name="module_ansi-escape-sequences.erase.display"></a>
### erase.display(n) ⇒ <code>string</code>
Clears part of the screen. If n is 0 (or missing), clear from cursor to end of screen. If n is 1, clear from cursor to beginning of the screen. If n is 2, clear entire screen.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>n</td><td><code>number</code></td>
    </tr>
  </tbody>
</table>

<a name="module_ansi-escape-sequences.erase.inLine"></a>
### erase.inLine(n) ⇒ <code>string</code>
Erases part of the line. If n is zero (or missing), clear from cursor to the end of the line. If n is one, clear from cursor to beginning of the line. If n is two, clear entire line. Cursor position does not change.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>n</td><td><code>number</code></td>
    </tr>
  </tbody>
</table>



*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*

&copy; 2015 Lloyd Brookes <75pound@gmail.com>
