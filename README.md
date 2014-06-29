[![view on npm](http://img.shields.io/npm/v/ansi-escape-sequences.svg)](https://www.npmjs.org/package/ansi-escape-sequences)
[![npm module downloads per month](http://img.shields.io/npm/dm/ansi-escape-sequences.svg)](https://www.npmjs.org/package/ansi-escape-sequences)
[![Build Status](https://travis-ci.org/75lb/ansi-escape-sequences.svg?branch=master)](https://travis-ci.org/75lb/ansi-escape-sequences)
[![Dependency Status](https://david-dm.org/75lb/ansi-escape-sequences.svg)](https://david-dm.org/75lb/ansi-escape-sequences)

***work in progress, draft documentation***

#ansi-escape-sequences
<a name="module_ansi-escape-sequences"></a>

A simple library containing all the known [ansi escape codes and sequences](http://en.wikipedia.org/wiki/ANSI_escape_code).

  
**Example**  
```js
var ansi = require("ansi-escape-sequences");
```
**Symbols**  
  * [ansi.cursorUp()](#module_ansi-escape-sequences.cursorUp)
  * [ansi.cursorDown()](#module_ansi-escape-sequences.cursorDown)
  * [ansi.format(str, effectArray)](#module_ansi-escape-sequences.format)
  * [ansi.reset](#module_ansi-escape-sequences.reset)
  * [ansi.bold](#module_ansi-escape-sequences.bold)
  * [ansi.italic](#module_ansi-escape-sequences.italic)
  * [ansi.underline](#module_ansi-escape-sequences.underline)
  * [ansi.imageNegative](#module_ansi-escape-sequences.imageNegative)
  * [ansi.fontDefault](#module_ansi-escape-sequences.fontDefault)
  * [ansi.font2](#module_ansi-escape-sequences.font2)
  * [ansi.font3](#module_ansi-escape-sequences.font3)
  * [ansi.font4](#module_ansi-escape-sequences.font4)
  * [ansi.font5](#module_ansi-escape-sequences.font5)
  * [ansi.font6](#module_ansi-escape-sequences.font6)

<a name="module_ansi-escape-sequences.cursorUp"></a>
###ansi.cursorUp()
Moves the cursor `lines` (default 1) cells up. If the cursor is already at the edge of the screen, this has no effect

<a name="module_ansi-escape-sequences.cursorDown"></a>
###ansi.cursorDown()
Moves the cursor `lines` (default 1) cells down. If the cursor is already at the edge of the screen, this has no effect

<a name="module_ansi-escape-sequences.format"></a>
###ansi.format(str, effectArray)
**Params**

- str `string` - the string to format
- effectArray `Array.<string>` - a list of sgr effects to add

**Returns**: `string`  
<a name="module_ansi-escape-sequences.reset"></a>
###ansi.reset
remove all sgr effects

**Type**: `string`  
<a name="module_ansi-escape-sequences.bold"></a>
###ansi.bold
Bold or increased intensity

**Type**: `string`  
<a name="module_ansi-escape-sequences.italic"></a>
###ansi.italic
**Type**: `string`  
<a name="module_ansi-escape-sequences.underline"></a>
###ansi.underline
**Type**: `string`  
<a name="module_ansi-escape-sequences.imageNegative"></a>
###ansi.imageNegative
**Type**: `string`  
<a name="module_ansi-escape-sequences.fontDefault"></a>
###ansi.fontDefault
**Type**: `string`  
<a name="module_ansi-escape-sequences.font2"></a>
###ansi.font2
**Type**: `string`  
<a name="module_ansi-escape-sequences.font3"></a>
###ansi.font3
**Type**: `string`  
<a name="module_ansi-escape-sequences.font4"></a>
###ansi.font4
**Type**: `string`  
<a name="module_ansi-escape-sequences.font5"></a>
###ansi.font5
**Type**: `string`  
<a name="module_ansi-escape-sequences.font6"></a>
###ansi.font6
**Type**: `string`  
