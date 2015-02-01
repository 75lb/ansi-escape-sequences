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
  * [enum: .sgr](#module_ansi-escape-sequences.sgr) → <code>string</code>
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
  * [.sgrSequence(effectArray)](#module_ansi-escape-sequences.sgrSequence) ⇒ <code>string</code>
  * [.format(str, effectArray)](#module_ansi-escape-sequences.format) ⇒ <code>string</code>

<a name="module_ansi-escape-sequences.sgr"></a>
## enum: ansi.sgr → <code>string</code>
Select Graphic Rendition codes

**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| reset | <code>string</code> | `[0m` | 
| bold | <code>string</code> | `[1m` | 
| italic | <code>string</code> | `[3m` | 
| underline | <code>string</code> | `[4m` | 
| fontDefault | <code>string</code> | `[10m` | 
| font2 | <code>string</code> | `[11m` | 
| font3 | <code>string</code> | `[12m` | 
| font4 | <code>string</code> | `[13m` | 
| font5 | <code>string</code> | `[14m` | 
| font6 | <code>string</code> | `[15m` | 
| imageNegative | <code>string</code> | `[7m` | 
| imagePositive | <code>string</code> | `[27m` | 
| black | <code>string</code> | `[30m` | 
| red | <code>string</code> | `[31m` | 
| green | <code>string</code> | `[32m` | 
| yellow | <code>string</code> | `[33m` | 
| blue | <code>string</code> | `[34m` | 
| magenta | <code>string</code> | `[35m` | 
| cyan | <code>string</code> | `[36m` | 
| white | <code>string</code> | `[37m` | 

**Example**  
```js
console.log(ansi.sgr.red + "this is red" + ansi.sgr.reset);
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

| Param | Type | Default |
| --- | --- | --- |
| [lines] | <code>number</code> | <code>1</code> | 

<a name="module_ansi-escape-sequences.cursor.down"></a>
### cursor.down([lines]) ⇒ <code>string</code>
Moves the cursor `lines` cells down. If the cursor is already at the edge of the screen, this has no effect

| Param | Type | Default |
| --- | --- | --- |
| [lines] | <code>number</code> | <code>1</code> | 

<a name="module_ansi-escape-sequences.cursor.forward"></a>
### cursor.forward([lines]) ⇒ <code>string</code>
Moves the cursor `lines` cells forward. If the cursor is already at the edge of the screen, this has no effect

| Param | Type | Default |
| --- | --- | --- |
| [lines] | <code>number</code> | <code>1</code> | 

<a name="module_ansi-escape-sequences.cursor.back"></a>
### cursor.back([lines]) ⇒ <code>string</code>
Moves the cursor `lines` cells back. If the cursor is already at the edge of the screen, this has no effect

| Param | Type | Default |
| --- | --- | --- |
| [lines] | <code>number</code> | <code>1</code> | 

<a name="module_ansi-escape-sequences.cursor.nextLine"></a>
### cursor.nextLine([lines]) ⇒ <code>string</code>
Moves cursor to beginning of the line n lines down.

| Param | Type | Default |
| --- | --- | --- |
| [lines] | <code>number</code> | <code>1</code> | 

<a name="module_ansi-escape-sequences.cursor.previousLine"></a>
### cursor.previousLine([lines]) ⇒ <code>string</code>
Moves cursor to beginning of the line n lines up.

| Param | Type | Default |
| --- | --- | --- |
| [lines] | <code>number</code> | <code>1</code> | 

<a name="module_ansi-escape-sequences.cursor.horizontalAbsolute"></a>
### cursor.horizontalAbsolute(n) ⇒ <code>string</code>
Moves the cursor to column n.

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | column number |

<a name="module_ansi-escape-sequences.cursor.position"></a>
### cursor.position(n, m) ⇒ <code>string</code>
Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | row number |
| m | <code>number</code> | column number |

<a name="module_ansi-escape-sequences.erase"></a>
## ansi.erase
erase sequences


* [.erase](#module_ansi-escape-sequences.erase)
  * [.display(n)](#module_ansi-escape-sequences.erase.display) ⇒ <code>string</code>
  * [.inLine(n)](#module_ansi-escape-sequences.erase.inLine) ⇒ <code>string</code>

<a name="module_ansi-escape-sequences.erase.display"></a>
### erase.display(n) ⇒ <code>string</code>
Clears part of the screen. If n is 0 (or missing), clear from cursor to end of screen. If n is 1, clear from cursor to beginning of the screen. If n is 2, clear entire screen.

| Param | Type |
| --- | --- |
| n | <code>number</code> | 

<a name="module_ansi-escape-sequences.erase.inLine"></a>
### erase.inLine(n) ⇒ <code>string</code>
Erases part of the line. If n is zero (or missing), clear from cursor to the end of the line. If n is one, clear from cursor to beginning of the line. If n is two, clear entire line. Cursor position does not change.

| Param | Type |
| --- | --- |
| n | <code>number</code> | 

<a name="module_ansi-escape-sequences.sgrSequence"></a>
## ansi.sgrSequence(effectArray) ⇒ <code>string</code>
Returns an a sequence setting one or more effects

| Param | Type | Description |
| --- | --- | --- |
| effectArray | <code>string</code> \| <code>Array.&lt;string&gt;</code> | a sgr effect, or list of effects |

**Example**  
```js
> ansi.sgrSequence("green")
'\u001b[32m'
> ansi.sgrSequence([ "green", "underline" ])
'\u001b[32;4m'
```
<a name="module_ansi-escape-sequences.format"></a>
## ansi.format(str, effectArray) ⇒ <code>string</code>
Formats the input string with the specified sgr effects

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to format |
| effectArray | <code>Array.&lt;string&gt;</code> | a list of sgr effects to add |

**Example**  
```js
> ansi.format("what?", "green")
'\u001b[32mwhat?\u001b[0m'
> ansi.format("what?", ["green", "bold"])
'\u001b[32;1mwhat?\u001b[0m'
```


*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*

&copy; 2015 Lloyd Brookes <75pound@gmail.com>
