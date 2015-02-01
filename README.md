[![view on npm](http://img.shields.io/npm/v/ansi-escape-sequences.svg)](https://www.npmjs.org/package/ansi-escape-sequences)
[![npm module downloads per month](http://img.shields.io/npm/dm/ansi-escape-sequences.svg)](https://www.npmjs.org/package/ansi-escape-sequences)
[![Build Status](https://travis-ci.org/75lb/ansi-escape-sequences.svg?branch=master)](https://travis-ci.org/75lb/ansi-escape-sequences)
[![Dependency Status](https://david-dm.org/75lb/ansi-escape-sequences.svg)](https://david-dm.org/75lb/ansi-escape-sequences)

***work in progress, draft documentation***

<a name="module_ansi-escape-sequences"></a>
##ansi-escape-sequences
A simple library containing all the known [ansi escape codes and sequences](http://en.wikipedia.org/wiki/ANSI_escape_code).

**Example**  
```js
var ansi = require("ansi-escape-sequences");

* [ansi-escape-sequences](#module_ansi-escape-sequences)
  * [enum: .sgr](#module_ansi-escape-sequences.sgr) → <code>string</code>
  * [.sgrSequence(effectArray)](#module_ansi-escape-sequences.sgrSequence) ⇒ <code>string</code>
  * [.cursorUp()](#module_ansi-escape-sequences.cursorUp)
  * [.cursorDown()](#module_ansi-escape-sequences.cursorDown)
  * [.format(str, effectArray)](#module_ansi-escape-sequences.format) ⇒ <code>string</code>

<a name="module_ansi-escape-sequences.sgr"></a>
###enum: ansi.sgr → <code>string</code>
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
<a name="module_ansi-escape-sequences.sgrSequence"></a>
###ansi.sgrSequence(effectArray) ⇒ <code>string</code>
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
<a name="module_ansi-escape-sequences.cursorUp"></a>
###ansi.cursorUp()
Moves the cursor `lines` (default 1) cells up. If the cursor is already at the edge of the screen, this has no effect

<a name="module_ansi-escape-sequences.cursorDown"></a>
###ansi.cursorDown()
Moves the cursor `lines` (default 1) cells down. If the cursor is already at the edge of the screen, this has no effect

<a name="module_ansi-escape-sequences.format"></a>
###ansi.format(str, effectArray) ⇒ <code>string</code>
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

