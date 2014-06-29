[![view on npm](http://img.shields.io/npm/v/ansi-escape-sequences.svg)](https://www.npmjs.org/package/ansi-escape-sequences)
[![npm module downloads per month](http://img.shields.io/npm/dm/ansi-escape-sequences.svg)](https://www.npmjs.org/package/ansi-escape-sequences)
[![Build Status](https://travis-ci.org/75lb/ansi-escape-sequences.svg?branch=master)](https://travis-ci.org/75lb/ansi-escape-sequences)
[![Dependency Status](https://david-dm.org/75lb/ansi-escape-sequences.svg)](https://david-dm.org/75lb/ansi-escape-sequences)
![Analytics](https://ga-beacon.appspot.com/UA-27725889-6/ansi-escape-sequences/README.md?pixel)

#ansi-escape-sequences
<a name="module_ansi-escape-sequences"></a>

A simple library containing all the known [ansi escape codes and sequences](http://en.wikipedia.org/wiki/ANSI_escape_code).

  
**Symbols**  
  * [ansi-escape-sequences.reset](#module_ansi-escape-sequences.reset)
  * [ansi-escape-sequences.bold](#module_ansi-escape-sequences.bold)
  * [ansi-escape-sequences.cursorUp(lines)](#module_ansi-escape-sequences.cursorUp)
  * [ansi-escape-sequences.cursorDown(lines)](#module_ansi-escape-sequences.cursorDown)
  * [ansi-escape-sequences.format(str, effectArray)](#module_ansi-escape-sequences.format)

<a name="module_ansi-escape-sequences.reset"></a>
###ansi-escape-sequences.reset
remove all sgr effects

**Type**: `string`  
<a name="module_ansi-escape-sequences.bold"></a>
###ansi-escape-sequences.bold
Bold or increased intensity

**Type**: `string`  
<a name="module_ansi-escape-sequences.cursorUp"></a>
###ansi-escape-sequences.cursorUp(lines)
**Params**

- lines `number` - the number of lines to move up

<a name="module_ansi-escape-sequences.cursorDown"></a>
###ansi-escape-sequences.cursorDown(lines)
**Params**

- lines `number` - the number of lines to move down

<a name="module_ansi-escape-sequences.format"></a>
###ansi-escape-sequences.format(str, effectArray)
**Params**

- str `string` - the string to format
- effectArray `Array.<string>` - a list of sgr effects to add

**Returns**: `string`  
