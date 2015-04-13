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
  * [.sgr](#module_ansi-escape-sequences.sgr) : <code>string</code>
  * [.eEffects](#module_ansi-escape-sequences.eEffects) : <code>number</code>
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
## ansi.sgr : <code>string</code>
Select Graphic Rendition codes

**Kind**: static enum property of <code>[ansi-escape-sequences](#module_ansi-escape-sequences)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>reset</td><td><code>string</code></td><td><code>&quot;\u001b[0m&quot;</code></td><td></td>
    </tr><tr>
    <td>bold</td><td><code>string</code></td><td><code>&quot;\u001b[1m&quot;</code></td><td></td>
    </tr><tr>
    <td>italic</td><td><code>string</code></td><td><code>&quot;\u001b[3m&quot;</code></td><td></td>
    </tr><tr>
    <td>underline</td><td><code>string</code></td><td><code>&quot;\u001b[4m&quot;</code></td><td></td>
    </tr><tr>
    <td>fontDefault</td><td><code>string</code></td><td><code>&quot;\u001b[10m&quot;</code></td><td></td>
    </tr><tr>
    <td>font2</td><td><code>string</code></td><td><code>&quot;\u001b[11m&quot;</code></td><td></td>
    </tr><tr>
    <td>font3</td><td><code>string</code></td><td><code>&quot;\u001b[12m&quot;</code></td><td></td>
    </tr><tr>
    <td>font4</td><td><code>string</code></td><td><code>&quot;\u001b[13m&quot;</code></td><td></td>
    </tr><tr>
    <td>font5</td><td><code>string</code></td><td><code>&quot;\u001b[14m&quot;</code></td><td></td>
    </tr><tr>
    <td>font6</td><td><code>string</code></td><td><code>&quot;\u001b[15m&quot;</code></td><td></td>
    </tr><tr>
    <td>imageNegative</td><td><code>string</code></td><td><code>&quot;\u001b[7m&quot;</code></td><td></td>
    </tr><tr>
    <td>imagePositive</td><td><code>string</code></td><td><code>&quot;\u001b[27m&quot;</code></td><td></td>
    </tr><tr>
    <td>black</td><td><code>string</code></td><td><code>&quot;\u001b[30m&quot;</code></td><td></td>
    </tr><tr>
    <td>red</td><td><code>string</code></td><td><code>&quot;\u001b[31m&quot;</code></td><td></td>
    </tr><tr>
    <td>green</td><td><code>string</code></td><td><code>&quot;\u001b[32m&quot;</code></td><td></td>
    </tr><tr>
    <td>yellow</td><td><code>string</code></td><td><code>&quot;\u001b[33m&quot;</code></td><td></td>
    </tr><tr>
    <td>blue</td><td><code>string</code></td><td><code>&quot;\u001b[34m&quot;</code></td><td></td>
    </tr><tr>
    <td>magenta</td><td><code>string</code></td><td><code>&quot;\u001b[35m&quot;</code></td><td></td>
    </tr><tr>
    <td>cyan</td><td><code>string</code></td><td><code>&quot;\u001b[36m&quot;</code></td><td></td>
    </tr><tr>
    <td>white</td><td><code>string</code></td><td><code>&quot;\u001b[37m&quot;</code></td><td></td>
    </tr><tr>
    <td>sequence</td><td><code>string</code></td><td><code>&quot;function&quot;</code></td><td>Returns an a sequence setting one or more effects</td>
    </tr><tr>
    <td>format</td><td><code>string</code></td><td><code>&quot;function&quot;</code></td><td>A convenience function, formatting the input string with the specified sgr effects.</td>
    </tr>  </tbody>
</table>

**Example**  
```js
console.log(ansi.sgr.red + "this is red" + ansi.sgr.reset);
```
<a name="module_ansi-escape-sequences.eEffects"></a>
## ansi.eEffects : <code>number</code>
effects

**Kind**: static enum property of <code>[ansi-escape-sequences](#module_ansi-escape-sequences)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>reset</td><td><code>number</code></td><td><code>0</code></td>
    </tr><tr>
    <td>bold</td><td><code>number</code></td><td><code>1</code></td>
    </tr><tr>
    <td>italic</td><td><code>number</code></td><td><code>3</code></td>
    </tr><tr>
    <td>underline</td><td><code>number</code></td><td><code>4</code></td>
    </tr><tr>
    <td>imageNegative</td><td><code>number</code></td><td><code>7</code></td>
    </tr><tr>
    <td>fontDefault</td><td><code>number</code></td><td><code>10</code></td>
    </tr><tr>
    <td>font2</td><td><code>number</code></td><td><code>11</code></td>
    </tr><tr>
    <td>font3</td><td><code>number</code></td><td><code>12</code></td>
    </tr><tr>
    <td>font4</td><td><code>number</code></td><td><code>13</code></td>
    </tr><tr>
    <td>font5</td><td><code>number</code></td><td><code>14</code></td>
    </tr><tr>
    <td>font6</td><td><code>number</code></td><td><code>15</code></td>
    </tr><tr>
    <td>imagePositive</td><td><code>number</code></td><td><code>27</code></td>
    </tr><tr>
    <td>black</td><td><code>number</code></td><td><code>30</code></td>
    </tr><tr>
    <td>red</td><td><code>number</code></td><td><code>31</code></td>
    </tr><tr>
    <td>green</td><td><code>number</code></td><td><code>32</code></td>
    </tr><tr>
    <td>yellow</td><td><code>number</code></td><td><code>33</code></td>
    </tr><tr>
    <td>blue</td><td><code>number</code></td><td><code>34</code></td>
    </tr><tr>
    <td>magenta</td><td><code>number</code></td><td><code>35</code></td>
    </tr><tr>
    <td>cyan</td><td><code>number</code></td><td><code>36</code></td>
    </tr><tr>
    <td>white</td><td><code>number</code></td><td><code>37</code></td>
    </tr>  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor"></a>
## ansi.cursor
cursor-related sequences

**Kind**: static property of <code>[ansi-escape-sequences](#module_ansi-escape-sequences)</code>  

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

**Kind**: static method of <code>[cursor](#module_ansi-escape-sequences.cursor)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.down"></a>
### cursor.down([lines]) ⇒ <code>string</code>
Moves the cursor `lines` cells down. If the cursor is already at the edge of the screen, this has no effect

**Kind**: static method of <code>[cursor](#module_ansi-escape-sequences.cursor)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.forward"></a>
### cursor.forward([lines]) ⇒ <code>string</code>
Moves the cursor `lines` cells forward. If the cursor is already at the edge of the screen, this has no effect

**Kind**: static method of <code>[cursor](#module_ansi-escape-sequences.cursor)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.back"></a>
### cursor.back([lines]) ⇒ <code>string</code>
Moves the cursor `lines` cells back. If the cursor is already at the edge of the screen, this has no effect

**Kind**: static method of <code>[cursor](#module_ansi-escape-sequences.cursor)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.nextLine"></a>
### cursor.nextLine([lines]) ⇒ <code>string</code>
Moves cursor to beginning of the line n lines down.

**Kind**: static method of <code>[cursor](#module_ansi-escape-sequences.cursor)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.previousLine"></a>
### cursor.previousLine([lines]) ⇒ <code>string</code>
Moves cursor to beginning of the line n lines up.

**Kind**: static method of <code>[cursor](#module_ansi-escape-sequences.cursor)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[lines]</td><td><code>number</code></td><td><code>1</code></td>
    </tr>  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.horizontalAbsolute"></a>
### cursor.horizontalAbsolute(n) ⇒ <code>string</code>
Moves the cursor to column n.

**Kind**: static method of <code>[cursor](#module_ansi-escape-sequences.cursor)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>n</td><td><code>number</code></td><td><p>column number</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_ansi-escape-sequences.cursor.position"></a>
### cursor.position(n, m) ⇒ <code>string</code>
Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.

**Kind**: static method of <code>[cursor](#module_ansi-escape-sequences.cursor)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>n</td><td><code>number</code></td><td><p>row number</p>
</td>
    </tr><tr>
    <td>m</td><td><code>number</code></td><td><p>column number</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_ansi-escape-sequences.erase"></a>
## ansi.erase
erase sequences

**Kind**: static property of <code>[ansi-escape-sequences](#module_ansi-escape-sequences)</code>  

* [.erase](#module_ansi-escape-sequences.erase)
  * [.display(n)](#module_ansi-escape-sequences.erase.display) ⇒ <code>string</code>
  * [.inLine(n)](#module_ansi-escape-sequences.erase.inLine) ⇒ <code>string</code>

<a name="module_ansi-escape-sequences.erase.display"></a>
### erase.display(n) ⇒ <code>string</code>
Clears part of the screen. If n is 0 (or missing), clear from cursor to end of screen. If n is 1, clear from cursor to beginning of the screen. If n is 2, clear entire screen.

**Kind**: static method of <code>[erase](#module_ansi-escape-sequences.erase)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>n</td><td><code>number</code></td>
    </tr>  </tbody>
</table>

<a name="module_ansi-escape-sequences.erase.inLine"></a>
### erase.inLine(n) ⇒ <code>string</code>
Erases part of the line. If n is zero (or missing), clear from cursor to the end of the line. If n is one, clear from cursor to beginning of the line. If n is two, clear entire line. Cursor position does not change.

**Kind**: static method of <code>[erase](#module_ansi-escape-sequences.erase)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>n</td><td><code>number</code></td>
    </tr>  </tbody>
</table>


* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
