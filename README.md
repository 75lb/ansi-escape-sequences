[![view on npm](http://img.shields.io/npm/v/ansi-escape-sequences.svg)](https://www.npmjs.org/package/ansi-escape-sequences)
[![npm module downloads](http://img.shields.io/npm/dt/ansi-escape-sequences.svg)](https://www.npmjs.org/package/ansi-escape-sequences)
[![Build Status](https://travis-ci.org/75lb/ansi-escape-sequences.svg?branch=master)](https://travis-ci.org/75lb/ansi-escape-sequences)
[![Dependency Status](https://david-dm.org/75lb/ansi-escape-sequences.svg)](https://david-dm.org/75lb/ansi-escape-sequences)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# ansi-escape-sequences
A simple library containing all known terminal [ansi escape codes and sequences](http://en.wikipedia.org/wiki/ANSI_escape_code). Useful for adding colour to your command-line output, or building a dynamic text user interface.

## Command-line usage
Format text in the terminal (bold red, in this case):
<pre><code>
$ echo yeah | ansi format bold red
<strong>yeah</strong>
</code></pre>

## API Reference
<a name="module_ansi-escape-sequences"></a>
**Example**
```js
var ansi = require('ansi-escape-sequences')
```

* ansi-escape-sequences
    * [.style](#module_ansi-escape-sequences.style) : `enum`  
    * [~eStyles](#module_ansi-escape-sequences..eStyles) : `enum`  
    * [.styles(effectArray)](#module_ansi-escape-sequences.styles) ⇒ `string`  
    * [.format(str, [styleArray])](#module_ansi-escape-sequences.format) ⇒ `string`  
    * [.cursor](#module_ansi-escape-sequences.cursor) : `object`  
        * [.up([lines])](#module_ansi-escape-sequences.cursor.up) ⇒ `string`  
        * [.down([lines])](#module_ansi-escape-sequences.cursor.down) ⇒ `string`  
        * [.forward([lines])](#module_ansi-escape-sequences.cursor.forward) ⇒ `string`  
        * [.back([lines])](#module_ansi-escape-sequences.cursor.back) ⇒ `string`  
        * [.nextLine([lines])](#module_ansi-escape-sequences.cursor.nextLine) ⇒ `string`  
        * [.previousLine([lines])](#module_ansi-escape-sequences.cursor.previousLine) ⇒ `string`  
        * [.horizontalAbsolute(n)](#module_ansi-escape-sequences.cursor.horizontalAbsolute) ⇒ `string`  
        * [.position(n, m)](#module_ansi-escape-sequences.cursor.position) ⇒ `string`  
        * [.hide](#module_ansi-escape-sequences.cursor.hide) : `string`  
        * [.show](#module_ansi-escape-sequences.cursor.show) : `string`  
    * [.erase](#module_ansi-escape-sequences.erase) : `object`  
        * [.display(n)](#module_ansi-escape-sequences.erase.display) ⇒ `string`  
        * [.inLine(n)](#module_ansi-escape-sequences.erase.inLine) ⇒ `string`  


<a name="module_ansi-escape-sequences.style"></a>
### ansi.style : `enum`  
Various formatting styles (aka Select Graphic Rendition codes).

**Properties**

| name          | type      | default | description |
| ------------- | --------- | ------- | ----------- |
| reset         |  `string` | [0m        |             |
| bold          |  `string` | [1m        |             |
| italic        |  `string` | [3m        |             |
| underline     |  `string` | [4m        |             |
| fontDefault   |  `string` | [10m        |             |
| font2         |  `string` | [11m        |             |
| font3         |  `string` | [12m        |             |
| font4         |  `string` | [13m        |             |
| font5         |  `string` | [14m        |             |
| font6         |  `string` | [15m        |             |
| imageNegative |  `string` | [7m        |             |
| imagePositive |  `string` | [27m        |             |
| black         |  `string` | [30m        |             |
| red           |  `string` | [31m        |             |
| green         |  `string` | [32m        |             |
| yellow        |  `string` | [33m        |             |
| blue          |  `string` | [34m        |             |
| magenta       |  `string` | [35m        |             |
| cyan          |  `string` | [36m        |             |
| white         |  `string` | [37m        |             |
| "bg-black"    |  `string` | [40m        |             |
| "bg-red"      |  `string` | [41m        |             |
| "bg-green"    |  `string` | [42m        |             |
| "bg-yellow"   |  `string` | [43m        |             |
| "bg-blue"     |  `string` | [44m        |             |
| "bg-magenta"  |  `string` | [45m        |             |
| "bg-cyan"     |  `string` | [46m        |             |
| "bg-white"    |  `string` | [47m        |             |

**Example**
```js
console.log(ansi.style.red + 'this is red' + ansi.style.reset)
```

<a name="module_ansi-escape-sequences..eStyles"></a>
### ansi~eStyles : `enum`  
style enum - used by `ansi.styles()`.

**Properties**

| name          | type      | default | description |
| ------------- | --------- | ------- | ----------- |
| reset         |  `number` | 0       |             |
| bold          |  `number` | 1       |             |
| italic        |  `number` | 3       |             |
| underline     |  `number` | 4       |             |
| imageNegative |  `number` | 7       |             |
| fontDefault   |  `number` | 10      |             |
| font2         |  `number` | 11      |             |
| font3         |  `number` | 12      |             |
| font4         |  `number` | 13      |             |
| font5         |  `number` | 14      |             |
| font6         |  `number` | 15      |             |
| imagePositive |  `number` | 27      |             |
| black         |  `number` | 30      |             |
| red           |  `number` | 31      |             |
| green         |  `number` | 32      |             |
| yellow        |  `number` | 33      |             |
| blue          |  `number` | 34      |             |
| magenta       |  `number` | 35      |             |
| cyan          |  `number` | 36      |             |
| white         |  `number` | 37      |             |
| "bg-black"    |  `number` | 40      |             |
| "bg-red"      |  `number` | 41      |             |
| "bg-green"    |  `number` | 42      |             |
| "bg-yellow"   |  `number` | 43      |             |
| "bg-blue"     |  `number` | 44      |             |
| "bg-magenta"  |  `number` | 45      |             |
| "bg-cyan"     |  `number` | 46      |             |
| "bg-white"    |  `number` | 47      |             |


<a name="module_ansi-escape-sequences.styles"></a>
### ansi.styles(effectArray) ⇒ `string`  
Returns an ansi sequence setting one or more effects

**Params**

| name        | type | description                |
| ----------- | ---- | -------------------------- |
| effectArray | TYPE | a style, or list or styles |

**Example**
```js
> ansi.styles('green')
'\u001b[32m'

> ansi.styles([ 'green', 'underline' ])
'\u001b[32;4m'
```

<a name="module_ansi-escape-sequences.format"></a>
### ansi.format(str, [styleArray]) ⇒ `string`  
A convenience function, applying the provided styles to the input string and then resetting.

Inline styling can be applied using the syntax `[style-list]{text to format}`, where `style-list` is a space-separated list of styles from {@link module:ansi-escape-sequences.style ansi.style}. For example `[bold white bg-red]{bold white text on a red background}`.

**Params**

| name       | type | description                                 |
| ---------- | ---- | ------------------------------------------- |
| str        | TYPE | the string to format                        |
| styleArray | TYPE | a list of styles to add to the input string |

**Example**
```js
> ansi.format('what?', 'green')
'\u001b[32mwhat?\u001b[0m'

> ansi.format('what?', ['green', 'bold'])
'\u001b[32;1mwhat?\u001b[0m'

> ansi.format('[green bold]{what?}')
'\u001b[32;1mwhat?\u001b[0m'
```

<a name="module_ansi-escape-sequences.cursor"></a>
### ansi.cursor : `object`  
cursor-related sequences


* [.cursor](#module_ansi-escape-sequences.cursor) : `object`  
    * [.up([lines])](#module_ansi-escape-sequences.cursor.up) ⇒ `string`  
    * [.down([lines])](#module_ansi-escape-sequences.cursor.down) ⇒ `string`  
    * [.forward([lines])](#module_ansi-escape-sequences.cursor.forward) ⇒ `string`  
    * [.back([lines])](#module_ansi-escape-sequences.cursor.back) ⇒ `string`  
    * [.nextLine([lines])](#module_ansi-escape-sequences.cursor.nextLine) ⇒ `string`  
    * [.previousLine([lines])](#module_ansi-escape-sequences.cursor.previousLine) ⇒ `string`  
    * [.horizontalAbsolute(n)](#module_ansi-escape-sequences.cursor.horizontalAbsolute) ⇒ `string`  
    * [.position(n, m)](#module_ansi-escape-sequences.cursor.position) ⇒ `string`  
    * [.hide](#module_ansi-escape-sequences.cursor.hide) : `string`  
    * [.show](#module_ansi-escape-sequences.cursor.show) : `string`  


<a name="module_ansi-escape-sequences.cursor.up"></a>
#### cursor.up([lines]) ⇒ `string`  
Moves the cursor `lines` cells up. If the cursor is already at the edge of the screen, this has no effect

**Params**

| name  | type | description |
| ----- | ---- | ----------- |
| lines | TYPE |             |


<a name="module_ansi-escape-sequences.cursor.down"></a>
#### cursor.down([lines]) ⇒ `string`  
Moves the cursor `lines` cells down. If the cursor is already at the edge of the screen, this has no effect

**Params**

| name  | type | description |
| ----- | ---- | ----------- |
| lines | TYPE |             |


<a name="module_ansi-escape-sequences.cursor.forward"></a>
#### cursor.forward([lines]) ⇒ `string`  
Moves the cursor `lines` cells forward. If the cursor is already at the edge of the screen, this has no effect

**Params**

| name  | type | description |
| ----- | ---- | ----------- |
| lines | TYPE |             |


<a name="module_ansi-escape-sequences.cursor.back"></a>
#### cursor.back([lines]) ⇒ `string`  
Moves the cursor `lines` cells back. If the cursor is already at the edge of the screen, this has no effect

**Params**

| name  | type | description |
| ----- | ---- | ----------- |
| lines | TYPE |             |


<a name="module_ansi-escape-sequences.cursor.nextLine"></a>
#### cursor.nextLine([lines]) ⇒ `string`  
Moves cursor to beginning of the line n lines down.

**Params**

| name  | type | description |
| ----- | ---- | ----------- |
| lines | TYPE |             |


<a name="module_ansi-escape-sequences.cursor.previousLine"></a>
#### cursor.previousLine([lines]) ⇒ `string`  
Moves cursor to beginning of the line n lines up.

**Params**

| name  | type | description |
| ----- | ---- | ----------- |
| lines | TYPE |             |


<a name="module_ansi-escape-sequences.cursor.horizontalAbsolute"></a>
#### cursor.horizontalAbsolute(n) ⇒ `string`  
Moves the cursor to column n.

**Params**

| name | type | description   |
| ---- | ---- | ------------- |
| n    | TYPE | column number |


<a name="module_ansi-escape-sequences.cursor.position"></a>
#### cursor.position(n, m) ⇒ `string`  
Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.

**Params**

| name | type | description   |
| ---- | ---- | ------------- |
| n    | TYPE | row number    |
| m    | TYPE | column number |


<a name="module_ansi-escape-sequences.cursor.hide"></a>
#### cursor.hide : `string`  
Hides the cursor


<a name="module_ansi-escape-sequences.cursor.show"></a>
#### cursor.show : `string`  
Shows the cursor


<a name="module_ansi-escape-sequences.erase"></a>
### ansi.erase : `object`  
erase sequences.


* [.erase](#module_ansi-escape-sequences.erase) : `object`  
    * [.display(n)](#module_ansi-escape-sequences.erase.display) ⇒ `string`  
    * [.inLine(n)](#module_ansi-escape-sequences.erase.inLine) ⇒ `string`  


<a name="module_ansi-escape-sequences.erase.display"></a>
#### erase.display(n) ⇒ `string`  
Clears part of the screen. If n is 0 (or missing), clear from cursor to end of screen. If n is 1, clear from cursor to beginning of the screen. If n is 2, clear entire screen.

**Params**

| name | type | description |
| ---- | ---- | ----------- |
| n    | TYPE |             |


<a name="module_ansi-escape-sequences.erase.inLine"></a>
#### erase.inLine(n) ⇒ `string`  
Erases part of the line. If n is zero (or missing), clear from cursor to the end of the line. If n is one, clear from cursor to beginning of the line. If n is two, clear entire line. Cursor position does not change.

**Params**

| name | type | description |
| ---- | ---- | ----------- |
| n    | TYPE |             |



## Install
As a library:

```
$ npm install ansi-escape-sequences --save
```

As a command-line tool:
```
$ npm install -g ansi-escape-sequences
```

* * *

&copy; 2015 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
