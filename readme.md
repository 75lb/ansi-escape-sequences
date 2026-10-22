<a id="api-ansi-escape-sequences"></a>

- [ansi-escape-sequences](#api-ansi-escape-sequences) <sup><mark>Package</mark></sup>
  - [style](#api-style) <sup><mark>Enum, Named Export</mark></sup>
  - [rgb (r, g, b)](#api-rgb) <sup><mark>Function, Named Export</mark></sup>
  - [bgRgb (r, g, b)](#api-bgRgb) <sup><mark>Function, Named Export</mark></sup>
  - [styles (styles)](#api-styles) <sup><mark>Function, Named Export</mark></sup>
  - [format (str, styleArray)](#api-format) <sup><mark>Function, Named Export</mark></sup>
  - [cursor.up (lines)](#api-cursor.up) <sup><mark>Function</mark></sup>
  - [cursor.down (lines)](#api-cursor.down) <sup><mark>Function</mark></sup>
  - [cursor.forward (lines)](#api-cursor.forward) <sup><mark>Function</mark></sup>
  - [cursor.back (lines)](#api-cursor.back) <sup><mark>Function</mark></sup>
  - [cursor.nextLine (lines)](#api-cursor.nextLine) <sup><mark>Function</mark></sup>
  - [cursor.previousLine (lines)](#api-cursor.previousLine) <sup><mark>Function</mark></sup>
  - [cursor.horizontalAbsolute (lines)](#api-cursor.horizontalAbsolute) <sup><mark>Function</mark></sup>
  - [cursor.position (lines)](#api-cursor.position) <sup><mark>Function</mark></sup>

# ansi-escape-sequences

Something

**Type**: Package



**Example**

```
import * as ansi from 'ansi-escape-sequences'
```


<a id="api-style"></a>

## style

Various formatting styles (aka Select Graphic Rendition codes).

**Type**: Enum, Named Export



**Example**

```
console.log(ansi.style.red + 'this is red' + ansi.style.reset)
```

<a id="api-rgb"></a>

## rgb (r, g, b)

Returns a 24-bit "true colour" foreground colour escape sequence.

**Type**: Function, Named Export  
**Returns**: `String`

**Params**

Param                 | Type             | Description
---                   | ---              | ---
r | Number | Red value.
g | Number | Green value.
b | Number | Blue value.

**Example**

```
> rgb(120, 0, 120)
'\u001b[38;2;120;0;120m'
```

<a id="api-bgRgb"></a>

## bgRgb (r, g, b)

Returns a 24-bit "true colour" background colour escape sequence.

**Type**: Function, Named Export  
**Returns**: `String`

**Params**

Param                 | Type             | Description
---                   | ---              | ---
r | Number | Red value.
g | Number | Green value.
b | Number | Blue value.

**Example**

```
> bgRgb(120, 0, 120)
'\u001b[48;2;120;0;120m'
```

<a id="api-styles"></a>

## styles (styles)

Returns an ansi sequence setting one or more styles.

**Type**: Function, Named Export  
**Returns**: `String`

**Params**

Param                 | Type             | Description
---                   | ---              | ---
styles | string\|string[] | One or more style strings.

**Example**

```
> ansi.styles('green')
'\u001b[32m'
> ansi.styles([ 'green', 'underline' ])
'\u001b[32m\u001b[4m'
> ansi.styles([ 'bg-red', 'rgb(200,200,200)' ])
'\u001b[41m\u001b[38;2;200;200;200m'
```

<a id="api-format"></a>

## format (str, styleArray)

A convenience function, applying the styles provided in `styleArray` to the input string.

Partial, inline styling can also be applied using the syntax `[style-list]{text to format}` anywhere within the input string, where `style-list` is a space-separated list of styles from {@link module:ansi-escape-sequences.style ansi.style}. For example `[bold white bg-red]{bold white text on a red background}`.

24-bit "true colour" values can be set using `rgb(n,n,n)` syntax (no spaces), for example `[rgb(255,128,0) underline]{orange underlined}`. Background 24-bit colours can be set using `bg-rgb(n,n,n)` syntax.

**Type**: Function, Named Export  
**Returns**: `String`

**Params**

Param                 | Type             | Description
---                   | ---              | ---
str | string | The string to format. Can also include inline-formatting using the syntax `[style-list]{text to format}` anywhere within the string.
[styleArray] | string\|string[] | One or more style strings to apply to the input string. Valid strings are any property from the [`ansi.style`](https://github.com/75lb/ansi-escape-sequences#ansistyle--enum) object (e.g. `red` or `bg-red`), `rgb(n,n,n)` or `bg-rgb(n,n,n)`.

**Example**

```
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
```

<a id="api-cursor.up"></a>

## cursor.up (lines)

Moves the cursor `lines` cells up. If the cursor is already at the edge of the screen, this has no effect

**Type**: Function  
**Returns**: `String`

**Params**

Param | Type   | Description
---   | ---    | ---
lines | number | Defaults to 1


<a id="api-cursor.down"></a>

## cursor.down (lines)

Moves the cursor `lines` cells down. If the cursor is already at the edge of the screen, this has no effect

**Type**: Function  
**Returns**: `String`

**Params**

Param | Type   | Description
---   | ---    | ---
lines | number | Defaults to 1


<a id="api-cursor.forward"></a>

## cursor.forward (lines)

Moves the cursor `lines` cells forward. If the cursor is already at the edge of the screen, this has no effect

**Type**: Function  
**Returns**: `String`

**Params**

Param | Type   | Description
---   | ---    | ---
lines | number | Defaults to 1


<a id="api-cursor.back"></a>

## cursor.back (lines)

Moves the cursor `lines` cells back. If the cursor is already at the edge of the screen, this has no effect

**Type**: Function  
**Returns**: `String`

**Params**

Param | Type   | Description
---   | ---    | ---
lines | number | Defaults to 1


<a id="api-cursor.nextLine"></a>

## cursor.nextLine (lines)

Moves cursor to beginning of the line n lines down.

**Type**: Function  
**Returns**: `String`

**Params**

Param | Type   | Description
---   | ---    | ---
lines | number | Defaults to 1


<a id="api-cursor.previousLine"></a>

## cursor.previousLine (lines)

Moves cursor to beginning of the line n lines up.

**Type**: Function  
**Returns**: `String`

**Params**

Param | Type   | Description
---   | ---    | ---
lines | number | Defaults to 1


<a id="api-cursor.horizontalAbsolute"></a>

## cursor.horizontalAbsolute (lines)

Moves the cursor to column n.

**Type**: Function  
**Returns**: `String`

**Params**

Param | Type   | Description
---   | ---    | ---
n | number | Column number


<a id="api-cursor.position"></a>

## cursor.position (lines)

Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.

**Type**: Function  
**Returns**: `String`

**Params**

Param | Type   | Description
---   | ---    | ---
n | number | Row number
m | number | Column number


